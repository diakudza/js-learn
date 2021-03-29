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
//var prod = [prod0,prod1,prod2,prod3];

var listItems = document.querySelector('.listItems');
var ul = document.createElement("ul");
var li = document.createElement("li");
var img = document.createElement("img");;
var span = document.createElement("span");;
var p = document.createElement("p");;
var btn = document.createElement("button");; 

function createProd (it,price,info){

	img.src = "img/it"+it+".webp";
	img.height = '100';
	li.classList.add("itemProd");
	listItems.append(li);
	li.append(img);
	span.innerText = price+'p.';
	li.append(span);
	p.innerText = info;
	li.append(p);
	btn.innerHTML="Добавить";
	li.append(btn);
}


createProd(0,100,"Кофе");
createProd(1,200,"Молоко");
//createProd(it2,300,"Rtabh");