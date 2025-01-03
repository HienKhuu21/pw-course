import { test, expect } from '@playwright/test';

function convertDateString(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Javascript lấy 0 làm index cho tháng - Jan = 0, Feb = 1 -> + 1 lên cho đúng 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

let userName = "Tien";
let userEmail = "hien.khuu.learn@gmail.com";
let gender = "male";
let hobbies = ["Reading", "Cooking"];
let interests = ["Technology", "Art"];
let countries = { "United States": "usa", "Canada": "canada", "United Kingdom": "uk", "Australia": "australia" };
let dob = "01/01/1985";
let personalImage = "data-test\\images\\Virgo.jpg";
let bio = "this is a test";
let rating = 8;
let color = "#0400ff";

test('Register Page', async ({ page }) => {
    await test.step('Step 1: Truy cập trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Step 2: click vào "Bài học 1: Register Page" link', async () => {
        await page.locator('//a[contains(text(),"Bài học 1: Register Page")]').click();
    })

    await test.step('Step 3: Nhập đầy đủ các thông tin, click button register', async () => {
        await page.locator('//input[@id="username"]').fill(userName);
        await page.locator('//input[@id="email"]').fill(userEmail);
        await page.locator('//input[@id="' + gender + '"]').setChecked(true);
        /*if (gender==="male"){
            await page.locator('//input[@id="' + gender + '"]').check();
        } else {
            await page.locator('//input[@id="' + gender + '"]').setChecked(true);
        }*/
        for (let i in hobbies) {
            let hoopy = hobbies[i].toLowerCase();
            await page.locator('//input[@id="' + hoopy + '"]').check();
        }
        await page.locator('//select[@id="interests"]').selectOption(interests);
        /*for (let i in interests) {
            await page.locator('//select[@id="interests"]//option[text()="' + interests[i] + '"]').click({
                modifiers: ['Control'],
                });
        }*/
        await page.locator('//select[@id="country"]').selectOption(countries['United Kingdom']);
        //await page.locator('//select[@id="country"]').selectOption({ value: countries['Canada'] });
        await page.locator('//input[@id="dob"]').fill(convertDateString(dob));
        await page.locator('//input[@id="profile"]').setInputFiles(personalImage);
        await page.locator('//textarea[@id="bio"]').fill(bio);
        await page.locator('//input[@id="rating"]').fill(rating.toString());
        await page.locator('//input[@id="favcolor"]').fill(color);
        await page.locator('//input[@id="newsletter"]').check();
        await page.locator('//span[@class="slider round"]').click();
        await page.locator('//button[text()="Register"]').click();
    })
    //await page.close();
});