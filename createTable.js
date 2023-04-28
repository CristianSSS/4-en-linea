let tablaHtml=[];

const createTable=()=>{

    
    const table=document.getElementById("tablero");
    let fragment=document.createDocumentFragment();

    for(let i=0; i<tablero.length;i++){
        let tr=document.createElement("tr");
        let array=[];
        for(let b=0;b<tablero[0].length;b++){
            let td=document.createElement("td");
            let div=document.createElement("div");
            div.setAttribute("class","circle");

            td.appendChild(div);
            tr.appendChild(td);

            array.push(div);
        }
        tablaHtml.push(array);
        fragment.appendChild(tr);

    }

    table.appendChild(fragment);

}


createTable();
