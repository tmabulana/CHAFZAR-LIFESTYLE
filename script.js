let hamBtn=document.querySelector("#hamburger-btn");
let cancelBtn=document.querySelector("#cancel-btn");
let sidebarClass=document.querySelector(".sidebar-class");
let isHide=true;
function showHide(){
    if(isHide==true){
        let hideId=document.getElementById("sidebar-hide");
        hideId.id="sidebar-show";
        isHide=false;
    }
    else{
        let showId=document.getElementById("sidebar-show");
        showId.id="sidebar-hide";
        isHide=true;
    }
}
hamBtn.addEventListener("click",showHide);
cancelBtn.addEventListener("click",showHide);
