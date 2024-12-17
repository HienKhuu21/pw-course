# DOM

## DOM = Document Object Model
    EX: 
        document
            html
                head
                    title
                body
                    h1
                    table

## Element
    Có 2 loại:
        Có thẻ mở / đóng
            ex: <table> 
                    <th> </th>
                    <tbody> 
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
        Tự đóng
            <img />
            <br>
    
    cấu trúc element:
        <span> </span> - thẻ mở / thẻ đóng
        <span> This is a test </span> - giữa thẻ mở/đóng là text của thẻ
        <span id="spanID" class="abcxyz"> </span> - trong thẻ mở có các thuộc tính+giá trị thuộc tính
            ex: thuộc tính "id" có giá trị = "spanID"

![Các Tags trong HTML](https://drive.google.com/file/d/1pgU5Xw6ZDLFtC4myJ6CCw6Rkdxh_t4_j/view?usp=sharing)
            
# Selector
    . Là cách chọn phần tử trên trang
    . Có nhiều kiểu:
        ○ XPath selector
        ○ CSS selector
        ○ Playwright selector
    . Bắt xpath trên browser
        - / bắt theo tuyệt đối: ít xài vì khi web đổi structure phải edit nhiều
        - // bắt tương đối: xài nhiều vì khi web đổi structure thì edit nhiều ít hoặc ko cần edit

# Playwright basic syntax

## Test: Đơn vị cơ bản để khai báo một test

    import { test } from '@playwright/test'; // khai báo đầu file test

    test('<tên test>', async ({ page }) => {
        // Code của test
    });

## step: Đơn vị nhỏ hơn test, để khai báo từng step của test case

    await test.step('Tên step', async () => {
        // Code here
    });

## Basic actions:

    . Navigate: await page.goto('https://pw-practice.playwrightvn.com/');

    . Click: xài cho hầu hết các elements

        + single click: await page.locator("//button").click();
        + double click: await page.locator("//button").dblclick();
        + right click: page.locator("//button").click({
                            button: 'right'
                        })
        + click + keyboard: page.locator("").click({
                                modifiers: ['Shift'],
                            })
    
    . Input: xài cho textbox, textarea, hoặc các element có type=input

        + Fill: page.locator("//input").fill('Playwright Viet Nam'); // giống copy / paste

        + PressSequentially: page.locator("//input").pressSequentially('Playwright
                                Viet Nam', {
                                delay: 100,
                            });
                            // gõ từng chữ
    
    . Radio/checkbox
        + isChecked: xem Radio/checkbox có dc check hay ko
            ex: const isChecked = page.locator("//input").isChecked();

        + Check: set ON cho Radio/checkbox
            ex: page.locator("//input").check();
                page.locator("//input").setChecked(true);

        + Uncheck: set OFF cho Radio/checkbox
            ex: page.locator("//input").setChecked(false);

        + Note: có thể xài click
    
    . Select option: xài cho single select or multiple select
        ex:  
            select 1 value
                await page.locator('//select[@id="country"]').selectOption({ value: countries['Canada'] });
                //await page.locator('//select[@id="country"]').selectOption(countries['United Kingdom']);

            select nhieu value
                let interests = ["Technology", "Art"];
                await page.locator('//select[@id="interests"]').selectOption(interests);
    
    . Set Input File: select file to upload (nên để file trong folder git)
            let personalImage = "data-test\\images\\Virgo.jpg";
            await page.locator('//input[@id="profile"]').setInputFiles(personalImage);

