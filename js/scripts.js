document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const intro = document.getElementById("intro");
    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("nav_toggle");

    let introH = intro.offsetHeight;
    let scrollOffset = window.scrollY;

    // Проверяем положение страницы сразу после загрузки
    checkScroll(scrollOffset);

    // Отслеживаем изменение размера окна
    window.addEventListener("resize", () => {
        introH = intro.offsetHeight;
    });

    // Отслеживаем прокрутку страницы
    window.addEventListener("scroll", () => {
        scrollOffset = window.scrollY;
        checkScroll(scrollOffset);
    });

    // Функция закрепления шапки
    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }

    // Плавная прокрутка
    document.querySelectorAll("[data-scroll]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const blockId = link.dataset.scroll;
            const block = document.querySelector(blockId);

            if (block) {
                nav.querySelectorAll("a").forEach((item) => {
                    item.classList.remove("active");
                });

                link.classList.add("active");

                window.scrollTo({
                    top: block.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Открытие и закрытие меню
    navToggle.addEventListener("click", (event) => {
        event.preventDefault();

        navToggle.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // Аккордеон
    document.querySelectorAll("[data-collapse]").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const parent = button.closest(".accordion__item");

            if (parent) {
                parent.classList.toggle("active");
            }
        });
    });

    // Slick Slider
    if (typeof $ !== "undefined" && $.fn.slick) {
        $("[data-slider]").slick({
            infinite: true,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
});
