// const tabla=document.getElementById("tablero");

// tabla.addEventListener("click",(e)=>{
//     let element=e.target.closest("#tablero td");
//     let row= element.parentNode.rowIndex;
//     let columan= element.cellIndex;
//     console.log(`fila: ${row}. columna: ${columan} -- ${element}`);

//     //ejemplo (elimianar despues)
//     let element2=e.target.closest("td div");
//   element2.setAttribute("class","circle-red");

// });

const tabla=document.getElementById("tablero");

tabla.addEventListener("click",(e)=>{
    let element=e.target.closest("#tablero td");
    let row= element.parentNode.rowIndex;
    let columna= element.cellIndex;
    
  

    for(let i=tablero.length-1; i>=0;i--){
      
      console.log(tablaHtml)
   
      if(tablero[i][columna] == 0){
      
        tablaHtml[i][columna].setAttribute("class","circle-red");
        tablero[i][columna]=1;
        break;

      //     //ejemplo (elimianar despues)
      // let element2=e.target.closest("td div");
      // element2.setAttribute("class","circle-red");
      }

      checkWinner(1);

    }


   








  

});


