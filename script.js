let menutoggle = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".side-bar");
menutoggle.onclick = () =>{
    sidebar.classList.toggle("hide-sidebar");
}