const tabla=document.getElementById("tablero");

tabla.addEventListener("click",(e)=>{
  
    let element=e.target.closest("#tablero td");
    let row= element.parentNode.rowIndex;
    let columna= element.cellIndex;
    
  

    for(let i=tablero.length-1; i>=0;i--){
      
      
   
      if(tablero[i][columna] == 0){
      
        tablaHtml[i][columna].setAttribute("class","circle-red");
        tablero[i][columna]=1;
        break;

      }



    }
    checkWinner(1);
  console.log(tablero);

});


