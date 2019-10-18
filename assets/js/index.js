
function openMenu() {
    let menu = $('header ul')
    menu.addClass('active')
    $('#open-menu').removeClass('active')
    $('#close-menu').addClass('active')

}

function closeMenu() {
    let menu = $('header ul')
    menu.removeClass('active')
    $('#open-menu').addClass('active')
    $('#close-menu').removeClass('active')
}

$(window).ready(() => {

    $('#open-menu').click(function (e) {
        openMenu()
    })

    $('#close-menu').click(function (e) {
        closeMenu()
    })
})

$('header ul li a').click(function (e) {
    e.preventDefault()

    let href = $(this).attr('href')

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 500)


    closeMenu()

})

var translator;
$(document).ready(function () {
    var dict = {
        Home: {
            vi: 'Trang chủ'
        },
        'About Us' :{
            vi: 'Về chúng tôi'
        },
        Products : {
            vi: 'Sản phẩm'
        },
        Careers : {
            vi: 'Nghề nghiệp'
        },
        Contact : {
            vi: 'Liên hệ'
        },
        'our_expertise': {
            en: 'Our Expertise',
            vi: 'Chuyên môn của chúng tôi',
        },
        technology_solutions: {
            en: 'Technology Solutions',
            vi: 'Giải pháp công nghệ',
        },
        technology_solutions_description: {
            en: 'With a strong technology knowledge, we build technology platforms for businesses and work together to build products with startups. This helps businesses and startups focus more on their business model.',
            vi: 'Với nên tảng công nghệ, chúng tôi hướng tới xây dựng nền tảng công nghệ cho các doanh nghiệp và đồng hành xây dựng sản phẩm cùng các Startup. Từ đó giúp cho các doanh nghiêp và các startup tập trung hơn vào mô hình kinh doanh của mình.',
        }


    }
    translator = $('body').translate({ lang: 'en', t: dict });

    $('#englishIcon').hide();

    $('#vietnameseIcon').click(()=>{
        translator.lang('vi');
        $('#englishIcon').show();
        $('#vietnameseIcon').hide();
    })
    $('#englishIcon').click(()=>{
        translator.lang('en');
        $('#vietnameseIcon').show();
        $('#englishIcon').hide();
    })
})