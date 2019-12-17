/**
 * @author chico
 */

function editPC(i){
	display(createNew);
	document.getElementById("mfName").value =  arrPc[i].mfName;
	document.getElementById("model").value = arrPc[i].pcModName;
	document.getElementById("cpu").value = arrPc[i].cpu;
	document.getElementById("cores").value = arrPc[i].cores;
	document.getElementById("ram").value = arrPc[i].ram;
	document.getElementById("driveValue").value = arrPc[i].driveValue;
	document.getElementById("driveType").value = arrPc[i].driveType;
	document.getElementById("gpuType").value = arrPc[i].gpuType;
	document.getElementById("gpuName").value = arrPc[i].gpuName;
	document.getElementById("price").value = arrPc[i].price;
	deletePc(i, arrPc);
	document.getElementById(mainMenu).style.display = "none"
};

function deletePc(i, arrPc){
	arrPc.splice(i, 1);
	printInfo(arrPc);
};

function printDetailsInfo(i){
	let form = document.getElementById("detailInfo").getElementsByTagName("form");
	form[0].innerHTML = '<bt/ >';
	form[0].innerHTML += '<div class="details">'+
    				'<div class="elem">Производитель</div>'+
    				'<div class="elem">Название модели</div>'+
    				'<div class="elem">Процессор</div>'+
    				'<div class="elem">Количество ядер</div>'+
    				'<div class="elem">Объем ОЗУ</div>'+
    				'<div class="elem">Объем хранилища</div>'+
    				'<div class="elem">Тип хранилища</div>'+
    				'<div class="elem">Тип видеокарты</div>'+
    				'<div class="elem">Модель видеокарты</div>'+
    				'<div class="elem">Тип устройства</div>'+
    				'<div class="elem">Цена</div>'+
    			'</div>'+
    			'<div class="details">'+
    				'<div class="elem">'+arrPc[i].mfName+'</div>'+
    				'<div class="elem">'+arrPc[i].pcModName+'</div>'+
    				'<div class="elem">'+arrPc[i].cpu+'</div>'+
    				'<div class="elem">'+arrPc[i].cores+'</div>'+
    				'<div class="elem">'+arrPc[i].ram+'</div>'+
    				'<div class="elem">'+arrPc[i].driveValue+'</div>'+
    				'<div class="elem">'+arrPc[i].driveType+'</div>'+
    				'<div class="elem">'+arrPc[i].gpuType+'</div>'+
    				'<div class="elem">'+arrPc[i].gpuName+'</div>'+
    				'<div class="elem">'+arrPc[i].type+'</div>'+
    				'<div class="elem">'+arrPc[i].price+'</div>'+
    			'</div>'+
    			'</div>'+
    			'<input type="button" class="buttons" id="mainMenu2" value="Гланое меню" />';
    			
    			document.getElementById("mainMenu2").addEventListener("click", function(){
    				display("info");
    			});
};

function printInfo(arrPc){
	let form = document.getElementById("info").getElementsByTagName("form");
	form[0].innerHTML='<br>';
	form[0].innerHTML +='<div class="infoGorizontal">'+
    			'<div class="infoGorizontalEl strong">Производитель</div>'+
    			'<div class="infoGorizontalEl strong">Модель</div>'+
    			'<div class="infoGorizontalEl strong">Тип процессора</div>'+
    			'<div class="infoGorizontalEl strong">Тип видеокарты</div>'+
    			'<div class="infoGorizontalEl strong">Объем ОЗУ</div>'+
    			'<div class="infoGorizontalEl strong">Объем хранилища</div>'+
    			'<div class="infoGorizontalEl strong">Стоимость</div>'+
    		'</div>'+
    		'<input type="button" id="createPC2" value="Добавть новое устройство">';
	
	for(let i=0; i<arrPc.lenght; i++){
		form[0].innerHTML +='<div class="infoGorizontal">'+
    			'<div class="infoGorizontalEl strong">'+arrPc[i].mfName+'</div>'+
    			'<div class="infoGorizontalEl strong">'+arrPc[i].pcModName+'</div>'+
    			'<div class="infoGorizontalEl strong">'+arrPc[i].cpu+'</div>'+
    			'<div class="infoGorizontalEl strong">'+arrPc[i].gpuType+'</div>'+
    			'<div class="infoGorizontalEl strong">'+arrPc[i].ram+'</div>'+
    			'<div class="infoGorizontalEl strong">'+arrPc[i].driveValue+'</div>'+
    			'<div class="infoGorizontalEl strong">'+arrPc[i].price+'</div>'+
    			'<div class="infoGorizontalEl strong" id="edit'+i+'">Редактировать</div>'+
    			'<div class="infoGorizontalEl strong" id="remove'+i+'">Удалить</div>'+
    		'</div>'
	}
	form[0].innerHTML+='<br>'+
  '<input type="button" id="newPcButton" class="buttons" value="Добавить новую запись">';
  
  for(let i=0; i<arrPc.lenght; i++){
  	let edit = 'edit'+i;
  	let remove = 'remove'+i;
  	let details = 'details'+i;
  	document.getElementById(edit).style.color="blue";
    document.getElementById(remove).style.color="red";
    document.getElementById(details).style.color="green";
    
    document.getElementById(details).addEventListener("click",function(){
      printDetailedInfo(i,arrPc);
      display("detailedInfo");
    });
    
    document.getElementById(edit).addEventListener("click",function(){
      editPc(i);
    });
    
    document.getElementById(remove).addEventListener("click", function () {
      if(confirm("Вы уверены что ходите удалить запись по "+arrPc[i].pcModName+"?")){
      	deletePc(i, arrPc);
      } else {
      	
      };
    });
  };
  document.getElementById("newPcButton").addEventListener("click", function(){
  	display("createNew");
  	document.getElementById("createPC").style.display="";
  });
};

function display(visibleId){
	switch(visibleId){
		case "createNew":
		document.getElementById("info").style.display="none";
		document.getElementById("detailInfo").style.display="none";
		document.getElementById("createNew").style.display="flex";
		break;
		case "detailInfo":
		document.getElementById("info").style.display="none";
		document.getElementById("detailInfo").style.display="flex";
		document.getElementById("createNew").style.display="none";
		break;
		case "info":
		document.getElementById("info").style.display="flex";
		document.getElementById("detailInfo").style.display="none";
		document.getElementById("createNew").style.display="none";
		break;
	};
};

class BaseClassPC{
	constructor(mfName, pcModName, cpu, cores, ram, driveValue, price){
		this.mfName = mfName;
		this.pcModName = pcModName;
		this.cpu = cpu;
		this.cores = cores;
		this.ram = ram;
		this.driveValue = driveValue;
	};
	
	get mfName(){
		return this._mfName;
	};
	set mfName(value){
		if(value.lenght == 0){
			alert("Заполните поле производителя");
		} else {
			this._mfName = value;
		};
	};
	
	get pcModName(){
		return this._pcModName;
	};
	set pcModName(value){
		if(value.lenght == 0){
			alert("Заполните поле модели");
		} else {
			this._pcModName = value;
		};
	};
	
	get cpu(){
		return this._cpu;
	};
	set cpu(value){
		if(value.lenght == 0){
			alert("Заполните поле процессор");
		} else {
			this._cpu = value;
		};
	};
	
	get cores(){
		return this._cores;
	};
	set cores(value){
		if(value.lenght == 0){
			alert("Укажите число ядер");
		} else {
			this._cores = value;
		};
	};
	
	get ram(){
		return this._ram;
	};
	set ram(value){
		if(value.lenght == 0){
			alert("Укажите объем оперативной памяти");
		} else {
			this._ram = value;
		};
	};
	
	get driveValue(){
		return this._driveValue;
	};
	set driveValue(value){
		if(value.lenght == 0){
			alert("Укажите объем накопителя");
		} else {
			this._driveValue = value;
		};
	};
	
};

class ProtoClassPC extends BaseClassPC{
	constructor(mfName, pcModName, cpu, cores, ram, driveValue, driveType, gpuType, gpuName, price){
		super(mfName, pcModName, cpu, cores, ram, driveValue, price);
		this.type="PC";
		this.driveType = driveType;
		this.gpuType = gpuType;
		this.gpuName = gpuName;
	}
	
	get driveType(){
		return this._driveType;
	};
	set driveType(value){
		if(value.lenght == 0){
			alert("Заполните поле типа никопителя");
		} else {
			this._driveType = value;
		};
	};
	
	get gpuType(){
		return this._gpuType;
	};
	set gpuType(value){
		if(value.lenght == 0){
			alert("Заполните поле типа графического процессора");
		} else {
			this._gpuType = value;
		};
	};
	
	get gpuName(){
		return this._gpuName;
	};
	set gpuName(value){
		if(value.lenght == 0){
			alert("Заполните поле названия графического процессора");
		} else {
			this._gpuName = value;
		};
	};
}

class ProtoClassLT extends BaseClassPC{
	constructor(mfName, pcModName, cpu, cores, ram, driveValue, driveType, gpuType, gpuName, price){
		super(mfName, pcModName, cpu, cores, ram, driveValue, price);
		this.type="LT";
		this.driveType = driveType;
		this.gpuType = gpuType;
		this.gpuName = gpuName;
	}
	
	get driveType(){
		return this._driveType;
	};
	set driveType(value){
		if(value.lenght == 0){
			alert("Заполните поле типа никопителя");
		} else {
			this._driveType = value;
		};
	};
	
	get gpuType(){
		return this._gpuType;
	};
	set gpuType(value){
		if(value.lenght == 0){
			alert("Заполните поле типа графического процессора");
		} else {
			this._gpuType = value;
		};
	};
	
	get gpuName(){
		return this._gpuName;
	};
	set gpuName(value){
		if(value.lenght == 0){
			alert("Заполните поле названия графического процессора");
		} else {
			this._gpuName = value;
		};
	};
}

function checkRadio(){
	let radio = document.getElementsByName('pcTypeRadio');
	for(let i=0; i<radio.lenght; i++){
		if(radio[i].checked){
			return(radio[i].value);
		};
	};
};

let arrPc = [];


document.getElementById("createPC").addEventListener("click", function(){
	document.getElementById("mainMenu").style.display = "";
	
	let mfName = document.getElementById("mfName").value;
	let model = document.getElementById("model").value;
	let cpu = document.getElementById("cpu").value;
	let cores = document.getElementById("cores").value;
	let ram = document.getElementById("ram").value;
	let driveValue = document.getElementById("driveValue").value;
	let driveType = document.getElementById("driveType").value;
	let gpuType = document.getElementById("gpuType").value;
	let gpuName = document.getElementById("gpuName").value;
	let price = document.getElementById("price").value;
	let type = checkRadio();
	
	switch(type){
		case "PC":
		arrPc[arrPc.length] = new ProtoClassPC(mfName, model, cpu, cores, ram, driveValue, driveType, gpuType, gpuName, price);
		printInfo(arrPc);
		display("info");
		alert("Данные записаны");
		break;
		case "LT":
		arrPc[arrPc.length] = new ProtoClassLT(mfName, model, cpu, cores, ram, driveValue, driveType, gpuType, gpuName, price);
		printInfo(arrPc);
		display("info");
		alert("Данные записаны");
		break;
		default:
		arrPc[arrPc.length] = new ProtoClassPC(mfName, model, cpu, cores, ram, driveValue, driveType, gpuType, gpuName, price);
		printInfo(arrPc);
		display("info");
		alert("Данные записаны");
	};
});

document.getElementById("mainMenu").addEventListener("click", function(){
	display("info");
})
