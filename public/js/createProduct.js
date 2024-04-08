const createProduct = document.forms['createProduct-form'];

createProduct.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const body = Object.fromEntries(new FormData(createProduct));
        const data = await fetch(
            '/api/create-roduct',
            { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
        );
        const result = await data.json();
        if (result.text === 'OK') {
            location.href = '/edit-product';
        }
    } catch (error) {
        console.error(error);
    }
});