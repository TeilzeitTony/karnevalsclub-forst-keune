document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".alice-gallery img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    const close = document.getElementById("closeLightbox");
    const prev = document.getElementById("prevImage");
    const next = document.getElementById("nextImage");

    let current = 0;

    function openImage(index){

        current = index;

        lightboxImage.src = images[current].src;

        lightbox.style.display = "flex";

    }

    images.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            openImage(index);

        });

    });

    next.addEventListener("click",()=>{

        current++;

        if(current >= images.length){

            current = 0;

        }

        openImage(current);

    });

    prev.addEventListener("click",()=>{

        current--;

        if(current < 0){

            current = images.length-1;

        }

        openImage(current);

    });

    close.addEventListener("click",()=>{

        lightbox.style.display="none";

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });

});