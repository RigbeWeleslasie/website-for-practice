

        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        setInterval(nextSlide, 9000);


        document.querySelectorAll('nav a, .mobile-menu a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                mobileMenu.classList.remove('active');
            });
        });


        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
        });
    