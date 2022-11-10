let regalosWrap = ["🏈🎸", "⚽️📷"];


function wrapGifts(regalos){
    let regalosEnvueltos = [];
    let cantidad = (regalos[0].length)+2;
    let techo="";
    for(i=0; i>cantidad; i++){
        techo+="*";
    }

    return techo;
}







console.log(wrapGifts(regalosWrap));