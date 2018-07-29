// Не ждем пока загрузиться весь контент. Глобальный обработчи событий
window.addEventListener('DOMContentLoaded', function() {
	// Получаем информацию для работы
	let products = document.querySelectorAll(".product"),
		buttons = document.getElementsByTagName('button'),
		open = document.getElementsByClassName("open")[0];


	// Функция для создания корзины
	function createCart() {
		// Создаем элементы нашей корзины
		let cart = document.createElement("div"),
			field = document.createElement("div"),
			heading = document.createElement('h2'),
			close = document.createElement("button");
		
		// Стилизуем  созданные элементы. Добавим стили из css/style.css
		cart.classList.add("cart");
		field.classList.add("cart-field");
		close.classList.add("close");



		// Добавляем надписи
		close.textContent = "Закрыть";
		heading.textContent = "В нашей корзине";


	// Выводим на элементы  на страниц в тег body через добавление appendChild() в конец документа;
	document.body.appendChild(cart);
	cart.appendChild(heading);
	cart.appendChild(field);
	cart.appendChild(close)
	}

	createCart();


	let field = document.querySelector(".cart-field"),
		cart = document.querySelector(".cart"),
		close = document.querySelector(".close");

	// console.log(products[1]);
	// console.log(products[2]);
	// console.log(products[3]);
	// console.log(products[4]);
	// console.log(products[5]);
	// console.log(products[6]);
	// console.log(products[7]);

	for (let i = 0; i < buttons.length-1; i++) {
		// Вешаем обработчик событий на каждую из кнопок
		buttons[i].addEventListener('click', function() {
			// Создали копию карточки с товаром
			let item = products[i].cloneNode(true);
	 			btn = item.querySelector('button');

			btn.remove();
			field.appendChild(item);
			products[i].remove();		
	 		})
	}

	function openCart(){
		cart.style.display = 'block'
	};
	function closeCart() {
		cart.style.display = 'none'
	};

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

})