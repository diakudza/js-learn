function Prod(title,info,price,img){
        this.title = title;
        this.info = info;
        this.price = price;
		this.img = img;
}

var prod0 = new Prod("Кофе","Кофе растворимый Nescafe Classic гранулированный, пакет, 150 г",200,"it0.webp"),
	prod1 = new Prod("Кофе","Кофе в капсулах Nescafe Dolce Gusto Americano, 48 капс.",900,"it1.webp"),
	prod2 = new Prod("Конфеты","Набор конфет Raffaello Весенняя серия, 150 г белый",200,"it2.webp"),
	prod3 = new Prod("Приправа","Knorr Приправа универсальная Деликат, 200 г",45,"it3.webp"),
	prod4 = new Prod("Конфитюр","Конфитюр Zuegg экстра Ежевика, банка 320 г",145,"it4.webp"),
	prod5 = new Prod("Масло","Filippo Berio масло оливковое Extra Virgin, стеклянная бутылка 1 л.",569,"it5.webp"),
	prod6 = new Prod("Кетчуп","Кетчуп Heinz BBQ для курицы с карри 350 г",60,"it6.webp"),

	prod = [prod0,prod1,prod2,prod3,prod4,prod5,prod6],
	listItems = document.querySelector('.listItems'),
	ul = document.createElement('ul'),
	p = document.createElement('p'),
	div = document.getElementById('listAdd');
	document.querySelector('#listAdd').append(p);

function createProd (it,price,info,id){ //функция формирования карточки товара, выводил тег <li>..</li>
	let fragment = new DocumentFragment(),
	li = document.createElement("li"),
	img = document.createElement("img"),
	span = document.createElement("span"),
	p = document.createElement("p"),
	btn = document.createElement("button");
	img.src = "img/"+it;
	img.height = '100';
	li.classList.add("itemProd");
	span.innerText = price;
	p.innerText = info;
	btn.id="btn"+id;
	btn.onclick=f;
	li.id="li"+id;
	btn.innerHTML="Добавить";
	li.append(img,span,p,btn);
	fragment.append(li);
	return fragment;
}

for (it in prod) { //выводим список товаров
	listItems.append(createProd(prod[it].img,prod[it].price,prod[it].info,prod[it].id=it));
}

function f(e){ //определяем какая кнопка вызвала событие и клонируем картинку и цену.
  var div = document.getElementById('listAdd').querySelector('ul'),
  li = document.createElement("li"),
  img = e.target.parentNode.querySelector('img').cloneNode(true);
  span = e.target.parentNode.querySelector('span').cloneNode(true);
  li.classList.add("cart_li");
  li.innerHTML += img.outerHTML+span.outerHTML;
  div.append(li);

  li.onclick = function () { li.remove(); sum()};// клик по карточке товара в корзине удаляет товар 
  sum();
}

function sum(){//суммируем все найденные цены в корзине
	var allSpan = document.querySelectorAll('#listAdd span'), allSum = 0;
	for (i in allSpan){
		//console.log(allSpan[i].innerText);
		allSum = allSum + allSpan[i].innerText;
		console.log(allSum);
	}
	document.querySelector("#listAdd p").innerHTML = 'Сумма вашей покупки:' + parseInt(allSum);
	
	
}


