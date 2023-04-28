let tablero=[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]


const checkWinner=(numPlayer,row,column)=>{

    //    //columna
    try{
            if(
                tablero[row + 1][column]==numPlayer &&
                tablero[row + 2][column]==numPlayer &&
                tablero[row + 3][column]==numPlayer
            ){
                return true
            }
    }catch (err) {

    }


    //     //fila
        
        try {
            if(
                tablero[row][column + 1]==numPlayer &&
                tablero[row][column + 2]==numPlayer &&
                tablero[row][column + 3]==numPlayer
            ){
                return true
            }
            
        } catch (error) {
            
        }


        try {

            if(
                tablero[row][column - 1]==numPlayer &&
                tablero[row][column - 2]==numPlayer &&
                tablero[row][column - 3]==numPlayer
            ){
                return true
            }
            
        } catch (error) {
            
        }

    //diagonal

        //izquieda abajo
    try {

        if(
            tablero[row + 1][column - 1]==numPlayer &&
            tablero[row + 2][column - 2]==numPlayer &&
            tablero[row + 3][column - 3]==numPlayer
        ){
            return true
        }

    } catch (error) {
        
    }

        //izquierda arriba
    try {

        if(
            tablero[row - 1][column - 1]==numPlayer &&
            tablero[row - 2][column - 2]==numPlayer &&
            tablero[row - 3][column - 3]==numPlayer
        ){
            return true
        }

    } catch (error) {
        
    }
    

        // derecha abajo
    try {

        if(
            tablero[row + 1][column + 1]==numPlayer &&
            tablero[row + 2][column + 2]==numPlayer &&
            tablero[row + 3][column + 3]==numPlayer
        ){
            return true
        }

    } catch (error) {
        
    }


    // derecha arriba
    try {

        if(
            tablero[row - 1][column + 1]==numPlayer &&
            tablero[row - 2][column + 2]==numPlayer &&
            tablero[row - 3][column + 3]==numPlayer
        ){
            return true
        }

    } catch (error) {
        
    }
   

    return false;


}

