
var loaderBody = document.getElementById("loaderSkeleton")
var mainBody = document.getElementById("mainBodySkeleton")

mainBody.style.display = "none"


window.addEventListener("DOMContentLoaded", () => {
    setTimeout(()=>{
        loaderBody.style.display = "none";
        loaderBody.style.opacity = 0;
        mainBody.style.display = "block";
    
    }, 2000)
})