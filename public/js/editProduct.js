const editProduct = document.forms['editProduct-form'];
const catalogId = editProduct.getAttribute('data-id');

editProduct.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const body = Object.fromEntries(new FormData(editProduct));
        const data = await fetch(
            `/api/edit-product/${catalogId}`,
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