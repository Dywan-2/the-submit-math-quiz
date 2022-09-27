function adduser(){
    p1=document.getElementById("p1n").value;
    p2=document.getElementById("p2n").value;
    localStorage.setItem("player1",p1);
    localStorage.setItem("player2",p2);
    window.location.replace("index2.html");
    }