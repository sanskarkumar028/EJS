
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

// for(var i=0;i<numberOfDrumButtons;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function ()
//     {
//         alert("I got clicked");
//     });
// }


for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
        // var buttonInnerHtml=this.innerHTML;
        
        // // alert(buttonInnerHtml);
        var buttonInnerHtml=this.innerHTML;
        // alert(button.innerHTML);
    
     makeSound(buttonInnerHtml);
     buttonAnimation(buttonInnerHtml);
       
    });
}


document.addEventListener("keypress",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);

});

function makeSound(key)
{
    
    switch (key) {
        case "w":
            // alert("i am good");
            var drum1=new Audio("soundd1.mp3");
            drum1.play();
            break;
            case "l":
                var drum1=new Audio("drum-2.mp3");
                drum1.play();
                break;
        case "s":
            var drum1=new Audio("drum-3.mp3");
           drum1.play();
            break;
              case "a":
              var drum1=new Audio("drum-4.mp3");   drum1.play();
                 break;
               case "k":
                    var drum1=new Audio("drum-2.mp3");   drum1.play();
                  break;    
                 case "j":
                        var drum1=new Audio("drum-3.mp3");   drum1.play();
                      break;
                  case "d":
                    var drum1=new Audio("drum-4.mp3");   drum1.play();
                                break;
                        

         default: 
             break;
       }
}

function buttonAnimation(key)
{
   var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);

}