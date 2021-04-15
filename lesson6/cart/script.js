function Prod(title, info, price, img) {
	this.title = title;
	this.info = info;
	this.price = price;
	this.img = img;
}

let
	prod0 = new Prod("Кофе", "Кофе растворимый Nescafe Classic гранулированный, пакет, 150г", 200, "it0.webp"),
	prod1 = new Prod("Кофе", "Кофе в капсулах Nescafe Dolce Gusto Americano, 48 капс.", 900, "it1.webp"),
	prod2 = new Prod("Конфеты", "Набор конфет Raffaello Весенняя серия, 150г белый", 200, "it2.webp"),
	prod3 = new Prod("Приправа", "Knorr Приправа универсальная Деликат, 200г", 45, "it3.webp"),
	prod4 = new Prod("Конфитюр", "Конфитюр Zuegg экстра Ежевика, банка 320г", 145, "it4.webp"),
	prod5 = new Prod("Масло", "Filippo Berio масло оливковое Extra Virgin, стеклянная бутылка 1 л.", 569, "it5.webp"),
	prod6 = new Prod("Кетчуп", "Кетчуп Heinz BBQ для курицы с карри 350г", 60, "it6.webp"),
	prod7 = new Prod("Чипсы", "Чипсы Dr. Korner кукурузно-рисовые С оливковым маслом и розмарином 50г", 28, "dr-corner.jpg"),
	prod8 = new Prod("Чипсы", "Чипсы Lays Из печи, лисички в сметане, 85 г.", 55, "lays.jpg"),
	prod = [prod0, prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8],
	listItems = document.querySelector('.listItems'),
	ul = document.createElement('ul'),
	p = document.createElement('p'),
	div = document.getElementById('listAdd');
document.querySelector('#listAdd').append(p);

function createProd(it, price, info, id) { //функция формирования карточки товара, выводил тег <li>..</li>
	let fragment = new DocumentFragment(),
		li = document.createElement("li"),
		img = document.createElement("img"),
		span = document.createElement("span"),
		p = document.createElement("p"),
		btn = document.createElement("button");
	img.src = "img/" + it;
	img.height = '100';
	li.classList.add("itemProd");
	span.innerText = price;
	span.classList.add('span_price');
	p.innerText = info;
	btn.id = "btn" + id;
	btn.onclick = f;
	li.id = "li" + id;
	btn.innerHTML = "Добавить";
	li.append(img, span, p, btn);
	fragment.append(li);
	return fragment;
}

for (it in prod) { //выводим список товаров
	listItems.append(createProd(prod[it].img, prod[it].price, prod[it].info, prod[it].id = it));
}

function f(e) { //определяем какая кнопка вызвала событие и клонируем картинку и цену.
	let
		div = document.getElementById('listAdd').querySelector('ul'),
		li = document.createElement("li"),
		img = e.target.parentNode.querySelector('img').cloneNode(true),
		span = e.target.parentNode.querySelector('span').cloneNode(true),
		addedItem = document.querySelectorAll('.cart_li img');

	if (addedItem.length !== 0) { //Добавил ярлыки с колличеством.
		for (let i = 0; i <= addedItem.length - 1; i++) {
			if (img.outerHTML == addedItem[i].outerHTML) {
				let liParent = addedItem[i].parentNode,
					label = liParent.querySelectorAll('.label');
				if (label[0] != undefined) {
					label[0].innerHTML = Number(label[0].innerHTML) + 1;
					liParent.append(label[0]);
				} else {
					label = document.createElement("span");
					label.classList.add('label');
					label.innerHTML = "2";
					liParent.append(label);
				}
				liParent.onclick = function () { liParent.remove(); sum(); };
				//liParent.onclick = remItem();
				sum();
				return
			}
		}
	}
	li.classList.add("cart_li");
	li.innerHTML += img.outerHTML + span.outerHTML;
	div.append(li);
	li.onclick = function () { li.remove(); sum() };// клик по карточке товара в корзине удаляет товар 
	//li.onclick = remItem();
	sum();
}
//---
function remItem(e) {// клик по карточке товара в корзине удаляет товар
	//надо переделать с учетом колличеста 
	let label = e.target.parentNode.querySelector('.label');
	if (label != undefined) {
		label.innerHTML = Number(label.innerHTML) - 1;
	}
	sum()
};
function sum() {//суммируем все найденные цены в корзине
	let allSpan = document.querySelectorAll('#listAdd .span_price'), allSum = 0;
	for (var i = 0; i <= allSpan.length - 1; i++) {
		let liParent = allSpan[i].parentNode;
		let count = liParent.querySelector('.label');
		if (count != undefined) {
			allSum += +allSpan[i].innerHTML * count.innerHTML;
		} else {
			allSum += +allSpan[i].innerHTML;
		}
	}

	document.querySelector("#listAdd p").innerHTML = `Сумма вашей покупки ${allSum} рублей`;
}


