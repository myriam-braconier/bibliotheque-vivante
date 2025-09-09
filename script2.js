    const header = document.getElementById('stickyIntro');

        function handleScroll() {
            if (window.scrollY > 100) {
               header.classList.add('shrunk');
            } else {
                header.classList.remove('shrunk');
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();