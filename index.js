let tablero=[
    [0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,1,0,1,0,0],
    [0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]


const checkWinner=(numPlayer)=>{

    for(let i=0; i<tablero.length;i++){
        let cont=0;
        tablero[i].forEach((element, index)=>{
            element==numPlayer? cont++ : cont=0;
            cont==4 ? console.log("Gana en linea") : false;
        });
    }


    for(let i=0; i<tablero[0].length;i++){
        let cont=0;
        tablero.forEach((element, index)=>{
            element[i]==numPlayer? cont++ : cont=0;
            cont==4 ? console.log("Gana en columna") : false;
    });
    }


  //diagonal
  tablero.forEach((fila,poFila)=>{
    fila.forEach((columna, poColumna)=>{
        if(columna==numPlayer){
            let cont=1;
            
            for(let i=0;i<4;i++){
                

                if((poFila+1 >=0 && poFila+1 <tablero.length) && (poColumna-1 >=0 && poColumna-1 <tablero[0].length)){
                   
                    if(tablero[poFila +1][poColumna -1]==numPlayer){
                        console.log(`fila: ${poFila+1} columna:${poColumna-1}` )
                        cont++;
                        if(cont==4){
                            console.log("ganas d a i")
                            break;
                        }
                    }else{
                        cont=0;
                        break;
                    }
                }
                    
 
            }
        }
    })

    
})





    // tablero.forEach((fila,poFila)=>{
    //     fila.forEach((columna, poColumna)=>{
    //         if(columna==numPlayer){
    //             let cont=1;
                
    //             for(let i=0;i<4;i++){
                    

    //                 if((poFila+1 >0 && poFila+1 <tablero.length) && (poColumna+1 >0 && poColumna+1 <tablero[0].length)){
    //                     console.log(`fila: ${poFila+i} columna:${poColumna+i}...${typeof tablero[poFila +1][poColumna +1]}` )
    //                     if(tablero[poFila +1][poColumna +1]==numPlayer){
    //                         cont++;
    //                         if(cont==4){
    //                             console.log("ganas i a d")
    //                             break;
    //                         }
    //                     }else{
    //                         cont=0;
    //                         break;
    //                     }
    //                 }
                        
     
    //             }
    //         }
    //     })

        
    // })

}

checkWinner(1);