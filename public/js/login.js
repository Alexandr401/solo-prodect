const login = document.forms['log-form'];
const authError = document.querySelector('.error-auth');
login.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const body = Object.fromEntries(new FormData(login));
      const data = await fetch(
        '/api/auth/login',
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) },
      );
      const result = await data.json();
      if (result.text === 'OK') {
        location.href = '/';
      } else{
        authError.style.display = "block";
      }
    } catch (error) {
      console.error(error);
    }
});
