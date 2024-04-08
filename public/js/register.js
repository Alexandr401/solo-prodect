const register = document.forms['reg-form'];
const regError = document.querySelector('.error-reg');
register.addEventListener('submit', async (event) => {
event.preventDefault();
    const password = register.elements['password'].value;
    const password2 = register.elements['password2'].value;

    if (password !== password2) {
        register.elements['password'].style.borderColor = 'red';
        register.elements['password'].value = '';
        register.elements['password'].placeholder = 'Пароли не совпадают';
        register.elements['password2'].style.borderColor = 'red';
        register.elements['password2'].value = '';
        register.elements['password2'].placeholder = 'Пароли не совпадают';
        regError.innerText = "*Пароли не совпадают!";
        regError.style.display = "block";
        return;
    }
    try {
        const body = Object.fromEntries(new FormData(register));
        const data = await fetch(
        '/api/auth/register',
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) },
        );
        const result = await data.json();
        if (result.text === 'OK') {
            location.href = '/';
        } else{
            register.elements['email'].style.borderColor = 'red';
            regError.innerText = "*Данный пользователь уже существует!";
            regError.style.display = "block";
        }
    } catch (error) {
        console.error(error);
    }
});