function downscroll(){
    window.scrollTo(0,977)
}

function downscroll2(){
    window.scrollTo(0,1954)
}

document.addEventListener('DOMContentLoaded', function () {
    var hiddenText = document.getElementById('SECRET');
    var toggleButton = document.getElementById('infobtn3');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        var pixelThreshold = 2900;

        if (scrollPosition >= pixelThreshold) {
            hiddenText.style.opacity = 1;
        } else {
            hiddenText.style.opacity = 0;
        }

        toggleButton.addEventListener('click', function () {
            hiddenText.style.opacity = 0;
    });
    });
});

function downscroll3(){
    window.scrollTo(0,3908)
    document.getElementById("popup").style.display = "block";
}



function closePopup() {
    document.getElementById("popup").style.display = "none";
    window.scrollTo(0,1954)
}

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name.trim() === "" || email.trim() === "") {
        alert("Ошибка: Введите корректные данные во все поля");
        return;
    }

    alert("Форма успешно заполнена!");

    setTimeout(function() {
        window.location.href = "news.html";
    }, 1000);

    alert("Данные успешно отправлены!");

    closePopup();
    location.reload();
    window.scrollTo(0,0);
}