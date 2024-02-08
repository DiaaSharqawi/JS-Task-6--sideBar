let burgenIcon = document.querySelector('.burger-icon');

let closeIcon = document.querySelector('.closeIcon');

burgenIcon.onclick = (e)=> {
    /*document.querySelector('.sideBarBurgerIcon').innerHTML=getSideBar();*/
    document.querySelector('.sideBarBurgerIcon ').classList.add("sideBar-show");
   

   closeIcon.onclick=removeSideBar;
}



function removeSideBar(){
    document.querySelector('.sideBarBurgerIcon ').classList.remove("sideBar-show");

}
