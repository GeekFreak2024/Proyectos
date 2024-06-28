document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const servicioDropdown = document.querySelector('.dropdown-menu');


    const handleMenuToggle = () => {
        menu.classList.toggle('show');
        servicioDropdown.classList.toggle('show');
        servicioDropdown.classList.toggle('mobile-show');
        menuContainer.classList.toggle('show'); // Agrega o quita la clase 'show' al contenedor del menú
    };

    menuToggle.addEventListener('click', handleMenuToggle);

    const handleResize = () => {
        if (window.innerWidth >= 769) {
            menu.classList.remove('show');
            servicioDropdown.classList.remove('show');
            servicioDropdown.classList.remove('mobile-show');
            menuContainer.classList.remove('show'); // Elimina la clase 'show' del contenedor del menú en pantallas grandes
        }
    };

    window.addEventListener('resize', handleResize);

    const listaItems = document.querySelectorAll('.lista-item');
    const contenidos = document.querySelectorAll('.contenido');

    function mostrarContenido(index) {
        contenidos.forEach(contenido => contenido.classList.remove('show'));
        const contenidoClase = ['proposito', 'vision', 'valor'][index];
        const contenidoEl = document.querySelector(`.${contenidoClase}`);
        contenidoEl.classList.add('show');
    }

    function actualizarEstilosLista() {
        listaItems.forEach(item => {
            item.classList.remove('active');
            item.style.backgroundImage = 'none';
            item.style.backgroundColor = '#fff';
            item.querySelector('a').style.color = '#3b3a3a';
        });
    }

    listaItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            actualizarEstilosLista();
            item.classList.add('active');
            item.style.backgroundImage = 'linear-gradient(to right, #777777, #B0980C)';
            item.querySelector('a').style.color = '#fff';
            mostrarContenido(index);
        });
    });

    // Agregar el estilo activo solo al primer elemento de la lista    
    listaItems[0].style.backgroundImage = 'linear-gradient(to right, #777777, #B0980C)';
    listaItems[0].querySelector('a').style.color = '#fff';



    const swiper = new Swiper('.swiper', {
        // Optional parameters
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,


        breakpoints: {
            360: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 4,
            }

        }

    });

});


