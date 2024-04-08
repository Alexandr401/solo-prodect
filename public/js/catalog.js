const buttonBas = document.querySelectorAll(".unBas-block, .Bas-block");

buttonBas.forEach((btn) => {
    btn.addEventListener("click", async (event) => {
        if (event.target.nodeName === "BUTTON") {
            const isBasket = btn.classList.contains("Bas-block");
            const catalogId = event.target.dataset.id;
            const method = isBasket ? "POST" : "DELETE";
            const body = isBasket ? JSON.stringify({ catalogId }) : undefined;
            try {
                const response = await fetch(`/api/catalog/${catalogId}`, { method: method, headers: { 'Content-Type': 'application/json' }, body: body });
            if (!response.ok) {
                throw new Error('Ответ сети был неудовлетворительным.');
            }
            const data = await response.json();
            if (data.text === "OK") {
                const button = btn.firstElementChild;
                if (isBasket) {
                button.classList.remove("basBtn");
                button.classList.add("unBasBtn");
                button.textContent = "Убрать из корзины";
                btn.classList.remove("Bas-block");
                btn.classList.add("unBas-block");
                location.href = `/catalog/${catalogId}`;
                } else {
                button.classList.remove("unBasBtn");
                button.classList.add("basBtn");
                button.textContent = "В корзину";
                btn.classList.remove("unBas-block");
                btn.classList.add("Bas-block");
                location.href = `/catalog/${catalogId}`;
                }
                const basketData = data.basket;
                updateBasketData(basketData);
            } else {
                console.error('Ответ сервера был неудовлетворительным: ', data);
            }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    });
});