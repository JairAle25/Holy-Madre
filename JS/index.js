/*Nos permite hacer un tooltip que usamos
para que cada vez que hagamos hover sobre la planta
en gustos me muestre un cartel que es apto vegano*/ 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/*Me permite hacer el efecto de aparicion cuando estoy
scroleando hacia la section y desaparece
cuando no la estoy viendo*/
const myDiv = document.querySelector('.imgLocal');

function checkVisibility() {
  const rect = myDiv.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    myDiv.classList.add('visible');
  } else {
    myDiv.classList.remove('visible');
  }
}
if(myDiv){
  // Detecta si el div es visible al cargar la página
  checkVisibility();

  // Actualiza la visibilidad del div cuando el usuario se mueve
  window.addEventListener('scroll', checkVisibility); 
}



const BotonMenu = document.getElementById('listaResponsive');
const Menu = document.getElementById('links');

BotonMenu.addEventListener('click',()=>{
	Menu.classList.toggle('mostrarLista');
	BotonMenu.classList.toggle('rotarLista');
})