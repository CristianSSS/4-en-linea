let tablero=[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]

for(let i=0; i<tablero.length;i++){
    let cont=0;
    tablero[i].forEach((element, index)=>{
        element==1? cont++ : cont=0;
        cont==4 ? console.log("Gana en linea") : false;
    });
}



for(let i=0; i<tablero[0].length;i++){
    let cont=0;
       tablero.forEach((element, index)=>{
        element[i]==1? cont++ : cont=0;
        cont==4 ? console.log("Gana en columna") : false;
  });
}


for(let i=0; i<tablero[0].length;i++){
    let b=i;
    let cont=0;
    tablero.forEach((element,index)=>{
        element[b]==1?  cont++ : cont=0;

        cont==4? console.log("Gana en diagonal derecha"): false;

        b++;
    });
}

for(let i= tablero[0].length -1 ;i>0;i--){
    let b=i;
    let cont=0;

    tablero.forEach((element,index)=>{
        element[b]==1? cont++ : cont=0;

        cont==4? console.log("Gana en diagonal izquierda") : false;

        b--
    })
}


