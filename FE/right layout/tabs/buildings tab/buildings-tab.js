
const modalOpen = document.querySelector('.buildings-tab-button');
const modalSave = document.querySelector('.buildings-modal-save-button');
const modalClose = document.querySelector('.buildings-modal-close-button');
const trgt = document.querySelector('.buildings-modal-container');
console.log(modalOpen, modalSave, modalClose, trgt);
modalOpen.addEventListener('click', function (e) {
    trgt.classList.add('buildings-modal-open');
});
modalClose.addEventListener('click', function (e) {
    trgt.classList.remove('buildings-modal-open');
})
modalSave.addEventListener('click', function (e) {
    trgt.classList.remove('buildings-modal-open');
});
const apartmentApi = "http://localhost:8080/project/apartment";

function start() {
    getApartments(renderApartments);
}
start();

function getApartments(callback) {
    console.log("Fetching data from:", apartmentApi);
    fetch(apartmentApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function createNewApartment(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(apartmentApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}
function renderApartments(apartments) {
    var listApartments = document.querySelector('.buildings-table');
    console.log(listApartments);
    // var htmls = charges.map(function (charge) {
    //     return `
    //         <tr class="table-row" id="donation-charge-${charge.id}">
    //             <td>${charge.apartmentName}</td>
    //             <td name="donation-${charge.chargeId}" class="chargeName">${charge.chargeName}</td>
    //             <td>${charge.amountPaid}</td>
    //             <td name="${charge.paymentMethod}" class="paymentMethod"> ${nameMethod[charge.paymentMethod]} </td>
    //             <td>
    //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
    //                     width="24px" fill="#6c757d" class="table-icon">
    //                     <path
    //                         d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
    //                 </svg>
    //                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
    //                     width="24px" fill="#6c757d" class="table-icon">
    //                     <path
    //                         d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
    //                 </svg>
    //             </td>
    //         </tr>
    //         `;

    // });
    // listCharges.innerHTML += htmls.join('');
}

function handleCreateNewApartment() {
    let clickBtn = document.querySelector('.buildings-modal-save-button-text');
    clickBtn.addEventListener('click', function (e) {
        let apartmentName = document.querySelector('input[name="apartmentName"]').value;
        let floorNumber = document.querySelector('input[name="floorNumber"]').value;
        let apartmentNumber = document.querySelector('input[name="apartmentNumber"]').value;
        let area = document.querySelector('input[name="area"]').value;
        let status = document.querySelector('input[name="status"]').value;
        var newApartment = {
            apartmentName: apartmentName,
            floorNumber: floorNumber,
            apartmentNumber: apartmentNumber,
            area: area,
            status: status
        }
        createNewApartment(newApartment);
    })
}
