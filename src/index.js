import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import './styles/style.scss'

import './assets/icons/menu.svg';
import './assets/icons/chevron_down.svg';
import './assets/icons/close.svg';

import './assets/icons/search.svg';
import './assets/icons/cart.svg';
import './assets/icons/account.svg';

import './assets/icons/arrow_left.svg';
import './assets/icons/arrow_right.svg';

import './assets/icons/social_media/twitter.svg';
import './assets/icons/social_media/facebook.svg';
import './assets/icons/social_media/instagram.svg';
import './assets/icons/social_media/github.svg';


const productSwiper = new Swiper('.products__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: false,
    grabCursor: true,
    centerInsufficientSlides: true,

    breakpoints: {
        1280: {
            spaceBetween: 20,
        },
    }

});

const reviewSwiper = new Swiper('.reviews__slider', {
    modules: [Navigation, Autoplay],
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    autoHeight: true,
    grabCursor: true,
    navigation: {
        nextEl: '.reviews__slider-btn.next',
        prevEl: '.reviews__slider-btn.prev'
    },
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1280: {
            spaceBetween: 20,
        },
    }

});

function updateBorders() {
    const items = document.querySelectorAll('.hero__stat');
    const firstRowTop = items[0].offsetTop;

    items.forEach(item => {
        item.style.borderLeft = '1px solid #0000001A';
    });
    items[0].style.borderLeft = 'none';

    items.forEach(item => {
        if (item.offsetTop > firstRowTop) {
            item.style.borderLeft = 'none';
        }
    });
}

window.addEventListener('load', updateBorders);
window.addEventListener('resize', updateBorders);

const announcementCloseBtn = document.querySelector('.announcement__close');
const announcementSection = document.querySelector('.announcement');

if (announcementCloseBtn && announcementSection) {
    announcementCloseBtn.addEventListener('click', () => {
        announcementSection.style.display = 'none';
    });
}