function Prod(title,info,price,img){
        this.title = title;
        this.info = info;
        this.price = price;
		this.img = img;
}

var prod0 = new Prod("Кофе","Кофе растворимый Nescafe Classic гранулированный, пакет, 150 г",200,"it0.webp");
var prod1 = new Prod("Кофе","Кофе в капсулах Nescafe Dolce Gusto Americano, 48 капс.",900,"it1.webp");
var prod2 = new Prod("Конфеты","Набор конфет Raffaello Весенняя серия, 150 г белый",200,"it2.webp");
var prod3 = new Prod("Приправа","Knorr Приправа универсальная Деликат, 200 г",45,"it3.webp");
var prod4 = new Prod("Конфитюр","Конфитюр Zuegg экстра Ежевика, банка 320 г",145,"it4.webp");
var prod5 = new Prod("Масло","Filippo Berio масло оливковое Extra Virgin, стеклянная бутылка 1 л.",569,"it5.webp");
var prod6 = new Prod("Кетчуп","Кетчуп Heinz BBQ для курицы с карри 350 г",60,"it6.webp");

var prod = [prod0,prod1,prod2,prod3,prod4,prod5,prod6];
var listItems = document.querySelector('.listItems');
var ul = document.createElement("ul");


function createProd (it,price,info,id){ //функция формирования карточки товара
	let fragment = new DocumentFragment(),
	li = document.createElement("li"),
	img = document.createElement("img"),
	span = document.createElement("span"),
	p = document.createElement("p"),
	btn = document.createElement("button");
	img.src = "img/"+it;
	img.height = '100';
	li.classList.add("itemProd");
	span.innerText = price+'p.';
	p.innerText = info;
	btn.id="btn"+id;
	btn.onclick=f;
	li.id="li"+id;
	btn.innerHTML="Добавить";
	li.append(img);
	li.append(span);
	li.append(p);
	li.append(btn);
	fragment.append(li);
	return fragment;
}

for (it in prod) { //выводим список товаров
	listItems.append(createProd(prod[it].img,prod[it].price,prod[it].info,prod[it].id=it));
}
var btn = document.querySelectorAll('button');

function f(e){
  var div = document.getElementById('listAdd'),
  ul = document.createElement("ul"),
  cardItem = e.target.parentNode.querySelector('li').cloneNode(true);
  cardItem.append(ul);
  div.innerHTML += cardItem.innerHTML;
  console.log(12);
}

