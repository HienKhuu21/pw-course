import { test, expect } from '@playwright/test';

test('Add to Cart', async ({ page }) => {
    let listProducts = [
        { name: "Product 1", quantity: 2 },
        { name: "Product 2", quantity: 3 },
        { name: "Product 3", quantity: 1 }
    ];

    await page.goto('https://material.playwrightvn.com/');

    await page.locator('//a[contains(text(),"Bài học 2: Product page")]').click();

    for (let product in listProducts) {
        for (let i = 1; i <= listProducts[product].quantity; i++) {
            await page.locator('//div[text()="' + listProducts[product].name + '"]//following-sibling::button[text()="Add to Cart"]').click();
            //await page.waitForTimeout(1000);
            // có cách nào move cái for này ra ngoài test để làm thành 1 function ko ?
        }
    }
});