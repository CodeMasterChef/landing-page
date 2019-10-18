
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
        home: {
            en: 'Home',
            vi: 'Trang chủ'
        },
        about_us :{
            en: 'About Us',
            vi: 'Về chúng tôi'
        },
        products : {
            en: 'Products',
            vi: 'Sản phẩm'
        },
        careers : {
            en :'Careers',
            vi: 'Nghề nghiệp'
        },
        contact : {
            en: 'Contact',
            vi: 'Liên hệ'
        },
        'our_expertise': {
            en: 'Our Expertise',
            vi: 'Chuyên môn của chúng tôi',
        },
        technology_solutions: {
            en: 'Technology Solutions',
            vi: 'Giải pháp Công Nghệ',
        },
        technology_solutions_description: {
            en: 'With a strong technology knowledge, we build technology platforms for businesses and work together to build products with startups. This helps businesses and startups focus more on their business model.',
            vi: 'Với nên tảng công nghệ, chúng tôi hướng tới xây dựng nền tảng công nghệ cho các doanh nghiệp và đồng hành xây dựng sản phẩm cùng các Startup. Từ đó giúp cho các doanh nghiêp và các startup tập trung hơn vào mô hình kinh doanh của mình.',
        },
        business_solution: {
            en: 'Business Solution',
            vi: 'Giải pháp Kinh Doanh',
        },
        business_solution_description: {
            en: 'We provide business solutions and operational resources. FIOP want to build a business workforce so that businesses and startups can focus on operating their business plan in the simplest way.',
            vi: 'Chúng tôi cung cấp giải pháp kinh doanh và nguồn lực vận hành. FIOP hướng tới xây dựng đội ngũ nhân lực kinh doanh để các Doanh nghiệp và Startup có thể tập trung vận hành kế hoạch kinh doanh của mình một cách đơn giản nhất.'
        },
        investment_solutions: {
            en: 'Investment Solutions',
            vi: 'Giải pháp Đầu Tư',
        },
        investment_solutions_description: {
            en: 'With an investment experience, we look forward to consulting and connecting to help businesses and startups. From there, approach to and promote investment more effectively.',
            vi: 'Với kinh nghiệp đầu tư, chúng tôi mong muốn tư vấn và kết nối nhằm trợ giúp các doanh nghiệp và Startup. Từ đó tiến tới tiếp cận và xúc tiến đầu tư hiệu quả hơn.'



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