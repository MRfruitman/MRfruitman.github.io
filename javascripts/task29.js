/**
 * Created by fruit on 16/10/21.
 */
function changeIdentity(){
    if(document.getElementById("inSchoolRadio").checked){
    document.getElementsByClassName("inSchool")[0].className="inSchool";
    document.getElementsByClassName("outSchool")[0].className="outSchool hide";
    }else {
    document.getElementsByClassName("inSchool")[0].className="inSchool hide";
    document.getElementsByClassName("outSchool")[0].className="outSchool";
    }
}
function changeSelect(){
    data={
        bj:["北京大学","清华大学","北京航空航天大学"],
        sh:["上海交通大学","复旦大学","同济大学"],
        hz:["浙江大学","浙江工业大学","杭州电子科技大学"]
    };
    var source=document.getElementById("select1");
    var target=document.getElementById("select2");
    var selected=source.options[source.selectedIndex].value;
    target.innerHTML="";
    for (var i=0;i<data[selected].length;i++){
        var opt=document.createElement("option");
        opt.value=data[selected][i];
        opt.innerHTML=data[selected][i];
        target.appendChild(opt);
    }
}
var radioSelect=document.getElementById("radio-select");
var selectOne=document.getElementById("select1");
addHandler(radioSelect,"change",changeIdentity);
addHandler(selectOne,"change",changeSelect);