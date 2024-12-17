import { test, expect } from '@playwright/test';

test('Add Todo Item', async ({ page }) => {

    await page.goto('https://material.playwrightvn.com/');

    await page.locator('//a[contains(text(),"Bài học 3: Todo page")]').click();

    for (let i = 1; i <= 100; i++) {
        await page.locator('//input[@id="new-task"]').fill("Todo " + i);
        await page.locator('//button[@id="add-task"]').click();
    }

    const browserPopup = async (dialog) => {await dialog.accept();} // add type gì cho dialog giờ bà con :D
    
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {

            page.on('dialog', browserPopup);
            await page.locator('//span[text()="Todo ' + i + '"]//following-sibling::div//button[text()="Delete"]').click();
            page.off('dialog',browserPopup);
        }

    }
});