//superCri
window.addEventListener("load", function() {
   var button = document.getElementById("superCri");
    button.addEventListener("click", function() {
     
    var color = document.getElementById("color").value;
    if (color=="celeste"){
        document.getElementById("circulo1").style.border = "2px solid black";
        document.getElementById("circulo2").style.border = "0px solid black";
        document.getElementById("circulo3").style.border = "0px solid black";
    } else if (color=="rojo"){
        document.getElementById("circulo1").style.border = "0px solid black";
        document.getElementById("circulo2").style.border = "2px solid black";
        document.getElementById("circulo3").style.border = "0px solid black";
    } else if (color=="anaranjado"){
        document.getElementById("circulo1").style.border = "0px solid black";
        document.getElementById("circulo2").style.border = "0px solid black";
        document.getElementById("circulo3").style.border = "2px solid black";
    }
        
    });

    var boton = document.getElementById("cri");
    var conta = 1;
    boton.addEventListener("click", function() {
        if(conta == 1){
            document.getElementById("circulo1").style.border = "2px solid green";
            document.getElementById("color").placeholder = "celeste";
            document.getElementById("circulo2").style.border = "transparent";
            document.getElementById("circulo3").style.border = "transparent";
        }
        if(conta == 2){
            document.getElementById("circulo2").style.border = "2px solid green";
            document.getElementById("color").placeholder = "rojo";
            document.getElementById("circulo1").style.border = "transparent";
            document.getElementById("circulo3").style.border = "transparent";
        }
        if(conta == 3){
            document.getElementById("circulo3").style.border = "2px solid green";
            document.getElementById("color").placeholder = "anaranjado";
            document.getElementById("circulo1").style.border = "transparent";
            document.getElementById("circulo2").style.border = "transparent";
            conta = 0;
        }
        conta++;
    });
});

    
        
