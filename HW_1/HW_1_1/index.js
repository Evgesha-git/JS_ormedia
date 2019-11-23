/**
 * @author chico
 */

var redir = document.getElementById('redirect');

var style_button = document.getElementById("style_btn");
style_button.addEventListener("click", styleCng);

var destr_button = document.getElementById('destroy');
destr_button.addEventListener("click", pageDestroy);

//1

redir.onclick = function (){
	location.href = "https://www.google.com/";
}

//2

function styleCng() {
	var bl = document.getElementById("s_style");
	//var dv = document.getElementByClassName("button");
	bl.style.flexDirection = "column";
	//dv.style.width = "50px";
}

//3

function pageDestroy(){
	var body = document.getElementById("b_style");
	document.getElementById("b_style").style.background = "white";
	body.innerHTML = "";
	
	body.innerHTML += "<header><span>Header</span></header>";
	body.innerHTML += "<main></main>";
		var main = document.querySelector("main");
		main.innerHTML = "<article></article>";
			var article = document.querySelector("article");
			article.innerHTML = "<h1>Управление встроенными стилями</h1>";
				var tag_span = document.createElement("span");
				tag_span.textContent = "Самый простой способ управления стилями CSS - это манипулирование атрибутом style отдельных элементов документа.";
               			tag_span.textContent += "Как и для большинства HTML-атрибутов, атрибуту style соответствует одноименное свойство объекта Element, и им можно манипулировать в сценариях на языке JavaScript.";
               			tag_span.textContent += "Однако свойство style имеет одну отличительную особенность: его значением является не строка, а объект CSSStyleDeclaration. Свойства этого объекта представляют CSS-свойства, определенные в HTML-атрибуте style.";
           		article.appendChild(tag_span);
        	main.innerHTML += "<nav><span>Navigation</span></nav><aside><span>Sidebar</span></aside>";
	body.innerHTML += "<footer><span>Footer</span></footer>";
}

