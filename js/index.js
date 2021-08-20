let $dino = document.querySelector(".game__dino");
let $cactus = document.querySelector(".game__cactus");
let $bottom = document.querySelector(".game__bottom");
let $over = document.querySelector(".game__over");

document.addEventListener("keydown", function() {
    $over.classList.remove("db");
    $bottom.classList.add("bottomMov");
    $cactus.classList.add("cactusMov");
    if (!$dino.classList.contains("jump"))
    {
        $dino.classList.add("jump");
        setTimeout( function() {
        $dino.classList.remove("jump");
        }, 1000);
    }
});

setInterval(function() {
    let dino = $dino.getBoundingClientRect();
    let cactus = $cactus.getBoundingClientRect(); 
    if (cactus.x <= dino.x + dino.width && cactus.y <= dino.y + dino.height) {  
        $bottom.classList.remove("bottomMov");
        $cactus.classList.remove("cactusMov");
        $dino.classList.remove("jump");
        $over.classList.add("db");
    }
}, 10 );


