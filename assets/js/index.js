
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
            en: 'Business Solutions',
            vi: 'Giải pháp Kinh Doanh',
        },
        business_solution_description: {
            en: 'We provide business solutions and operational resources. FIOP wants to build a business workforce so that businesses and startups can focus on operating their business plan in the simplest way.',
            vi: 'Chúng tôi cung cấp giải pháp kinh doanh và nguồn lực vận hành. FIOP hướng tới xây dựng đội ngũ nhân lực kinh doanh để các Doanh nghiệp và Startup có thể tập trung vận hành kế hoạch kinh doanh của mình một cách đơn giản nhất.'
        },
        investment_solutions: {
            en: 'Investment Solutions',
            vi: 'Giải pháp Đầu Tư',
        },
        investment_solutions_description: {
            en: 'With an investment experience, we look forward to consulting and connecting to help businesses and startups. From there, approach to and promote investment more effectively.',
            vi: 'Với kinh nghiệp đầu tư, chúng tôi mong muốn tư vấn và kết nối nhằm trợ giúp các doanh nghiệp và Startup. Từ đó tiến tới tiếp cận và xúc tiến đầu tư hiệu quả hơn.'
        },
        services: {
            en :'services',
            vi: 'Dịch vụ phát triển',
        },
        view_more: {
            en: 'View More',
            vi: 'Xem thêm'
        },
        partners: {
            en: "Partners",
            vi: "Đối tác",
        },
        gsoft_description: {
            en: 'G-Soft Software Solution Company',
            vi: 'Công ty giải pháp phần mềm G-Soft'
        },
        gsoft_long_description: {
            en: 'Software solution company for business and life.',
            vi: 'Đơn vị giải pháp phần mềm cho doanh nghiệp và đời sống.',
        },
        smartsys_description: {
            en: 'SmartSys Software Solution Company',
            vi: 'Công ty giải pháp công nghệ SmartSys'
        },
        smartsys_long_description: {
            en: 'The company specializes in providing solutions and bringing technology to life.',
            vi: 'Đơn vị chuyên cung cấp giải pháp và đưa công nghệ vào đời sống.',
        },
        fihe_description: {
            en: 'Statup about financial investment',
            vi: 'Statup về đầu tư tài chính'
        },
       fihe_long_description: {
            en: 'Startup provides solutions for bank loans quickly and conveniently.',
            vi: ' Đơn vị cung cấp giải pháp vay vốn ngân hàng nhanh chóng và tiện lợi.',
        },
        fiop_company_name: {
            en: 'FIOP JOINT STOCK COMPANY',
            vi: ' CÔNG TY CỔ PHẨN GIẢI PHÁP CÔNG NGHỆ FIOP',
        },
        fiop_business_license: {
            en: 'Business license No. 0315457199 issued on January 3, 2019',
            vi: 'Giấy CNDKDN Số 0315457199 do Sở KH và ĐT cấp ngày 03/01/2019'
        },
        head_office_address: {
            en: ' F18 Simcity Premier Homes, Street 4, Truong Thanh ward, District 9, Ho Chi Minh city',
            vi: ' F18 Simcity Premier Homes, đường Số 4, phường Trường Thạnh, Quận 9, TP. Hồ Chí Minh'
        },
        branch_address: {
            en: '21A1, Tang Nhon Phu Street, Tang Nhon Phu A Ward, District 9, Ho Chi Minh City',
            vi: '21A1, đường Tăng Nhơn Phú, phường Tăng Nhơn Phú A, Quận 9, TP. Hồ Chí Minh'
        },
        contact_us: {
            en: 'Contact Us',
            vi: 'Liên hệ với chúng tôi'
        },
        send_message: {
            en: 'Send Message',
            vi: 'Gửi tin nhắn',
        },
        enable_entrepreneurs_to_build_anything: {
            en: 'Enable Entrepreneurs to Build Anything',
            vi: 'Hỗ trợ doanh nghiệp của bạn xây dựng sản phẩm'
        },
        huge_opportunities: {
            en: 'Huge opportunities are being missed because people with great ideas lack the technical ability to execute. FIOP ’s mission is to enable entrepreneurs to build anything. We combine our talent, technology and partnership model to create next-generation technology.',
            vi: 'Hàng triệu cơ hội để biến những ý tưởng lớn của bạn trở thành hiện thực đang bị bạn bỏ lỡ chỉ vì bạn không có khả năng triển khai giải pháp công nghệ. Hiểu được điều đó, FIOP được sinh ra với sứ mệnh hiện thực hóa ý tưởng của bạn. FIOP chú trọng vào xây dựng con người, áp dụng công nghệ tiên tiến và hệ sinh thái công nghệ sẵn có để kiến tạo thế hệ công nghệ tiếp theo.'
        },
        we_are_in_the_disruptive_technology_business: {
            en: 'We are in the disruptive technology business',
            vi: 'Chúng ta đang trong thời kỳ bùng nổ của doanh nghiệp công nghiệp'
        },
        building_the_technology_startup: {
            en: 'Building the technology startup & applying the technology to improve the current business',
            vi: 'Xây dựng các startup công nghệ và áp dụng công nghệ để tạo nên sự đột phá cho doanh nghiệp hiện hữu',
        },
        fiop_partners_with_founders: {
            en: 'FIOP partners with founders, business leaders, and enterprises to develop groundbreaking solutions that disrupt industries and improve lives.',
            vi: 'Những thành viên của FIOP bao gồm các nhà sáng lập, các nhà lãnh đạo và các công ty liên doanh cùng nhau phát triển các giải pháp nằm đột phá thị trường và cải thiện cuộc sống hiện tại. Từ các công ty khởi nghiệp một thành viên đến các doanh nghiệp lớn, các tổ chức giáo dục, tổ chức về y tế, chính phủ, tài chính và tổ chức phi lợi nhuận, chúng tôi tạo ra các sản phẩm để hỗ trợ khách hàng. Các sản phẩm của chúng tôi hỗ trợ khách hàng giải quyết các vấn đề vận hành doanh nghiệp để giúp họ tập trung vào việc mà họ thích.'
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