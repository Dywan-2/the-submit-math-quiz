p1name=localStorage.getItem("player1");
p2name=localStorage.getItem("player2");
var p1nscore=0;
var p2nscore=0;
var qturn="player1";
var aturn="player2";
document.getElementById("pn1").innerHTML=p1name+": ";
document.getElementById("pn2").innerHTML=p2name+": ";
document.getElementById("p2score").innerHTML=p2nscore+": ";
document.getElementById("p1score").innerHTML=p1nscore+": ";
document.getElementById("playerq").innerHTML="question turn "+p1name;
document.getElementById("playera").innerHTML="awnser turn "+p2name;

function send(){
number1=document.getElementById("number").value;
number2=document.getElementById("number2").value;
actualawnser=parseInt(number1)*parseInt(number2);
question_number="<h4 id='wordisplay'>Q "+number1+"X"+number2+"</h4>"
inputbox="<br>answer : <input id='input'>";
checkawnser="<br><button onclick='check()' class='btn-primary'>check</button>";
row= question_number+inputbox+checkawnser;
document.getElementById("output").innerHTML=row;
document.getElementById("number").value="";
document.getElementById("number2").value="";
}

function check(){
    var awnsers=document.getElementById("inputbox").value;
    
    if(awnsers==actualawnser){
        if(aturn=="player1"){
            p1nscore=p1nscore+1;
            document.getElementById("p1score").innerHTML=p1nscore;
        }
        else{
            p2nscore=p2nscore+1;
            document.getElementById("p2score").innerHTML=p2nscore;
        }
    }
    if(qturn=="player1"){
        qturn="player2";
        document.getElementById("playerq").innerHTML="question turn"+p2name;
    }
    else{
        qturn="player1";
        document.getElementById("playerq").innerHTML="question turn"+p1name;
    }
    if(aturn=="player1"){
        aturn="player2";
        document.getElementById("playera").innerHTML="awnser turn"+p2name;
    }
    else{
        aturn="player1";
        document.getElementById("playera").innerHTML="awnser turn"+p1name;
    }
    document.getElementById("output").innerHTML="";
    }