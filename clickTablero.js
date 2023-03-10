const tabla=document.getElementById("tablero");

tabla.addEventListener("click",(e)=>{
    let element=e.target.closest("#tablero td");
    let row= element.parentNode.rowIndex;
    let columan= element.cellIndex;
    console.log(`fila: ${row}. columna: ${columan} -- ${element}`);

    //ejemplo (elimianar despues)
    let element2=e.target.closest("td div");
  element2.setAttribute("class","circle-red");

});