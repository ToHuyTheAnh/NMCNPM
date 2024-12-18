// Đóng mở mục Tạo mới
const commonModalOpen = document.querySelector('.common-tab-create-btn');
const commonModalClose = document.querySelector('.common-modal-close-button');
const commonModalSave = document.querySelector('.common-modal-save-button');
const commonContainer = document.querySelector('.common-modal-container');
commonModalOpen.addEventListener('click', function (e) {
    commonContainer.classList.add('common-modal-open');
});
commonModalClose.addEventListener('click', function (e) {
    commonContainer.classList.remove('common-modal-open');
});
commonModalSave.addEventListener('click', function (e) {
    commonContainer.classList.remove('common-modal-open');
});

// Lựa chọn các loại phi ở trong mục Tạo mới
const commonTypeListItem = document.querySelectorAll('.common-type-list-item');
const commonTypeList = document.querySelector('.common-type-list');
commonTypeListItem.forEach(type => type.addEventListener('click', function (e) {
    const liSelector = e.target.closest('li');
    const textSelector = liSelector.querySelector('span').textContent;
    const typeText = document.querySelector('.common-modal-type-body-text');
    typeText.textContent = textSelector;
    typeText.classList.add('text-active');
    commonTypeList.classList.add('hidden');
    setTimeout(() => {
        commonTypeList.classList.remove('hidden');
    }, 100);
}));

// Tạo mới Phí
function createNewCharges(data, callback = () => { }) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(commonApi, options)
        .then(function (response) {
            if (!response.ok) {
                console.log('Dữ liệu của throww:', response);
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

function handleCreateNewCharges() {
    const saveButtonClick = document.querySelector('.common-modal-save-button');
    const chargeInputContainer = document.querySelector('.common-modal-container');
    console.log(saveButtonClick, chargeInputContainer);
    saveButtonClick.addEventListener('click', function (e) {
        let chargeNameInput = chargeInputContainer.querySelector('input[name="commonChargeName"]').value;
        let chargeTypeInput = commonCharges[chargeInputContainer.querySelector('.common-modal-type-body-text').textContent.trim()];
        let chargeUnitAmountInput = chargeInputContainer.querySelector('input[name="commonUnitAmount"]');
        let chargeUnitMeasurementInput = chargeInputContainer.querySelector('input[name="commonUnitMeasurement"]').value;
        let chargeDescriptionInput = chargeInputContainer.querySelector('input[name="commonDescription"]').value;
        var newCharge = {
            chargeName: chargeNameInput,
            type: chargeTypeInput,
            unitAmount: chargeUnitAmountInput,
            unitMeasurement: chargeUnitMeasurementInput,
            description: chargeDescriptionInput
        };
        console.log(newCharge);
        createNewCharges(newCharge, function (response) {
            if (response.code === 200) {
                console.log('Dữ liệu phản hồi: ', response);
                listCommons.push(response.result);
                // listResidentsValue.push(newResidentValue);
                renderCommons([response.result]);
            } else {
                alert("Lỗi: Không thể thêm căn hộ. Vui lòng điền đầy đủ thông tin!");
            }
        });
    });
}
// Xuất dữ liệu
var commonApi = "http://localhost:8080/project/charge";
var listCommons = [];
var code = 0;
function start() {
    getCommons(renderCommons);
    handleCreateNewCharges();
}

start();

function getCommons(callback = () => { }) {
    fetch(commonApi)
        .then(function (response) {
            if (!response.ok) {
                console.error("Error fetching common charges:", response.status);
                throw new Error("Failed to fetch common charges: " + response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            if (data.code === 200) {
                listCommons = data.result;
                callback(listCommons);
            }
        })
        .catch(function (error) {
            console.error("Fetch error:", error.message);
            alert("Không thể tải dữ liệu: " + error.message);
        });
}

var commonCharges = {
    'Phí đóng góp, ủng hộ': 'DONATION',
    'Phí quản lý chung cư': 'MANAGEMENT',
    'Phí dịch vụ': 'SERVICE'
}
// Xuất dữ liệu
function renderCommons(commons) {
    if (!commons || !Array.isArray(commons)) {
        console.warn("Invalid apartment data:", commons);
        return;
    }
    const chargeContainer = document.querySelector('.charge-container');
    const typeSelect = commonCharges[commonContainer.querySelector('.common-modal-type-body-text').textContent.trim()];
    var htmls = commons.filter(function (comli) {
        return comli.type === typeSelect;
    }).map(function (common) {
        return `
            <div class="charge-item" id="common-${common.id}">
                <span class="charge-item-text"> ${common.chargeName} </span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#212529" class="charge-item-icon">
                    <path
                        d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                </svg>
            </div>
        `;
    });
    if (typeSelect === "SERVICE") {
        const serviceContainer = chargeContainer.querySelector('.service-charge-body');
        serviceContainer.innerHTML += htmls.join('');
    } else if (typeSelect === "MANAGEMENT") {
        const managementContainer = chargeContainer.querySelector('.management-charge-body');
        managementContainer.innerHTML += htmls.join('');
    } else {
        const donationContainer = chargeContainer.querySelector('.donation-charge-body');
        donationContainer.innerHTML += htmls.join('');
    }
}
