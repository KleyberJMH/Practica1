const carta = 'bici coche balon _playstation bici coche peluche'

    let regalos = carta.split(" ");
    let objeto = {};
    
    let arrayRegalos = [];
    for (const regalo of regalos) {
        if(regalo!="" && regalo.indexOf("_") != 0)
        {
                arrayRegalos.push(regalo);
        }
    }
    
    
    for (const regalo of arrayRegalos) {      
        if(objeto[regalo]){
            objeto[regalo]++;
        }else{
            objeto[regalo]=1;
        }
    }
    
