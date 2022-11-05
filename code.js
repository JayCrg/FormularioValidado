window.onload = () => {
    password = document.getElementById("password");
    confirmacion = document.getElementById("confirmation");
    telfono = document.getElementById("telefono");

    enviar = document.getElementById('enviar');

    spans = document.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        spans[i].setAttribute('hidden', '');
    }

    password.addEventListener('input', (e) => {
        if (RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/).test(e.target.value)) {
            pass = true;
            spans[1].setAttribute('hidden', '');
            e.target.style.border = '2px solid green';
            if (spans[1].hasAttribute('visible'))
                spans[1].removeAttribute('visible');
        }
        else {
            if (spans[1].hasAttribute('hidden'))
                spans[1].removeAttribute('hidden');
            spans[1].setAttribute('visible', '')
            e.target.style.border = '2px solid red';
            pass = false;
        }
        if (pass) {
            enviar.removeAttribute('disabled');
            enviar.style.backgroundColor = "#099ce7";
        }
        else {
            enviar.style.backgroundColor = "#620f34";
            enviar.setAttribute('disabled', '');
        }
    });
    confirmacion.addEventListener('input', (e) => {
        if (password.value != e.target.value) {
            if (spans[1].hasAttribute('hidden'))
                spans[2].removeAttribute('hidden');
            spans[2].setAttribute('visible', '')
            e.target.style.border = '2px solid red';
            conf = false;
        }
        else {
            conf = true;
            spans[2].setAttribute('hidden', '');
            e.target.style.border = '2px solid green';
            if (spans[2].hasAttribute('visible'))
                spans[2].removeAttribute('visible');
        }
        if (conf) {
            enviar.removeAttribute('disabled');
            enviar.style.backgroundColor = "#099ce7";
        }
        else {
            enviar.style.backgroundColor = "#620f34";
            enviar.setAttribute('disabled', '');
        }
    });

    telfono.addEventListener('input', (e) => {
        if (RegExp(/^[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/).test(e.target.value)) {
            tel = true;
            spans[0].setAttribute('hidden', '');
            e.target.style.border = '2px solid green';
            if (spans[0].hasAttribute('visible'))
                spans[0].removeAttribute('visible');
        }
        else {
            if (spans[0].hasAttribute('hidden'))
                spans[0].removeAttribute('hidden');
            spans[0].setAttribute('visible', '')
            e.target.style.border = '2px solid red';
            tel = false;
        }
        if (tel) {
            enviar.removeAttribute('disabled');
            enviar.style.backgroundColor = "#099ce7";
        }
        else {
            enviar.style.backgroundColor = "#620f34";
            enviar.setAttribute('disabled', '');
        }
    });
}