
let saludo=alert("Bienvenido al sitio web del curso de JavaScript de CODER HOUSE");

let accion=prompt('Que rubro estás buscando? \n ESCRIBA SIN ACENTOS \n Ferreteria \n Comidas \n Tecnologia \n Kioscos \n Ropa \n Supermercados').toLowerCase();

function buscarRubro(r){
  
  return r===accion;
}

const res=rubros.find(buscarRubro);

document.write(`</br> <b><em>${res}</b></em> </br></br>`);
    
if (res == "ferreteria") {
  for (const ferr of ferret) {
    document.write(
      `<b>Negocio: ${ferr.negocio} - Artículo: ${ferr.articulo} <br></b>`
    );
  }
  
}else if(res == "comidas") {
  for (const c of comida) {
    document.write(
      `<b>Negocio: ${c.negocio} - Artículo: ${c.articulo} <br></b>`
    );
  }
}else if(res == "tecnologia") {
  for (const t of tecno) {
    document.write(
      `<b>Negocio: ${t.negocio} - Artículo: ${t.articulo} <br></b>`
    );
  }
}else if(res == "kioscos") {
  for (const k of kiosco) {
    document.write(
      `<b>Negocio: ${k.negocio} - Artículo: ${k.articulo} <br></b>`
    );
  }
}else if(res == "ropa") {
  for (const r of rop) {
    document.write(
      `<b>Negocio: ${r.negocio} - Artículo: ${r.articulo} <br></b>`
    );
  }
}else if(res == "supermercados") {
  for (const s of supermercado) {
    document.write(
      `<b>Negocio: ${s.negocio} - Artículo: ${s.articulo} <br></b>`
    );
  }
}else{
  alert('Elija el rubro deseado correctamente, lea las instrucciones en el primer renglón')
  let accion=prompt('Que rubro estás buscando? \n ESCRIBA SIN ACENTOS \n Ferreteria \n Comidas \n Tecnologia \n Kioscos \n Ropa \n Supermercados').toLowerCase();
}

// let articulo= prompt('Elija el articulo listado en el navegador');

// - $${ferr.precio}
// let negocio = document.querySelector('#negocio');
// let valorNegocio=negocio.value;
// let articulo = document.querySelector('#articulo');
// let valorArticulo=articulo.value;

// console.log(`El costo de el/la ${valorArticulo} comprado en ${valorNegocio} es `)

// if(accion){
  //     switch (accion){
    //         case 'ferreteria':
    //             let negocio = prompt('Elija el negocio listado en el navegador');
    //             let producto = prompt('Elija el producto listado en el navegador');
    //             alert(`El costo de el/la ${producto} comprado en ${negocio} es ${ferret.negocio.precio}`)
            
//             break;
//         case 'comidas':
//             console.log(comidas);
//             prompt('Elija su negocio, producto y cantidad');
//             break;
//         case 'tecnologia':
//             console.log(tecnologia);
//             prompt('Elija su negocio, producto y cantidad');
//             break;
//         case 'kioscos':
//             console.log(kioscos);
//             prompt('Elija su negocio, producto y cantidad');
//             break;
//         case 'ropa':
//             console.log(ropa);
//             prompt('Elija su negocio, producto y cantidad');
//             break;
//         case 'supermercados':
//             console.log(supermercados);
//             prompt('Elija su negocio, producto y cantidad');
//             break;
//         default:
//             alert('Elija el rubro deseado correctamente, lea las instrucciones en el primer renglón')
                                                            
//     }
// }



    
    // while(accion !== 'comprar'){
    //     alert('Te recomiendo que compres algo');
    //     var accion=prompt('Que desea hacer? \n Ver \n Comprar \n Saludar').toLowerCase();

    // }

    // if (accion == "comprar") {
    //   let compra = prompt(
    //     "Que desea comprar? \n Herramientas \n Comida \n Ropa"
    //   ).toLowerCase();
    //   switch (compra) {
    //     case "herramientas":
    //       alert("Espero que puedas arreglar lo que rompiste");
    //       break;

    //     case "comida":
    //       alert("al fin pagaste la cena");
    //       break;

    //     case "ropa":
    //       alert("Abrigate que se viene el frío");
    //       break;

    //     default:
    //       alert("Elegí bien, vago");
    //   }
    // }


// function compra() {
//   let satisfacción = prompt("Estás satisfecho con la compra?").toLowerCase();
//   if (
//     satisfacción == "si" ||
//     satisfacción == "SI" ||
//     satisfacción == "SÍ" ||
//     satisfacción == "sí"
//   ) {
//     alert("Me Alegro!! Espero verte de nuevo");
//   } else {
//     alert("En que podemos mejorar? Gracias por su devolución");
//   }
// }

// compra();