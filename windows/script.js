let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "2rem"){
        startmenu.style.bottom = "-222rem"
    }
    else{
        startmenu.style.bottom = "2rem"
    }
})
