
//Ejecucion de funciones
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno)
document.getElementById("cover").addEventListener("click", ocultar)
document.getElementById("buttom_search").addEventListener("click", inputView)







//Ceclaracion de variables
inputSearch = document.getElementById("inputSearch");
box_search  = document.getElementById("box-search");
cover  = document.getElementById("cover");
reset  = document.getElementById("reset");
box_search_item = document.getElementsByClassName("box-search-item");


//Filtrado de busqueda
function buscador_interno (){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");
    cover.style.display = "block"

    //recorriendo elementos
    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
             li[i].style.display = ""; 
             box_search.style.display = "block"
           
             if(inputSearch.value == ""){
                box_search.style.display ="none"
             }
             
        }else{
            li[i].style.display = "none";  
    
          }

    }
}

function ocultar(){

    box_search.style.display = "none"
    cover.style.display = "none"
    reset.reset();
    inputSearch.style.top = "-80px";
    box_search.style.display = "none"
}

function inputView(){

    inputSearch.style.top = "0px";
    inputSearch.focus();
}


