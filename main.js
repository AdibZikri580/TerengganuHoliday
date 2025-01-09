document.addEventListener("DOMContentLoaded",() => {

    const form = document.getElementById('contactForm');
    const slides = document.getElementsByClassName("slidefade");
    const dots = document.getElementsByClassName("dot");
    const galleryImages = document.querySelectorAll('.gallery-container img');
    const overlay = document.createElement('div');//Cipta element overlay
    overlay.classList.add('zoom-overlay');
    document.body.appendChild(overlay);//tambahkan ke dalam dokumen

    // Slideshow functionality
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("slidefade");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i <dots.length; i++){
            dots[i].className = dots[i].className.replace("active","")
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1){
            slideIndex = slides.length;
        }
        slides[slideIndex - 1].style.display = "block";

        dots[slideIndex -1].className += " active"

        setTimeout(showSlides, 5000); 

        function currentSlide(n){
            slideIndex = n - 1;
            showSlides();
        }

        function plusSlides(n){
            slideIndex += n;
            if (slideIndex > 3) {
                slideIndex = 1;
            }
            if (slideIndex < 1) {
                slideIndex = 3;
            }
            showSlides();
        }
    }
    showSlides();

    // Tambah event listener untuk setiap gambar
    galleryImages.forEach((img) => {
        img.addEventListener('click', (event) => {
            event.stopPropagation();
            // Jika gambar sudah dizoom, buang zoom
            if (img.classList.contains('zoomed')) {
                img.classList.remove('zoomed');
                overlay.classList.remove('active')//overlay hide
            } else {
                // Buang zoom dari gambar lain
                galleryImages.forEach((otherImg) => otherImg.classList.remove('zoomed'));
                // Tambahkan zoom ke gambar yang diklik
                img.classList.add('zoomed');
                overlay.classList.add('active')//Show overlay
            }
        });
    });

    // Tutup zoom apabila klik di luar gambar
    document.addEventListener('click', () => {
        galleryImages.forEach((img) => img.classList.remove('zoomed'));
        overlay.classList.remove('active');//hide overlay
    });

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from submitting normally
            alert('Thank you for your message!');
            this.reset(); // Reset the form fields
        });

        // Close form if click outside the form area
        document.addEventListener('click', (event) => {
            if (!form.contains(event.target)) {
                form.style.display = 'none'; // Adjust this line based on how you want to handle the form closing
            }
        });
    }
    
})



