const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]


  const ovejasFiltradas = contarOvejas(ovejas)


// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]


function contarOvejas(ovejas) {
    let ovejasFiltradas = [];
    for (let oveja of ovejas) {
        if (oveja.name.toLowerCase().indexOf("n") > -1 && oveja.name.toLowerCase().indexOf("a") > -1 && oveja.color == "rojo")
        {
            ovejasFiltradas.push(oveja);
        }
    }

    return ovejasFiltradas;
  }

  console.log(ovejasFiltradas)