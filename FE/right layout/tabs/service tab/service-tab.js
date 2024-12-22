// Đóng mở mục tạo mới
const serviceModalContainer = document.querySelector('.service-modal-container');
const serviceModalOpen = document.querySelector('.service-tab-button');
const serviceModalClose = document.querySelector('.service-modal-close-button');

serviceModalOpen.addEventListener('click', function (e) {
    serviceModalContainer.classList.add('service-modal-open');
});

serviceModalClose.addEventListener('click', function (e) {
    serviceModalContainer.classList.remove('service-modal-open');
});

// Danh sách chọn phương thức thanh toán 
const paymentMethodList = document.querySelectorAll('.service-payment-method-list-item');

paymentMethodList.forEach(method => method.addEventListener('click', function (e) {
    const liSelector = e.target.closest('li');
    const textSelector = liSelector.querySelector('span').textContent;
    const typeText = document.querySelector('input[name="servicePaymentMethod"]');
    typeText.value = textSelector;
    let paymentMethodListContainer = document.querySelector('.service-payment-method-list');
    paymentMethodListContainer.classList.add('hidden');
    setTimeout(() => {
        paymentMethodListContainer.classList.remove('hidden');
    }, 100);
}));

// Khởi tạo 
var serviceApi = "http://localhost:8080/project/charge";
var billApi = "http://localhost:8080/project/bill";
var serviceChargeList = [];
var billList = [];
var code = 0;

function start() {
    getServices(renderServiceChargesForCreateModal);
    getBills(renderBills);
    handleCreateNewBill();
}
start();
// Lấy dữ liệu phí dịch vụ
function getServices(callback = () => { }) {
    fetch(serviceApi)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('HTTP error' + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            serviceChargeList = data.result.filter(function (e) {
                return e.type === "SERVICE";
            });
            // console.log('Các phí dịch vụ:', serviceChargeList);
            callback(serviceChargeList);
        })
        .catch(function (error) {
            console.error("Fetch error:", error.message);
            alert("Không thể tải dữ liệu: " + error.message);
        });
}

// Lấy dữ liệu hóa đơn
function getBills(callback = () => { }) {
    fetch(billApi)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('HTTP error' + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            billList = data.result;
            callback(billList);
        })
        .catch(function (error) {
            console.error("Fetch error:", error.message);
            alert("Không thể tải dữ liệu: " + error.message);
        });
}

// Lấy dữ liệu các phí cho bảng tạo mới
function renderServiceChargesForCreateModal(serviceCharges) {
    const listServices = document.querySelector('.table-charges-list tbody');
    let listServicesHtml = serviceCharges.map(function (serviceCharge) {
        return `
        <tr class="table-row" id="${serviceCharge.id}">
            <td>${serviceCharge.chargeName}</td>
            <td> <input type="number" name="${serviceCharge.id}" class="inputInTable"> </td>
        </tr>
        `;
    })
    listServices.innerHTML += listServicesHtml.join('');
}

// Xuất dữ liệu 
function renderBills(bills) {
    var listBills = document.querySelector('.service-table');
    var htmls = bills.map(function (bill) {
        return `
        <tr class="table-row" id="service-${bill.id}">
            <td>${bill.apartmentId}</td>
            <td>${bill.monthYear}</td>
            <td>${bill.totalAmountPaid}</td>
            <td>${bill.status}</td>
            <td>${bill.paymentMethod}</td>
            <td class="table-icons">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#6c757d" class="table-icon">
                    <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#6c757d" class="table-icon">
                    <path
                        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
            </td>
        </tr>
        `;
    });
    listBills.innerHTML += htmls.join('');
}


// Tạo một hóa đơn mới
function createNewBills(data, callback = () => { }) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(billApi, options)
        .then(function (response) {
            if (!response.ok) {
                console.log('Dữ liệu của throw:', response);
                console.error("Error fetching charges:", response.status);
                throw new Error("Failed to fetch charges: " + response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            code = data.code;
            callback(data);
        })
        .catch(function (error) {
            console.error("Fetch error:", error.message);
            alert("Không thể tải dữ liệu: " + error.message);
        });
}
function handleCreateNewBill() {
    billSaveButton = document.querySelector('.service-modal-save-button');
    billSaveButton.addEventListener('click', function (e) {
        let apartmentNameInput = document.querySelector('input[name="serviceApartmentName"]').value;
        let apartmentIdInput = listApartments.find(function (e) {
            return e.apartmentName === apartmentNameInput;
        })
        let monthYearInput = document.querySelector('input[name="serviceMonthYear"]').value;
        let totalAmountPaidInput = document.querySelector('input[name="serviceAmountPaid"]').value;
        let statusInput = 'UNPAID';
        let paymentMethodInput = nameMethodListVN[document.querySelector('input[name="servicePaymentMethod"]').value.trim()];
        let listServiceChargesInput = [];
        document.querySelector('.table-charges-list').querySelectorAll('.table-row').forEach(function (val) {
            var x = {
                chargeId: val.id,
                unitQuantity: document.querySelector('input[name="' + val.id + '"]').value
            }
            listServiceChargesInput.push(x);
        });
        console.log(listServiceChargesInput);
        var newBill = {
            apartmentId: apartmentIdInput.id,
            apartmentChargeRequestList: listServiceChargesInput,
            // status: statusInput,
            monthYear: monthYearInput,
            totalAmountPaid: totalAmountPaidInput,
            paymentMethod: paymentMethodInput
        }
        console.log(newBill);
        createNewBills(newBill, function (response) {
            if (response.code === 200) {
                console.log('tao thanh cong');
            }
            else {
                alert("Lỗi: Không thể thêm căn hộ. Vui lòng điền đầy đủ thông tin!");
            }
        })
    });
}