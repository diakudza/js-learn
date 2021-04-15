function openImage(event) {
	const target = event.target;
	const id = target.id.slice(-1); //отсекаем лишнее из id, отсавим только цифру
	newPic(id);

}

function newPic(id) { //функция рисования большой картинки
	const gallery = document.getElementsByClassName("gallery")[0];
	gallery.innerHTML = "";
	const image = document.createElement("img");
	image.id = `image-thumbnail-${id}`;
	image.src = `img/img${id}-800.jpg`;
	image.alt = `Изображение ${id}`
	image.setAttribute("onerror", "errorAlert();")
	gallery.appendChild(image);
	let img = document.querySelectorAll('.gallery > img')[0];

	img.addEventListener("error", function () {
		img.alt = 'ЗАГЛУШКА';//если в теге img появлется ошибка, то ставим текстовую заглушку

	});
};

function init() {
	const images = document.querySelectorAll(".thumbnails > img");
	const gallery = document.getElementsByClassName("gallery")[0];

	const image = document.createElement("img");
	for (let image of images) {
		image.addEventListener('click', openImage);
	}

	function next(e) { //листалка влево и вправо
		let direction = e.target;
		let img = document.querySelector('.gallery img');
		let thumbnails = document.querySelectorAll('.thumbnails > img');
		let id = img.id.slice(-1);
		if (direction.id == 'right') {
			id++;
		} else { id--; }
		if (id >= thumbnails.length + 1) { id = 1; } //если перебег по колву превьющек, то идем на первую
		if (id < 1) { id = 4; } // аналогично , только на последнюю
		newPic(id);
	}




	let btnRight = document.getElementById('right');
	let btnLeft = document.getElementById('left');
	btnLeft.addEventListener('click', next);
	btnRight.addEventListener('click', next);
};


window.addEventListener('load', init);