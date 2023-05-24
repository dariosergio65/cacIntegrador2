// dos formas de hacerlo:

// Forma1:

//onclick="resumen()" debe estar en el button resumen

function resumen(){ //funcion que se ejecuta al hacer click en resumen
   
    rese(); // funcion que borra una alarma remanete si la hubiere

    const nombre = document.getElementById('nombre');
    let nom = nombre.value ;
    if (nom == ""){
      mialerta("Debes completar el campo Nombre");
      return 1;
    } 
    const apellido = document.getElementById('apellido');
    let ape = apellido.value ;
    if (ape == ""){
      mialerta("Debes completar el campo Apellido");
      return 1;
    }
    const correo = document.getElementById('correo');
    let cor = correo.value ;
    if (cor == ""){
      mialerta("Debes completar el email");
      return 1;
    }
    const cantidad = document.getElementById('cant');
      // cantidad.value = cantidad.value.toFixed(2) * 1;
      if (cantidad.value < 1){
        mialerta("La cantidad debe ser mayor que 0");
        return 1;
      }

      const cat = document.getElementById('cat'); // Categoría, no confundir con cantidad
      const inpuTotal = document.getElementById('total');
      let tot=0;

      switch (cat.value) {
        case "1":
          tot = cantidad.value * 200 * 0.2;
          break;
        case "2":
          tot = cantidad.value * 200 * 0.5;
          break;
        case "3":
          tot = cantidad.value * 200 * 0.85;
          break;
      }
     
        inpuTotal.value = "Total a Pagar: $ " + tot.toFixed(2);
  }

  function rese(){ // lo único que hace es borrar una alarma remanente si la hubiere
    // se ejecuta con los botones Borrar y Resumen
    let rem = document.getElementById('idalerta'); 
    if (rem != null){
     rem.remove();
    }

 }

  function mialerta(texto){
    
    var alerta = document.createElement('div');
    alerta.classList.add('alert', 'alert-danger', 'mt-3', 'alert-dismissible');
    alerta.setAttribute('role', 'alert');
    alerta.id = 'idalerta';

    // Agregar el contenido al alerta
    var mensaje = document.createTextNode(texto);
    alerta.appendChild(mensaje);
  
    //boton
    var boton = document.createElement('button');
    boton.classList.add('btn-close');
    boton.setAttribute('type', 'button');
    boton.setAttribute('data-bs-dismiss', 'alert');
    boton.setAttribute('aria-label', 'close');
/*
    boton.addEventListener('click', function() {
      alerta.remove(); // Cerrar la alerta al hacer clic en el botón de cierre
    });
*/
    alerta.appendChild(boton);

    // Agregar el alerta al documento
    var contenedor = document.querySelector('#alerta');
    contenedor.appendChild(alerta);
  }



  // Forma 2:

  // el button debe tener el id "resum"
/*
  $(document).ready(function() {
    $("#resum").click(function() {
      const nom = $("#nombre").val();
      if (nom == ""){
        alert("Debes completar el campo Nombre");
        return 1;
      }
      const ape = $("#apellido").val();
      if (ape == ""){
        alert("Debes completar el campo Apellido");
        return 1;
      }
      const cor = $("#correo").val();
      if (cor == ""){
        alert("Debes completar el email");
        return 1;
      }
      const cantidad = document.getElementById('cant');
      // cantidad.value = cantidad.value.toFixed(2) * 1;
      if (cantidad.value < 1){
        alert("La cantidad debe ser mayor que 0");
        return 1;
      }

      const cat = document.getElementById('cat'); // Categoría, no confundir con cantidad
      const inpuTotal = document.getElementById('total');
      let tot=0;

      switch (cat.value) {
        case "1":
          tot = cantidad.value * 200 * 0.2;
          break;
        case "2":
          tot = cantidad.value * 200 * 0.5;
          break;
        case "3":
          tot = cantidad.value * 200 * 0.85;
          break;
      }
     
        inpuTotal.value = "Total a Pagar: $ " + tot.toFixed(2);

    });
  });
*/