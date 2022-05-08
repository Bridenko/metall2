
function isWebp() {
	
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
isWebp();

function showMenuBurger() {
    const iconMenu = document.querySelector(".icon-menu");
    if (!iconMenu) return;
    const menuBody = document.querySelector('.header-wrapper');
    const bodyTag = document.querySelector('body');
    iconMenu.addEventListener("click", function () {
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        bodyTag.classList.toggle('lock');
    });
    const menuLinks = document.querySelectorAll('.header-submenu__item a');
    if (window.innerWidth <= 1250) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menuBody.classList.remove("_active");
                iconMenu.classList.remove("_active");
                bodyTag.classList.remove('lock');
            });
        }
    }
}
showMenuBurger();

// Anim scroll for menu links

function scrollAnim() {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header-content').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}

scrollAnim();

// slick slider

$(document).ready(function () {
    

    $('.intro-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        focusOnSelect: true,
        infinite: false
    });

    $('.about-slider__list').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1051,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.brend-slider__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        dots: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1570,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    
    $('.equipment-slider__main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        fade: true,
        asNavFor: '.equipment-slider__secondary-slider',
        infinite: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    fade: false
                }
            }
        ]
    });

    $('.equipment-slider__secondary-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.equipment-slider__main-slider',
        infinite: false
    });
});


window.addEventListener('DOMContentLoaded', () => {
    function tabs() {
        const tabButton = document.querySelectorAll('.equipment-tab__button');
        const tabParrent = document.querySelector('.equipment-tab__buttons');
        const tabContent = document.querySelectorAll('.equipment-tab__content');
    
        function hideTabContent() {
            tabContent.forEach(item => {
                // item.classList.add('hide');
                // item.classList.remove('show');
                item.style.display = 'none';
                
            });
            tabButton.forEach(item => {
                item.classList.remove('active');
                
            });
            
        }
    
        function showTabContent(i = 0) {
            tabContent[i].style.display = 'block';
            tabButton[i].classList.add('active');
        }
    
        hideTabContent();
        showTabContent();
    
        tabParrent.addEventListener('click', (event) => {
            
            if (event.target && event.target.classList.contains('equipment-tab__button')) {
                console.log('click');
                tabButton.forEach((item, i) => {
                    if (event.target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
        
    }
    
    tabs();

    function showForm() {
        const modal = document.querySelector('.modal');
        const openModal = document.querySelector('#open-modal');
        const closeModal = document.querySelector('#close-modal');
        const modalWrapper = document.querySelector('.modal-wrapper');

        openModal.addEventListener('click', function () {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
        closeModal.addEventListener('click', function () {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            document.body.style.overflow = '';
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
    showForm();
});


function showLines() {
    const gridBtn = document.querySelector('.subcatalog-head__grid-btn');
    const linesBtn = document.querySelector('.subcatalog-head__lines-btn');
    const toolCard = document.querySelectorAll('.subcatalog-card');
    const cardText = document.querySelectorAll('.subcatalog-card__text');
    const cardsList = document.querySelectorAll('.subcatalog-cards');
    
    linesBtn.addEventListener('click', function () {
        linesBtn.classList.add('active');
        gridBtn.classList.remove('active');
        [...cardsList].forEach(cards => {
            cards.classList.add('lines');
        });
        [...cardText].forEach(text => {
            text.classList.add('show');
        });
        [...toolCard].forEach(card => {
            card.classList.add('flex');
        });
    });
    gridBtn.addEventListener('click', function () {
        gridBtn.classList.add('active');
        linesBtn.classList.remove('active');
        [...cardsList].forEach(cards => {
            cards.classList.remove('lines');
        });
        [...cardText].forEach(text => {
            text.classList.remove('show');
        });
        [...toolCard].forEach(card => {
            card.classList.remove('flex');
        });
    });
}

showLines();