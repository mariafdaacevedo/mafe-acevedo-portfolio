'use strict'
addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")
    /*---------- */
     /*Carga before onload */

     window.onload = function(){
        var contenedor = document.querySelector("#contenedor_carga");
        contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0';

     }
     /*Scroll menu */
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function(){
    navbar.classList.toggle('active', window.scrollY >0)
    })

    /* Modal con barras de progreso */
    const openModal= document.querySelector('#btn-languages');
    const modal = document.querySelector('.modal_lenguages');
    const closeModal =document.querySelector('#modal-close-btn');

    openModal.addEventListener('click', () =>{
            modal.classList.add('show_modal');
    });

    closeModal.addEventListener('click', () =>{
        modal.classList.remove('show_modal');
    });


    //Scroll moving todos los elementos 

        
        let title1 = document.querySelector('#element1');
        let title2 = document.querySelector("#element2");
    
        const cargarElementos = (entradas, observador) => {
            
        
            entradas.forEach((entrada) => {
                 if(entrada.isIntersecting){
                    entrada.target.classList.add('visible');
                } 
            });
        }
        
        const observador = new IntersectionObserver(cargarElementos, {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: 1.0
        });

        observador.observe(title1); 
        observador.observe(title2);
        


    /*Textos ocultos en el html con DOM */
        /*Portada */
    let h2_portada = document.querySelector("#h2_portada")
    h2_portada.innerHTML = "Software Developer"

    let h3_portada = document.querySelector("#h3_portada")
    h3_portada.innerHTML = "About me <span>>></span>"
        /*Presentacion */
    let h3_presentation = document.querySelector("#h3_presentation")
    h3_presentation.innerHTML = "About me!"

    let description_presentation = document.querySelector("#description_presentation")
    description_presentation.innerHTML = "I’m a full stack developer with 2 years of experience in designing and implementing web applications. A fast learner, adaptable to any project, and an autonomous team player committed to continuous improvement and teamwork.<br><br>I’ve worked on web application projects using publicly available APIs, as well as creating APIs with Java Spring Boot. On the frontend, I'm currently working with Angular and work with relational databases like Oracle and MySQL."
        //Proyectos
    let h3_proyectos = document.querySelector("#h3_proyectos")
    h3_proyectos.innerHTML = "My personal projects"

    let intro_proyectos = document.querySelector("#intro_proyectos")
    intro_proyectos.innerHTML = "These are some of my favorite and most recent projects."
            /* project 1*/
    let project1_t1 = document.querySelector("#project1_t1")
    project1_t1.innerHTML = "My portfolio"

    let project1_description= document.querySelector("#project1_description")
    project1_description.innerHTML = "This project was created with JavaScript, CSS-SASS-Bootstrap, HTML"

            /* project 2*/  

    let project2_t1 = document.querySelector("#project2_t1")
    project2_t1.innerHTML = "Cookpad Recipes"
        
    let project2_description= document.querySelector("#project2_description")
    project2_description.innerHTML = "Web application to search for recipes by ingredients and categories. <br> This project was created with JavaScript, CSS-SASS-Bootstrap, HTML, and the API: https://www.themealdb.com/api.php"

            /* project 3*/  

    let project3_t1 = document.querySelector("#project3_t1")
    project3_t1.innerHTML = "API SpringBoot"
                
    let project3_description= document.querySelector("#project3_description")
    project3_description.innerHTML = "API to register users' personal data. <br> This project was created with Spring Boot, Java, and MongoDB, and it was my final project to get certified as a software developer."
        //"Actualmente me encuentro terminando algunos proyectos que estarán disponibles aquí en breve."
        //Contacto

             /* project 4*/  

    let project4_t1 = document.querySelector("#project4_t1")
    project4_t1.innerHTML = "Student Management Application"
                
    let project4_description= document.querySelector("#project4_description")
    project4_description.innerHTML = "API to register users' personal data. <br> An application that registers basic student data and allows performing CRUD actions. This project was created with Spring Boot, Java 21, Hibernate and MySQL"

            /* project 5*/  
     let project5_t1 = document.querySelector("#project5_t1")
    project5_t1.innerHTML = "Book Management Application"
                
    let project5_description= document.querySelector("#project5_description")
    project5_description.innerHTML = "This application allows to manage the books available in the store, including their price and stock.The application was developed with Java 21, Spring Boot, and Swing was used for the graphical user interface."

    /* Contacto*/

    let h3_contacto = document.querySelector("#h3_contacto")
    h3_contacto.innerHTML = "Let's work together!"

    let contacto_intro = document.querySelector("#contacto_intro")
    contacto_intro.innerHTML = "You can send me a message or contact me through any of my social media. You can also find my personal information in my CV. Click <a href='https://drive.google.com/file/d/14HL0YEwn5cpimmLsfVwGhEO2SGAeo363/view?usp=sharing' target='_blank'>Download CV</a>."



    /*------------ */
});


