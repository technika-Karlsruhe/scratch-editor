// @ts-check
const {test, expect} = require('@playwright/test');

test('backpack is not rendered even when a backpack host is provided', async ({page}) => {
    await page.goto('index.html?backpack_host=fake');

    await expect(page.getByText('Backpack', {exact: true})).toHaveCount(0);
});
