/**
 * @author chico
 */
let input = document.getElementById("text");
let inputDate = document.getElementById("textDate");
let ul = document.querySelector(".todos");
let container = document.querySelector("div");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByClassName("span");
let clearBtn = document.querySelector(".delete");
let saveBtn = document.querySelector(".save");


//Удаление задачи из списка
function deleteTodo(){
	for(let span of spans){
		span.addEventListener ("click",function (){
			span.parentElement.remove();
			event.stopPropagation();
		});
	}
}

//Создание листа To-do
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}
input.addEventListener("keypress",function(keyPressed){
	if(keyPressed.which == 13){
	    //Создание нового задания при нажатии на enter 
	    let now = new Date;
	    let startDate = new Date(inputDate.value);
	    if(this.value != " " && startDate > now){
		    //let li = document.createElement("li");
		    //let spanElement = document.createElement("span");
		    //let icon = document.createElement("i");  
		        
		    let newTodo = this.value;
		    
		    ul.innerHTML += '<li id="'+ "idTag" + now +'">'+'<span class="span"><i class="fas fa-trash-alt"></i></span>'+'<span>'+newTodo+
		    +'</span>'+"  "+'<span>'+timeToEnd(now, startDate)+'</span></li>';
		    
		    printDate(now, startDate, this.value);
		    deleteTodo();
		    this.value = " " ;
	    }else {
		   	if(startDate <now){
		   		alert("Дата не может быть меньше текущей");
		   	};
		   	if(input.value == false){
		   		alert("Введите задачу")
		   	}
	   } 
   };
    
});


function timeToEnd(now, startDate){
	let day = Math.floor((startDate - now)/1000);
	let sec = day%60; day = Math.floor(day/60); if (sec<10)sec='0'+sec;
	let min = day%60; day = Math.floor(day/60); if (min<10)min='0'+min;
	let hour = day%24; day = Math.floor(hour/24);
	let stime = day+" :дней "+hour+" :часов "+min+" :минут "+sec+" :секунд";
	return stime;
}

function printDate(now, startDate, task){
	let day = new Date();
	day = Math.floor((startDate-day)/1000);
	let sec=day%60; day=Math.floor(day/60); if(sec<10)sec='0'+sec;
	let min=day%60; day=Math.floor(day/60); if(min<10)min='0'+min;
	let hour=day%24; day=Math.floor(day/24);
	let stime = day+" :дней "+hour+" :часов "+min+" :минут "+sec+" :секунд";
	let idTag = "idTag" + now;
	document.getElementById(idTag).innerHTML='<span class="span"><i class="fas fa-trash-alt"></i></span>'+'<span>'+task+'</span>'+'<span>'+" --> "+" Осталось: "+stime+'</span>';
	
	deleteTodo();
	window.setTimeout(printDate, 1000, now, startDate, task);
}



saveBtn.addEventListener('click',function(){
	localStorage.setItem('todoList',ul.innerHTML );
	
});


clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

deleteTodo();
loadTodo();
window.onload = printDate();
window.onload = timeToEnd();
