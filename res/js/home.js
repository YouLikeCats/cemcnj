if (typeof window !== "undefined") {
    let slideIndex = 1;
    showSlide(slideIndex);

    function moveSlide(step) {
        showSlide(slideIndex += step);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        let i;
        const slides = document.getElementsByClassName('slide');
        const dots = document.getElementsByClassName('dot');

        if(n > slides.length) slideIndex = 1;
        if(n < 1) slideIndex = slides.length;

        for(i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }

        for(i = 0; i < dots.length; i++) {
            dots[i].classList.remove('bg-yellow-500');
            dots[i].classList.add('bg-green-500');
        }

        slides[slideIndex - 1].classList.remove('hidden');

        dots[slideIndex - 1].classList.remove('bg-green-600');
        dots[slideIndex - 1].classList.add('bg-yellow-500');
    }
}
