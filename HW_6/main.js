/**
 * @author chico
 */

let tablo = {
    'creatorView':`
    <select name="typeTrans" id="typeTrans">
            <option value="train">Поезд</option>
            <option value="bus">Автобус</option>
            <option value="taxi">Такси</option>
            <option value="pashiy">Пеший поход</option>
            <option value="horse">Лошадь</option>
        </select>
        <input type="date" id="date" />
        <select name="routes" id="routes">
            <option value="Brest">Брест</option>
            <option value="Mohilev">Могилев</option>
            <option value="Vitebsk">Витебск</option>
            <option value="Borisov">Борисов</option>
            <option value="Moskva">Москва</option>
            <option value="Piter">Санкт-Питербург</option>
            <option value="Kiev">Киев</option>
            <option value="Grodna">Гродно</option>
        </select>
        <input type="time" id="timeToStart" />
        <input type="time" id="timeToEnd" />
        <input type="number" id="price" />
        <div>
            <input type="button" id="addToRout" value="Добавить путь"/>
            <input type="button" id="star" value="Добавить в избранное"/>
            <input type="button" id="save" value="Сохраньть данные"/>
        </div>`,
        
        'tabloView':(arr)=>{
            
            let arrResult = '';
            for(let i = 0; i < arr.length ; i++){
                arrResult += `<br />
                <div id="routeId${i}" class="routeBlock">
                    <div class="route"><span>${arr[i]._typeTrans}</span></div>
                    <div class="route"><span>${arr[i]._date}</span></div>
                    <div class="route"><span>${arr[i]._routes}</span></div>
                    <div class="route"><span>${arr[i]._timeToStart}</span></div>
                    <div class="route"><span>${arr[i]._timeToEnd}</span></div>
                    <div class="route"><span>${arr[i]._price}</span></div>
                    <div class="route star"><span>${arr[i]._star}</span></div>  
                    <div class="route"><button id="delBtn${i}">Delete</button></div>
                </div>`  
            }
            return arrResult;
        },
        
        'dataArr': [],
        
        'reDraw':(viev, weareId) => {
            document.getElementById(weareId).innerHTML = viev;
            
        },
        
        'downloadToStorage': ()=>{
            if(localStorage.getItem('tablo.dataArr')){
                tablo.dataArr = JSON.parse(localStorage.getItem('tablo.dataArr'));
            };
        },
        
        'uploadInStorage':()=>{
            let saveTablo = JSON.stringify(tablo.dataArr);
            localStorage.setItem('tablo.dataArr', saveTablo);
        },
        
        'addRoute':() => {
            let nType = document.getElementById("typeTrans").options.selectedIndex;
            typeTrans = document.getElementById("typeTrans").options[nType].text;
            date = document.getElementById("date").value;
            let nRoute = document.getElementById("routes").options.selectedIndex;
            routes = document.getElementById("routes").options[nRoute].text;
            timeToStart = document.getElementById("timeToStart").value;
            timeToEnd = document.getElementById("timeToEnd").value;
            price = document.getElementById("price").value;
            //star = document.getElementById("star").value;
            tablo.dataArr[tablo.dataArr.length] = new Routes(typeTrans, date, routes, timeToStart, timeToEnd, price, true);
            if(!(typeTrans && date && routes && timeToStart && timeToEnd && price)){
                tablo.dataArr.splice([tablo.datArr.length-1],1);
            };
        },
        
        'removeRoute':(i)=>{
            tablo.dataArr.splice(i,1);
            tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
            tablo.addListenerDel();
        },
        
        'addListenerDel':() => {
            for(let i=0; i<tablo.dataArr.length; i++){
                document.getElementById("delBtn"+i).addEventListener("click", function(){tablo.removeRoute(i)});
            };
        }
}

class Routes{
    constructor(typeTrans, date, routes, timeToStart, timeToEnd, price, star){
        this.typeTrans = typeTrans;
        this.date = date;
        this.routes = routes;
        this.timeToStart = timeToStart;
        this.timeToEnd = timeToEnd;
        this.price = price;
        this.star = false;
    };
    
    get typeTrans(){
        return this._typeTrans;
    };
    set typeTrans(value){
        if(value.length == 0){
            alert("Укажите тип транспорта");
            return;
        } else {
            this._typeTrans = value;
        };
    };
    
    get date(){
        return this._date;
    };
    set date(value){
        if(value.length == 0){
            alert("Укажите дату отправления");
            return;
        } else {
            this._date = value;
        };
    };
    
    get routes(){
        return this._routes;
    };
    set routes(value){
        if(value.length == 0){
            alert("Укажите маршрут");
            return;
        } else {
            this._routes = value;
        };
    };
    
    get timeToStart(){
        return this._timeToStart;
    };
    set timeToStart(value){
        if(value.length == 0){
            alert("Укажите время отправления");
            return;
        } else {
            this._timeToStart = value;
        };
    };
    
    get timeToEnd(){
        return this._timeToStart;
    };
    set timeToEnd(value){
        if(value.length == 0){
            alert("Укажите время прибытия");
            return;
        } else {
            this._timeToEnd = value;
        };
    };
    
    get price(){
        return this._price;
    };
    set price(value){
        if(value.length == 0){
            alert("Укажите цену");
            return;
        } else {
            this._price = value;
        };
    };
    
    get star(){
        return thid._star;
    };
    set star(value){
        if(value !== true && value !== false){
            alert(error(star));
            return;
        } else {
            this._star = value;
        };
    };
};




/*document.getElementById("newLine").addEventListener("click", function(){
    tablo.downloadToStorage();
    tablo.reDraw(tablo.creatorView, 'newRoutes' );
    tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
    tablo.addListenerDel();
    document.getElementById("save").addEventListener("click", tablo.uploadInStorage);
    document.getElementById("addToRout").addEventListener("click", function(){
        tablo.addRoute(tablo.dataArr);
        tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
        tablo.addListenerDel();
        });
    });*/

tablo.downloadToStorage();
    tablo.reDraw(tablo.creatorView, 'newRoutes' );
    tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
    tablo.addListenerDel();
    document.getElementById("save").addEventListener("click", tablo.uploadInStorage);
    document.getElementById("addToRout").addEventListener("click", function(){
        tablo.addRoute(tablo.dataArr);
        tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
        tablo.addListenerDel();
        });