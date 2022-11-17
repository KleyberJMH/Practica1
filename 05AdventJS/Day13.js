let regalosWrap = ["🏈🎸", "⚽️📷"];


function wrapGifts(regalos){
    let regalosEnvueltos = [];
    let cantidad = regalos[0].length+2;
    let techo="";

    for (let i = 0; i < cantidad; i++) {
       techo += "*";
    }

    regalosEnvueltos.push(techo);
    for (const regalo of regalos) {
        regalosEnvueltos.push("*"+regalo+"*")
    }
    regalosEnvueltos.push(techo);

    return regalosEnvueltos;
}

console.log(wrapGifts(regalosWrap));