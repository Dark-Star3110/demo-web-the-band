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

// tat menu khi select
 // let check=document.getElementById('nav-mobile-checkbox').checked;
 let mobileMenu=document.getElementById('mobile-menu-btn');
    
 let menuItems = document.querySelectorAll('#nav-mobile li a[href*="#"]');
 // console.log(menuItems);
 for(let i=0;i<menuItems.length;i++){
   let menuItem=menuItems[i];
   menuItem.onclick= function(event){
     let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav-mobile');
      if(isParentMenu){
        // console.log(menuItem);
        event.preventDefault();
      }
      else{
       document.getElementById('nav-mobile-checkbox').checked=false;
      }
   }
 }
