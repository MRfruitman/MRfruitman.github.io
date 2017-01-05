/**
 * Created by fruit on 16/5/24.
 */
//var aqiData = {};
//var cityInput=document.getElementById("aqi-city-input");
//var aqiInput=document.getElementById("aqi-value-input");
//function addAqiData(){
//    var city = cityInput.value.trim();
//    var aqi=aqiInput.value.trim();
//    if (!city.match(/^[A-Za-z\u4e00-\u9fa5]+$/)){
//        alert("城市名必须为中英文字符！");
//        return;
//    }
//    if (!aqi.match(/^\d+$/)){
//        alert("空气质量必须是整数");
//        return;
//    }
//    aqiData[city]=aqi;
//}
//function renderAqiList(){
//    var items="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
//    for(var city in  aqiData){
//        items+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"
//    }
//    document.getElementById("aqi-table").innerHTML=city ? items : "";
//}
//function addBtnHandle(){
//    addAqiData();
//    renderAqiList();
//}
//function delBtnHandle(city){
//        delete aqiData[city];
//        renderAqiList();
//}
//function init(){
//    document.getElementById("add-btn").addEventListener("click",addBtnHandle);
//    document.getElementById("aqi-table").addEventListener("click",function(event){
//        if(event.target.nodeName.toLowerCase()==='button') delBtnHandle(event.target.dataset.city);
//    })
//}
//init();

