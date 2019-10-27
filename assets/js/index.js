
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
        },
        view_our_products: {
            en: 'See Our Products',
            vi: 'Xem sản phẩm của chúng tôi'
        },
        venture_development_as_a_service: {
            en: 'Venture Development as a Service',
            vi: 'Venture Development as a Service',
        },
        providing_strategic_technical_experience_resources: {
            en: 'Providing strategic, technical experience and resources',
            vi: 'Cung cấp chiến lược, kỹ thuật, kinh nghiệm và nhân sự',
        },
        as_partner_of_startups_we_bring_together_teams_to_define: {
            en: 'As partner of startups, we bring together teams to define problems and design solutions for impact. Beyond design and development, we provide strategic innovation, system building, operating resources services to turn your ideas into sustainable, revenue-generating products.',
            vi: 'Là đối tác của các công ty khởi nghiệp, chúng tôi thành lập các nhóm để phân tích vấn đề và thiết kế các giải pháp để giải quyết vấn đề đó. Ngoài việc thiết kế và phát triển, chúng tôi tư vấn chiến lược, xây dựng hệ thống, vận dụng các nguồn lực sẵn có để biến ý tưởng của bạn thành các sản phẩm thương mại.',
        },
        our_partnership_approach: {
            en: 'Our Partnership approach',
            vi: 'Phương pháp hợp tác của chúng tôi',
        },
        forward_thinking_brands_understand_that_greatness_in_a_disruptive_market:{
            en: 'Forward-thinking brands understand that greatness in a disruptive market requires ambition, talent, and a culture that believes . We’re smarter together. We bring a depth of expertise in a variety of industries including Financial Services, Healthcare, Real Estate, ERP, Retail,  Ecommerce, Saleforce, Logistics, Virtual Reality, and Education.',
            vi: 'Các doanh nghiệp luôn biết rằng để tạo nên sự đột phá thị trường thì phải cần đến khát vọng, tài năng và một nền văn hóa tin tưởng. Chúng ta sẽ cùng nhau phát triển. Chúng tôi mang đến những kiến thức chuyên môn sâu rộng trong nhiều ngành công nghiệp bao gồm Dịch vụ tài chính, Chăm sóc sức khỏe, Bất động sản, ERP, Bán lẻ, Thương mại điện tử, Bán hàng, Vận tải, Thực tế ảo và Giáo dục.'
        },
        let_build_something_great_together:{
            en: 'Let’s Build Something Great Together',
            vi: 'Hãy cùng nhau xây dựng một cái gì đó tuyệt vời',
        },
        engagement_model: {
            en: 'Engagement Model',
            vi: 'Mô hình tham gia',
        },
        idea_incubator: {
            en: 'Idea Incubator',
            vi: 'Lò ấp ý tưởng',
        },
        need_to_confirm_whether_your_idea: {
            en: 'Need to confirm whether your idea is worth investing time and resources in? We’ll work with you conceptualize, prototype, and package your idea into a comprehensive plan to test the market or raise capital.',
            vi: 'Bạn cần đánh giá ý tưởng của bạn có khả thi hay không? Chúng tôi sẽ cũng bạn định hình, tạo bản mẫu và đóng gói ý tưởng của bạn thành một kế hoạch thực thụ để kiểm thử thị trường và gọi vốn.'
        },
        you_have_proven_your_business_model_and_have_solid_traction:{
            en: 'You have proven your business model and have solid traction. Now you need a digital partner to evolve your product and scale fast. We’ll help you grow your business with on-demand design, engineering, strategy, marketing and resources.',
            vi: 'Bạn đã chứng minh được mô hình kinh doanh của mình là khải thi và đang tìm một đơn vị công nghệ để tạo cách mạng hóa sản phẩm hiện tại. Chúng tôi sẽ giúp bạn phát triển doanh nghiệp của bạn bằng việc thiết kết, kĩ thuật hóa, lập chiến lược kinh doanh, marketing và cung cấp nguồn lực.'
        },
        enterprise: {
            en: 'Enterprise',
            vi: 'Doanh nghiệp',
        },
        your_company_is_experiencing_an_innovation_gap_but_recognizes_the_need: {
            en: 'Your company is experiencing an innovation gap, but recognizes the need to adapt and stay agile. We collaborate with organizations to form internal start-up teams to conceptualize and build new ventures.',
            vi: 'Doanh nghiệp hiện tại của bạn đã ổn định nhưng bạn nhận thấy rằng cần phải thích nghi với sử đổi mối nhanh chóng của thị trường. Chúng tôi hợp tác với các tổ chức để thành lập các nhóm khởi nghiệp nội bộ để lên ý tưởng và xây dựng các dự án mới cho doanh nghiệp.',
        },
        leadership: {
            en: 'Leadership',
            vi: 'Lãnh đạo',
        },
        our_leadership_team_is_comprised_of_entrepreneurs: {
            en: 'Our leadership team is comprised of entrepreneurs and business builders with experience making business model and technology product',
            vi: 'Đội ngũ lãnh đạo của chúng tôi bao gồm các doanh nhân và nhà xây dựng doanh nghiệp với kinh nghiệm chuyên sâu về mô hình kinh doanh và sản phẩm công nghệ.',
        },
        we_build_startups_and_technology_products: {
            en: 'We build startups & technology products',
            vi: 'Chúng tôi xây dựng các startup & các sản phẩm công nghệ'
        },
        we_create_value_by: {
            en: 'We create value by',
            vi: 'Chúng tôi tạo ra giá trị bởi'
        },
        building_scalable_platforms_from_initial_mvp_stage_to_exit: {
            en: 'Building scalable platforms from initial MVP stage to exit',
            vi: 'Xây dựng nền tảng có khả năng mở rộng từ giai đoạn khởi tạo, MVP đến exit',
        },
        transforming_legacy_systems_into_modern_digital_platforms: {
            en: 'Transforming legacy systems into modern digital platforms',
            vi: 'Chuyển đổi các hệ thống hiện tại sang các hệ thống số hóa',
        },
        scaling_startups_with_on_demand_engineering: {
            en: 'Scaling startups with on-demand engineering',
            vi: 'Mở rộng các starup với hoạt động phát triển kỹ thuật công nghệ',
        },
        building_the_software_system_for_enterprises:{
            en: 'Building the software system for enterprises',
            vi: 'Xây dựng các sản phẩm phần mềm cho doanh nghiệp',
        },
        powering_the_future_of_business: {
            en: 'Powering the future of business',
            vi: 'Mang lại sức mạnh tương lai cho doanh nghiệp'
        },
        has_partnered_with_startups_government_and_companies :{
            en: 'Has partnered with startups, government and companies to build ground breaking solutions that disrupt industries and improve lives. We collaborate closely to create products that define the future of their businesses.',
            vi: 'Chúng tôi đã hợp tác với các công ty khởi nghiệp, chính phủ và các công ty để xây dựng các giải pháp đột phá. Điều đó tạo nên sự đột phá các ngành công nghiệp hiện tại và tạo nên giá trị cho xã hội. Chúng tôi hợp tác chặt chẽ để tạo ra các sản phẩm định hình tương lai doanh nghiệp.'
        },
        featured_products: {
            en: 'Featured Products',
            vi: 'Sản phẩm tiêu biểu',
        },
        a_rating_feedback_platform_to_capture_the_customer_feedback_during_providing_the_services: {
            en: 'A rating & feedback platform to capture the customer feedback during  providing the services.',
            vi: 'Nền tảng đánh giá và thu thập phản hồi của khách hàng về sản phẩm và dịch vụ.',
        },
        it_is_an_information_portal_of_state_agencies_it_also_helps_the_state_agencies_handle_some_administrative_procedures_and_get_feedback_from_citizen:{
            en: 'It is an information portal of state agencies, It also helps the state agencies handle some administrative procedures and get feedback from citizen.',
            vi: 'Hệ thống cổng thông tin của các cơ quan nhà nước dành cho người dân. Ngoài ra, hệ thống cung cấp giải pháp kĩ thuật cho các cơ quan nhà nước xử lý thủ tục hành chính và nhận phản hồi từ người dân.'
        },
        a_system_to_help_enterprises_manage_their_sales_force: {
            en: 'A system to help enterprises manage their sales force.',
            vi: 'Một hệ thống giúp doanh nghiệp quản lý lực lượng bán hàng.'
        },
        it_is_a_system_to_help_state_agencies_report:{
            en: 'It is a system to help state agencies report, statistics, and from that makes plan for next period.',
            vi: 'Hệ thống giúp các cơ quan nhà nước báo cáo, thống kê và từ đó lập kế hoạch cho từng giai đoạn trong tương lai.'
        },
        it_is_a_system_to_help_selling_goods_or_services_to_customers_through_kiosk: {
            en: 'It is a system to help selling goods or services to customers through Kiosk.',
            vi: 'Đây là một hệ thống giúp bán hàng hóa và dịch vụ  thông qua Kiosk.',
        },
        fihe_is_a_fintech_startup_aimed_at_connecting_users_banks_and_properties:{
            en: 'FIHE is a fintech startup, aimed at connecting users, banks, and properties.',
            vi: 'FIHE là một công ty starup trong lĩnh vực fintech, nhằm mục đích kết nối người dùng, ngân hàng và tài sản.',
        }
       
        



    }
    translator = $('body').translate({ lang: 'en', t: dict });

    $('#englishIcon').hide();

    $('#vietnameseIcon').click((event)=>{
        event.preventDefault()
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