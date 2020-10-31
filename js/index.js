alert( 'Bienvenidas Mujeres Emprendedoras!');
      
      alert('¿Deseas saber acerca de autonomia económica de las mujeres? '); 

            var inicio = 'Hola ', nombre, resultado, mensaje=', te invitamos a ser Emprendedora y Desarrollar tu Autonomia Economica';
            nombre = prompt('Escriba su  Nombre:');
            resultado = inicio + nombre + mensaje
      alert (resultado);













document.addEventListener('DOMContentLoaded', () => {

	const elementosCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel, {
		duration: 150,
		dist: -100,
		shift: 5,
		padding:5,
		numVisible: 5,
		indicators:true,
		noWrap: false

	});
});

 (function(){

        var hola=function(){
          console.log("hola");
        };
        setTimeout(hola,0);
        console.log(new Date().toLocaleString());

        var fecha= new Date();
        document.write(fecha);

      
      


      
      }())






window.onload =function()
{
	var btn_radio = document.getElementById("btn-radio");
	btn_radio.onclick =function(){
		var input_radio = document.formulario.input_radio;
		for (x = 0; x < input_radio.length; x++)
		{
			if(input_radio[x].checked)
			{
				alert(input_radio[x].value);
			}
		}
	}

	var btn_checkbox = document.getElementById("btn-checkbox");
	btn_checkbox.onclick = function(){
		if(document.formulario.input_checkbox.checked){
			alert("A aceptado la compra");

		}
		else{
			alert("debe de aceptar la compra");
		}
	}
}





























var contactos = new Array();
	function agregarContacto (){
		nombre = prompt("producto");
		descripcion = prompt("descripcion");
		precio = prompt("precio");

		
		contactos[contactos.length] = new Array(nombre, descripcion, precio);
		mostrarContactos ();
		}
		function mostrarContactos () {
			destino=document.getElementById("divDestino");
			contenido="";
			for(x=0; x<contactos.length; x++)
			{


				nombre = contactos[x][0];
				descripcion = contactos[x][1];
				precio = contactos[x][2];

				contenido=contenido+"<tr><td>"+nombre+"</td><td>"+descripcion+"</td><td>"+precio+"</td></tr>"
				

			


			}
			destino.innerHTML=contenido;


		}


 