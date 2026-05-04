



        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                const preloader = document.getElementById('preloader');
                document.body.classList.remove('loading');
                preloader.style.display = 'none';
            }, 10000); // 10 secondes
        });