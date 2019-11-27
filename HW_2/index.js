/**
 * @author chico
 */
var input = document.getElementById("text");
var inputDate = document.getElementById("textDate");
var ul = document.querySelector(".todos");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var clearBtn = document.querySelector(".delete");
var saveBtn = document.querySelector(".save");


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
    let li = document.createElement("li");
    let spanElement = document.createElement("span");
    let icon = document.createElement("i");  
        
    let newTodo = this.value;
    
    ul.innerHTML += '<li id="'+now+'">'+'<span><i class="fas fa-trash-alt"></i></span>'+newTodo+"  "+timeToEnd(now, startDate)+'</li>';
    
    printDate(now, startDate, this.value);
    deleteTodo();
    this.value = " " ;
    
    }
    
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
	document.getElementById(now).innerHTML='<span><i class="fas fa-trash-alt"></i></span>'+''+task+" --> "+" Осталось: "+stime;
	
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
