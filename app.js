const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('slide');
        } else {
            entry.target.classList.remove('slide');
        }
    });
});

// ubah selector dan sesuaikan dengan class yang dipakai
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));