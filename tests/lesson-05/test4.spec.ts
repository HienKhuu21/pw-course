import { test, expect } from '@playwright/test';

test('Add Todo Item', async ({ page }) => {
    let vnexpressNews = [
        { "title": "Loài cá đắt nhất thế giới bị đe dọa bởi biến đổi khí hậu", "content": "Cá ngừ vây xanh bắt đầu thay đổi lộ trình di cư cũng như nơi đẻ trứng và chăm con do nhiệt độ nước biển không ngừng tăng lên." },
        { "title": "Tỷ phú được đề cử lãnh đạo NASA là người thế nào?", "content": "Jared Isaacman, 41 tuổi, đang sở hữu khối tài sản ước tính 1,8 tỷ USD, được Donald Trump đề cử làm giám đốc NASA.Tổng thống Donald Trump đã đề cử Jared Isaacman làm giám đốc Cơ quan Hàng không Vũ trụ Mỹ (NASA) hôm 4/12. Đây là động thái liên quan đến không gian đầu tiên của Trump trong nhiệm kỳ thứ hai." },
        { "title": "Những sự kiện khoa học vũ trụ đáng chú ý năm 2024", "content": "Tàu vũ trụ tự động SLIM của Cơ quan Thám hiểm Hàng không vũ trụ Nhật Bản (JAXA) đáp xuống bề mặt Mặt Trăng ngày 19/1, biến Nhật Bản thành nước thứ 5 đưa tàu hạ cánh nhẹ nhàng trên vệ tinh tự nhiên của Trái Đất, sau Liên Xô, Mỹ, Trung Quốc, Ấn Độ." },
        { "title": "Thằn lằn có thể mọc lại đuôi bao nhiêu lần?", "content": "Thằn lằn có nhiều điều khiến những động vật khác phải ghen tị. Một số loài có thể leo tường, số khác cực giỏi ẩn mình, nhưng có lẽ thú vị nhất là khả năng rụng và mọc lại đuôi khi gặp nguy hiểm." },
        { "title": "Sinh viên làm máy tách vỏ hạt sen", "content": "Hai nam sinh trường Đại học Cửu Long chế tạo máy tách vỏ hạt sen năng suất hơn 24 kg mỗi giờ, độ sạch đạt 82%. Sản phẩm của Dương Chí Bảo và Phạm Hoài Bảo, sinh viên năm 4 khoa Kỹ thuật công nghệ, chế tạo với mục tiêu giúp tăng năng suất chế biến, giảm công lao động so với phương pháp tách vỏ hạt sen thủ công." },
        { "title": "Hệ sinh thái khởi nghiệp sáng tạo Việt đang phát triển thế nào?", "content": "Tại diễn đàn \"Chung tay phát triển hệ sinh thái khởi nghiệp sáng tạo Việt Nam\" trong khuôn khổ Ngày hội Khởi nghiệp đổi mới sáng tạo quốc gia (Techfest), tổ chức tại Hải Phòng hôm 27/11 đại diện các Bộ ngành, chia sẻ nhiều chính sách, chương trình thúc đẩy phát triển hệ sinh thái khởi nghiệp." },
        { "title": "Bộ Khoa học và Công nghệ sẽ hoàn thiện chính sách hỗ trợ khởi nghiệp sáng tạo", "content": "Thứ trưởng Hoàng Minh cho biết Bộ Khoa học và Công nghệ sẽ cùng với các bộ, ngành hoàn thiện chính sách hỗ trợ tạo thuận lợi nhất cho hoạt động của doanh nghiệp khởi nghiệp sáng tạo." },
        { "title": "Phẫu thuật robot có thể thay đổi thế hệ bác sĩ tương lai", "content": "Một lần, khi bước vào phòng phẫu thuật, sinh viên y khoa Alyssa Murillo tại Đại học California, San Francisco, đối mặt với thứ mà đa số mọi người không nghĩ sẽ bắt gặp: Robot phẫu thuật khổng lồ. Murillo không đến để quan sát một ca phẫu thuật bình thường. Thay vào đó, cô có thể quan sát kỹ bên trong cơ thể bệnh nhân thông qua màn hình video của robot." },
        { "title": "Ý tưởng trị bệnh đục thủy tinh thể thắng giải Sáng tạo tế bào gốc", "content": "Ba nữ sinh lớp 11 với ý tưởng dùng tế bào gốc phục hồi mắt bị đục thủy tinh thể giành giải nhất cuộc thi Sáng tạo tế bào gốc, với phần thưởng 30 triệu đồng. Sáng 15/12, Viện tế bào gốc (trường Đại học Khoa học Tự nhiên, Đại học Quốc gia TP HCM) phối hợp các đối tác tổ chức chung kết cuộc thi Sáng tạo tế bào gốc lần 9 dành cho học sinh, sinh viên." },
        { "title": "Tàu khu trục Zumwalt mang tên lửa siêu thanh mạnh thế nào?", "content": "Tàu khu trục tàng hình USS Zumwalt của Hải quân Mỹ đang được nâng cấp với hệ thống vũ khí siêu thanh thử nghiệm mang tên Conventional Prompt Strike." }
    ];
    await page.goto('https://material.playwrightvn.com/');

    await page.locator('//a[contains(text(),"Bài học 4: Personal notes")]').click();

    for (let i in vnexpressNews) {
        await page.locator('//input[@id="note-title"]').fill(vnexpressNews[i].title);
        await page.locator('//textarea[@id="note-content"]').fill(vnexpressNews[i].content);
        await page.locator('//button[text()="Add Note"]').click();
        await page.locator('//ul[@id="notes-list"]//strong[text()="' + vnexpressNews[i].title + '"]').isVisible();
    }

    let searchVal = vnexpressNews[1].title;

    await page.locator('//input[@id="search"]').fill(searchVal);
    expect(await page.locator('//ul[@id="notes-list"]//strong[text()="' + searchVal + '"]').count()).toBeGreaterThan(0);
});