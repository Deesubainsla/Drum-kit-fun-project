
let len=document.querySelectorAll(".drum").length;

var audio= [new Audio('sounds/tom-1.mp3'),new Audio('sounds/tom-2.mp3'),new Audio('sounds/tom-3.mp3'),new Audio('sounds/tom-4.mp3'),new Audio('sounds/snare.mp3'),new Audio('sounds/kick-bass.mp3'),new Audio('sounds/crash.mp3')]


for(let i=0;i<len;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var inner=this.innerHTML;

        switch (inner) {
            case "w":
                var tom1= new Audio('sounds/tom-1.mp3');
                tom1.play();
                animation(inner);
                break;
            case "a":
                var tom2= new Audio('sounds/tom-2.mp3');
                tom2.play();
                animation(inner);
                break;   
            case "s":
                var tom3= new Audio('sounds/tom-3.mp3');
                tom3.play();
                animation(inner);
                break;
             case "d":
                var tom4= new Audio('sounds/tom-4.mp3');
                tom4.play();
                animation(inner);
                break;
             case "j":
                var snare= new Audio('sounds/snare.mp3');
                snare.play();
                animation(inner);
                break;
             case "k":
                var kick= new Audio('sounds/kick-bass.mp3');
                kick.play();
                animation(inner);
                break;
             case "l":
                var crash= new Audio('sounds/crash.mp3');
                crash.play();
                animation(inner);
                break; 
                
            default:console.log(inner);
                break;
        }
    });
};

document.addEventListener("keypress",function(event){
        
    var key= event.key;

    switch (key) {
        case "w":
            var tom1= new Audio('sounds/tom-1.mp3');
            tom1.play();
            animation(key);
            break;
        case "a":
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
            animation(key);
            break;   
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
            animation(key);
            break;
         case "d":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
            animation(key);
            break;
         case "j":
            var snare= new Audio('sounds/snare.mp3');
            snare.play();
            animation(key);
            break;
         case "k":
            var kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
            animation(key);
            break;
         case "l":
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
            animation(key);
            break; 
            
        default:console.log(inner);
            break;
    }
  
});

function animation(button){
    var pointer= document.querySelector("."+button);
    pointer.classList.add("pressed");
    setTimeout(function(){
        pointer.classList.remove("pressed");
    }, 100);
}






