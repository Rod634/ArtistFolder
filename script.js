var modalOverlay = document.querySelector(".modal_overlay");
var cards = document.querySelectorAll(".card");

for(let card of cards){
    card.addEventListener("click", function(){
        var Idvideo = card.getAttribute("id");
        modalOverlay.querySelector("iframe").src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${Idvideo}&color=%2345798b&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
        modalOverlay.classList.add("active");
    })
}

modalOverlay.querySelector(".material-icons").addEventListener("click", function(){
    modalOverlay.querySelector("iframe").src = "";
    modalOverlay.classList.remove("active");
})