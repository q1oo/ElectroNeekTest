document.querySelector('.add-field').addEventListener('click', addField);
document.querySelector('.remove-field').addEventListener('click', removeField);
document.querySelector('.submit-button').addEventListener('click', send);
document.querySelector('.reset-button').addEventListener('click', resetForm);

class Person {
    constructor() {
        this.fullName = 'Азамат Исмагилов';
        this.phone = '+7(987)045-78-18';
        this.comment = 'Благодарю за уделенное время на проверку моих решений!';
    }
}

let person = new Person();

function send() {
    document.querySelector('.full-name').setAttribute('value', person.fullName);
    document.querySelector('.phone').setAttribute('value', person.phone);
    document.querySelector('.comment').innerText = person.comment;
}

function resetForm() {
    document.querySelector('.full-name').setAttribute('value', '');
    document.querySelector('.phone').setAttribute('value', '');
    document.querySelector('.comment').innerText = '';
    
    const fields = document.querySelectorAll('.extra-phone-list li');
    if (fields) {
        for (let i = 0; i < fields.length; i++) {
            fields[i].remove();
        }
        height = 0;
        document.querySelector('.extra-phone').style.height = height + 'px';
    }    
}

let height = 0;
function addField() {
    const field = document.createElement('li');
    field.innerHTML = '<input type="text" placeholder="Дополнительный телефон">';
    document.querySelector('.extra-phone-list').append(field); 
    height += 29;
    document.querySelector('.extra-phone').style.height = height + 'px';
}

function removeField() {
    const field = document.querySelector('.extra-phone-list li:last-child');
    if (field) {
        field.remove();
        height -= 29;
        document.querySelector('.extra-phone').style.height = height + 'px';
    }
}
