// Project data
const projects = [
    {
        title: "Plataforma E-commerce",
        description: "Soluciones para su e-commerce con las tecnologías más recientes.",
        image: "./img/compras.webp"
    },
    {
        title: "Empoderamiento con IA ChatBot",
        description: "Un chat bot inteligente usando procesamiento de lenguaje natural machine learning.",
        image: "./img/chat_bot.jpeg"
    },
    {
        title: "CRM",
        description: "Soluciones escalables para su negocio.",
        image: "./img/personsas_con_laptops.jpeg"
    },
    {
        title: "Apps para móbiles",
        description: "Aplicaciones desplegadas en dispositivos móviles.",
        image: "./img/chat_bot_ai.jpg"
    }
];

 //  Function to populate the project carousel
function populateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    projects.forEach((project, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `
            <img src="${project.image}" class="d-block w-100" alt="${project.title}" >
            <div class="carousel-caption d-none d-md-block">
                <h5>${project.title}</h5>
                <p>${project.description}</p>
            </div>
            <button id="prevButton" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button id="nextButton" class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        `;
        carouselInner.appendChild(carouselItem);
    });
}  




// Funcion para rellenar la lista de proyectos
function populateProjectList() {
    const projectList = document.getElementById('projectList');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-12 col-lg-4 mb-4';
        projectCard.innerHTML = `<div class="card project-card h-100">
                <img src="${project.image}" class="card-img-top" alt="${project.title}" style="width: 300px; height: 240px">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div> `;
        projectList.appendChild(projectCard);
    });
}

// Funcion para manejar el envio
function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Guarda el formulario en localStorage
    const formData = { name, email, message };
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Limpia el formulario
    event.target.reset();

    // Mensaje exitoso
    alert('Gracias por su mensaje! Le responderé tan pronto pueda.');
}

// FUncion para cambiar el fondo del scrooll
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    populateCarousel();
    populateProjectList();
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmission);
    window.addEventListener('scroll', handleScroll);
});

// Enlace del scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Boton Carrusel para Previo
document.getElementById('prevButton').addEventListener('click', function() {
    var myCarousel = document.getElementById('carousel-inner')
    var carousel = bootstrap.Carousel.getInstance(myCarousel)
    carousel.prev()
});

//Boton Carrusel para Proximo
document.getElementById('nextButton').addEventListener('click', function() {
    var myCarousel = document.getElementById('carousel-inner')
    var carousel = bootstrap.Carousel.getInstance(myCarousel)
    carousel.next()
});

