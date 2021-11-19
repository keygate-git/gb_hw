let filter = (e) => {
    e.preventDefault();
    let text = document.getElementById('text').value;
    regExp = /'(.*?[^int])'/ig;
    text = text.replace(regExp, "\"$1\"");
    let showResult = document.getElementById('resulttext');
    showResult.innerText = text;
}

let checkFields = (e) => {
    e.preventDefault();

    let name = document.getElementById('name');
    let regExpName = /^[a-z]+$/i;
    if (!regExpName.test(name.value)) {
        name.classList.add('wrong');
    } else {
        name.classList.remove('wrong');
    }

    let phone = document.getElementById('phone');
    let regExpPhone = /^\+7\(([0-9]{3})\)([0-9]{3})\-([0-9]{4})$/i;
    if (!regExpPhone.test(phone.value)) {
        phone.classList.add('wrong');
    } else {
        phone.classList.remove('wrong');
    }

    let email = document.getElementById('email');
    let regExpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/i;
    if (!regExpEmail.test(email.value)) {
        email.classList.add('wrong');
    } else {
        email.classList.remove('wrong');
    }
}

let button = document.getElementById('filter');
button.addEventListener('click', filter);

let sendButton = document.getElementById('submit');
sendButton.addEventListener('submit', checkFields);
