// Đóng mở mục đăng ký tạm trú
const tmpReigisModalOpen = document.querySelector('.resident-tab-tmp-regis-btn');
const tmpReigisModalSave = document.querySelector('.resident-tmp-regis-modal-save-button');
const tmpReigisModalClose = document.querySelector('.resident-tmp-regis-modal-close-button');
const tmpReigisContainer = document.querySelector('.resident-tmp-regis-modal-comtainer'); tmpReigisModalOpen.addEventListener('click', function (e) {
    tmpReigisContainer.classList.add('resident-tmp-regis-modal-open');
});
tmpReigisModalClose.addEventListener('click', function (e) {
    tmpReigisContainer.classList.remove('resident-tmp-regis-modal-open');
})
tmpReigisModalSave.addEventListener('click', function (e) {
    tmpReigisContainer.classList.remove('resident-tmp-regis-modal-open');
});

// Đóng mở mục đăng ký tạm vắng
const tmpAbsenceModalOpen = document.querySelector('.resident-tab-tmp-absence-btn');
const tmpAbsenceModalSave = document.querySelector('.resident-tmp-absence-modal-save-button');
const tmpAbsenceModalClose = document.querySelector('.resident-tmp-absence-modal-close-button');
const tmpAbsenceContainer = document.querySelector('.resident-tmp-absence-modal-comtainer');
tmpAbsenceModalOpen.addEventListener('click', function (e) {
    tmpAbsenceContainer.classList.add('resident-tmp-absence-modal-open');
});
tmpAbsenceModalClose.addEventListener('click', function (e) {
    tmpAbsenceContainer.classList.remove('resident-tmp-absence-modal-open');
})
tmpAbsenceModalSave.addEventListener('click', function (e) {
    tmpAbsenceContainer.classList.remove('resident-tmp-absence-modal-open');
});

// Đóng mở mục khai tử
const deathModalOpen = document.querySelector('.resident-tab-death-btn');
const deathModalSave = document.querySelector('.resident-death-modal-save-button');
const deathModalClose = document.querySelector('.resident-death-modal-close-button');
const deathContainer = document.querySelector('.resident-death-modal-container');
deathModalOpen.addEventListener('click', function (e) {
    deathContainer.classList.add('resident-death-modal-open');
});
deathModalClose.addEventListener('click', function (e) {
    deathContainer.classList.remove('resident-death-modal-open');
})
deathModalSave.addEventListener('click', function (e) {
    deathContainer.classList.remove('resident-death-modal-open');
});

// Đóng mở mục tạo mới nhân khẩu
const createModalOpen = document.querySelector('.resident-tab-create-btn');
const createModalSave = document.querySelector('.create-resident-modal-save-button');
const createModalClose = document.querySelector('.create-resident-modal-close-button');
const createContainer = document.querySelector('.create-resident-modal-container');
createModalOpen.addEventListener('click', function (e) {
    createContainer.classList.add('create-resident-modal-open');
});
createModalClose.addEventListener('click', function (e) {
    createContainer.classList.remove('create-resident-modal-open');
})
createModalSave.addEventListener('click', function (e) {
    createContainer.classList.remove('create-resident-modal-open');
});
// Đóng mở mục chỉnh sửa
const editCresidentModalSave = document.querySelector('.edit-resident-modal-save-button');
const editCresidentModalClose = document.querySelector('.edit-resident-modal-close-button');
const editCresidentContainer = document.querySelector('.edit-resident-modal-container');
editCresidentModalClose.addEventListener('click', function (e) {
    editCresidentContainer.classList.remove('edit-resident-modal-open');
})
editCresidentModalSave.addEventListener('click', function (e) {
    editCresidentContainer.classList.remove('edit-resident-modal-open');
});
// Điền giới tính
const sexSelect = document.querySelectorAll('.resident-input-sex-list-item');
sexSelect.forEach(sex => sex.addEventListener('click', function (e) {
    const liSelect = e.target.closest('li');
    const ulSelect = liSelect.closest('ul');
    const divSelect = ulSelect.closest('div');
    const textSelect = liSelect.querySelector('span').textContent;
    const inputSex = divSelect.querySelector('.resident-input-sex-text');
    inputSex.textContent = textSelect;
    ulSelect.classList.add('hidden');
    setTimeout(() => {
        ulSelect.classList.remove('hidden');
    }, 100);
}));

// Điền vai trò trong căn hộ
const roleSelect = document.querySelectorAll('.resident-input-apartment-role-list-item');
roleSelect.forEach(role => role.addEventListener('click', function (e) {
    const liSelect = e.target.closest('li');
    const ulSelect = liSelect.closest('ul');
    const divSelect = ulSelect.closest('div');
    const textSelect = liSelect.querySelector('span').textContent;
    const inputSex = divSelect.querySelector('.resident-input-apartment-role-text');
    inputSex.textContent = textSelect;
    ulSelect.classList.add('hidden');
    setTimeout(() => {
        ulSelect.classList.remove('hidden');
    }, 100);
}));

// Xuất dữ liệu
const residentApi = "http://localhost:8080/project/resident";
var listResidents = [];
var listResidentsValue = [];
var code = 0;
function start() {
    getResidents(renderResidents);
    handleCreateNewResident();
}
start();
function getResidents(callback = () => { }) {
    fetch(residentApi)
        .then(function (response) {
            if (!response.ok) {
                console.error("Error fetching apartments:", response.status);
                throw new Error("Failed to fetch apartments: " + response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            if (data.code === 200) {
                listResidents = data.result;
                callback(listResidents);
            }
        })
        .catch(function (error) {
            console.error("Fetch error:", error.message);
            alert("Không thể tải dữ liệu: " + error.message);
        });
}

// Thêm mới nhân khẩu
function createNewResident(data, callback = () => { }) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(residentApi, options)
        .then(function (response) {
            if (!response.ok) {
                console.error("Error fetching residents:", response.status);
                throw new Error("Failed to fetch residents: " + response.statusText);
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

function handleCreateNewResident() {
    let saveBtn = document.querySelector('.create-resident-modal-save-button');
    saveBtn.addEventListener('click', function (e) {
        let nameInput = document.querySelector('input[name="createResidentResidentName"]').value;
        let apartmentNameInput = document.querySelector('input[name="createResidentApartmentName"]').value;
        let apartmentId = listApartments.find(function (resident, index) {
            return resident.apartmentName === apartmentNameInput;
        }).id;
        let roleInput = document.querySelector('.resident-input-apartment-role-list-item').getAttribute('name');
        let phoneInput = document.querySelector('input[name="createResidentPhoneNumber"]').value;
        let birthdayInput = document.querySelector('input[name="createResidentBirthday"]').value;
        let permaAddressInput = document.querySelector('input[name="createResidentPermanentAddress"]').value;
        let temporaryAddressInput = document.querySelector('input[name="createResidentTemporaryAddress"]').value;
        // let input01 = document.querySelector('input[name="residentInput01"]').value;
        // let input02 = document.querySelector('input[name="residentInput02"]').value;
        // let input03 = document.querySelector('input[name="residentInput03"]').value;
        // let input04 = document.querySelector('input[name="residentInput04"]').value;
        // let input05 = document.querySelector('input[name="residentInput05"]').value;
        // let input06 = document.querySelector('input[name="residentInput06"]').value;
        // let input07 = document.querySelector('input[name="residentInput07"]').value;
        // let input08 = document.querySelector('input[name="residentInput08"]').value;
        // let input09 = document.querySelector('input[name="residentInput09"]').value;
        // let input10 = document.querySelector('input[name="residentInput10"]').value;
        // let input11 = document.querySelector('input[name="residentInput11"]').value;
        // let input12 = document.querySelector('input[name="residentInput12"]').value;
        // let input13 = document.querySelector('input[name="residentInput13"]').value;
        // let input14 = document.querySelector('input[name="residentInput14"]').value;

        var newResident = {
            residentName: nameInput,
            apartmentId: apartmentId,
            role: roleInput,
            phoneNumber: phoneInput,
            birthday: birthdayInput,
            permanentAddress: permaAddressInput,
            temporaryAddress: temporaryAddressInput
        }
        // var newResidentValue = {
        //     residentName: nameInput,
        //     apartmentId: apartmentId,
        //     role: roleInput,
        //     phoneNumber: phoneInput,
        //     birthday: birthdayInput,
        //     permanentAddress: permaAddressInput,
        //     temporaryAddress: temporaryAddressInput,
        //     input01: input01,
        //     input02: input02,
        //     input03: input03,
        //     input04: input04,
        //     input05: input05,
        //     input06: input06,
        //     input07: input07,
        //     input08: input08,
        //     input09: input09,
        //     input10: input10,
        //     input11: input11,
        //     input12: input12,
        //     input13: input13,
        //     input14: input14
        // }
        createNewResident(newResident, function (response) {
            if (response.code === 200) {
                listResidents.push(response.result);
                // listResidentsValue.push(newResidentValue);
                renderResidents([response.result]);
            } else {
                alert("Lỗi: Không thể thêm căn hộ. Vui lòng điền đầy đủ thông tin!");
            }
        });
        createContainer.querySelectorAll('input').forEach(function (ip) {
            if (ip.value) ip.value = "";
        });
        createContainer.querySelectorAll('.resident-input-sex-text').forEach(function (text) {
            text.textContent = "";
        });
        createContainer.querySelector('.resident-input-apartment-role-text').textContent = "";
    })
}

// Xóa nhân khẩu
function handleDeleteResident(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(residentApi + '/' + id, options)
        .then(function (response) {
            if (!response.ok) {
                console.error("Error fetching apartments:", response.status);
                throw new Error("Failed to fetch apartments: " + response.statusText);
            }
            return response.json();
        })
        .then(function () {
            let residentSelect = document.getElementById('resident-' + id);
            if (residentSelect) {
                residentSelect.remove();
            }
        });

}

// Cập nhật thông tin nhân khẩu
function updateResident(id, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(residentApi + '/' + id, options)
        .then(function (response) {
            console.log('phản hồi của update:', response);
            console.log(data);
            if (!response.ok) {
                throw new Error("Failed to update apartment: " + response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            if (data.code === 200) {
                callback(data);
            } else {
                alert("Cập nhật thất bại: " + data.message);
            }
        })
        .catch(function (error) {
            console.error("Fetch error:", error.message);
            alert("Lỗi: Không thể cập nhật căn hộ: " + error.message);
        });
}
const tableSelect = document.querySelector('.resident-table');
function handleUpdateResident(id) {
    editCresidentContainer.classList.add('edit-resident-modal-open');
    let editCresidentResidentSelect = document.getElementById(`resident-${id}`);
    let listAtrributes = listResidents.find(function (cur) {
        return cur.id === id;
    })
    editCresidentContainer.querySelector('input[name="createResidentResidentName"]').value = listAtrributes.residentName;
    editCresidentContainer.querySelector('.resident-input-apartment-role-text').textContent = residentRoles[listAtrributes.role];
    editCresidentContainer.querySelector('input[name="createResidentPhoneNumber"]').value = listAtrributes.phoneNumber;
    editCresidentContainer.querySelector('input[name="createResidentBirthday"]').value = listAtrributes.birthday;
    editCresidentContainer.querySelector('input[name="createResidentPermanentAddress"]').value = listAtrributes.permanentAddress;
    editCresidentContainer.querySelector('input[name="createResidentTemporaryAddress"]').value = listAtrributes.temporaryAddress;
    editCresidentContainer.querySelector('input[name="createResidentApartmentName"]').value = listAtrributes.apartmentName;
    let editSaveButton = document.querySelector('.edit-resident-modal-save-button');

    editSaveButton.addEventListener('click', function () {
        let roleInput = editCresidentContainer.querySelector('.resident-input-apartment-role-list-item').getAttribute('name');
        let phoneInput = editCresidentContainer.querySelector('input[name="createResidentPhoneNumber"]').value;
        let birthdayInput = editCresidentContainer.querySelector('input[name="createResidentBirthday"]').value;
        let permaAddressInput = editCresidentContainer.querySelector('input[name="createResidentPermanentAddress"]').value;
        let temporaryAddressInput = editCresidentContainer.querySelector('input[name="createResidentTemporaryAddress"]').value;
        let nameInput = editCresidentContainer.querySelector('input[name="createResidentResidentName"]').value;
        let apartmentNameInput = editCresidentContainer.querySelector('input[name="createResidentApartmentName"]').value;
        var editedResident = {
            residentName: nameInput,
            role: roleInput,
            phoneNumber: phoneInput,
            birthday: birthdayInput,
            permanentAddress: permaAddressInput,
            temporaryAddress: temporaryAddressInput
        }
        console.log('dữ liệu vào:', editedResident);
        updateResident(id, editedResident, function (response) {
            console.log('phản hồi:', response.code, response);
            if (response.code === 200) {
                listAtrributes.residentName = nameInput;
                listAtrributes.role = roleInput;
                listAtrributes.phoneNumber = phoneInput;
                listAtrributes.birthday = birthdayInput;
                listAtrributes.permanentAddress = permaAddressInput;
                listAtrributes.temporaryAddress = temporaryAddressInput;
                listAtrributes.apartmentName = apartmentNameInput;
            } else {
                alert("Lỗi: Không thể thêm căn hộ. Vui lòng điền đầy đủ thông tin!");
            }

        })
    })
}

// Xuất nhân khẩu
var residentRoles = {
    'OWNER': 'Chủ hộ',
    'NON_OWNER': 'Thành viên'
}
function renderResidents(residents) {
    if (!residents || !Array.isArray(residents)) {
        console.warn("Invalid apartment data:", residents);
        return;
    }
    var listResidents = document.querySelector('.resident-table');
    var htmls = residents.map(function (resident) {
        return `
            <tr class="table-row" id="resident-${resident.id}">
                <td class="resident-apartment-name"> ${resident.apartmentName}</td>
                <td class="resident-name"> ${resident.residentName}</td>
                <td class="resident-role"> ${residentRoles[resident.role]}</td>
                <td class="resident-phone-number"> ${resident.phoneNumber}</td>
                <td class="table-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                        width="24px" fill="#6c757d" class="table-icon" onclick="handleUpdateResident('${resident.id}')">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                        width="24px" fill="#6c757d" class="table-icon" onclick="handleDeleteResident('${resident.id}')">
                        <path
                            d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                </td>
            </tr>
            `;
    });
    listResidents.innerHTML += htmls.join('');
}