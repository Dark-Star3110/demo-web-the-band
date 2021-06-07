window.onload = function(){
    setTimeout("switch_img()",4000);
}
let i=1;
let number=3;
function switch_img(){
    i++;
    document.images['map'].src="./assets/img/map"+i+".jpeg";
    if(i<number){
        setTimeout("switch_img()",4000);
    }
    else if(i==number){
        i=0;
        setTimeout("switch_img()",4000);
    }
}
function open_tickets(){
    document.getElementById("tickets-screen").style.display="block";
    document.getElementById("main").style.display="none";
}
function close_tickets(){
    document.getElementById("tickets-screen").style.display="none";
    document.getElementById("main").style.display="block";
}
