function formatDateTime(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    return formattedDate.replace(/,.*$/, '') + ", " + formattedTime;
}
function updateTime() {
    const now = new Date();
    const formattedDateTime = formatDateTime(now);
    //  document.querySelector('.current_time').textContent = `The current date and time is: ${formattedDateTime}`;
}
updateTime();

$(document).ready(function(){

    $('[data-fancybox="detail"]').fancybox({
        /*thumbs: {
            autoStart: true
        },*/
        loop: true,
        buttons: [
            'download',
            "close",
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "thumbs",
        ],
        i18n: {
            en: {
                CLOSE: "Kapat",
                NEXT: "Sonraki",
                PREV: "Önceki",
                ERROR: "Fotoğraf yüklenemedi. <br/> Lütfen daha sonra tekrar deneyin.",
                PLAY_START: "Slayt'ı başlat",
                PLAY_STOP: "Slayt'ı durdur",
                FULL_SCREEN: "Tam ekran",
                THUMBS: "Küçük resimler",
                DOWNLOAD: "İndir",
                SHARE: "Paylaş",
                ZOOM: "Yakınlaştır"
            }
        },
    });
    
    $('.dropdown1 > a').click(function(e){
        if ($(window).width() <= 993) {
            e.preventDefault();
            $(this).next('ul').slideToggle(300);
        }
    });

    $('.menu_trigger').click(function(){
        $('.hm_inner > ul').slideToggle(300);
    })

    $('.src_trigger').click(function() {
        $(this).toggleClass('active');
        $('.src_overlay').toggleClass('active');
        $('.src_overlay input').focus();
    });    

    $('.src_overlay button').click(function() {
        $('.src_overlay').removeClass('active');
    });    


});

document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});

document.querySelectorAll('.event_item > div span').forEach(span => {
    const dateText = span.textContent.trim();
    const dayMatch = dateText.match(/\b\d{1,2}\b/);

    if (dayMatch) {
        const day = dayMatch[0];
        const dateBox = span.closest('.event_item').querySelector('.date_box');
        if (dateBox) {
            dateBox.textContent = day;
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var h3Element = document.querySelector(".ei_top h3 strong");

    if (h3Element) {
        var today = new Date();
        var dayNumber = today.getDate();

        var formattedDayNumber = dayNumber < 10 ? "0" + dayNumber : dayNumber;

        var dayName = today.toLocaleDateString('en-US', { weekday: 'long' });

        h3Element.textContent = formattedDayNumber;

        var textNode = document.createTextNode(" " + dayName);
        h3Element.parentNode.insertBefore(textNode, h3Element.nextSibling);
    }
});

var ss_thumbs = new Swiper(".ss_thumbs .swiper-container", {
    slidesPerView: 5,
    spaceBetween: 25,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,   
    threshold: 10,
    breakpoints: {
        768: {
            slidesPerView: 5,
            spaceBetween: 25 
        },
        0: {
            slidesPerView: 3.5,
            spaceBetween: 15 
        },
    }
});

var ss_swiper = new Swiper(".ss_swiper", {
    allowTouchMove: true,
    touchRatio: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs: {
        swiper: mainSwiper,
    },
});

var mainSwiper = new Swiper('.mainSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '#mainPagination',
        clickable:true
    },
    loop:false,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.wf_next',
        prevEl: '.wf_prev',
    }
});

var eventSwiper = new Swiper('.eventSwiper', {
    /*autoplay: {
        delay: 5000,
    },*/
    navigation: {
        nextEl: '.es_next',
        prevEl: '.es_prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3.7,
            spaceBetween: 20 
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20 
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20 
        },
        450: {
            slidesPerView: 1.8,
            spaceBetween: 15 
        },
        0: {
            slidesPerView: 1.3,
            spaceBetween: 15 
        },
    }
});