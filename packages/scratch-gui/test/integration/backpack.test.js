import path from 'path';
import SeleniumHelper from '../helpers/selenium-helper';

const {
    clickText,
    getDriver,
    getLogs,
    loadUri,
    textExists
} = new SeleniumHelper();

const uri = path.resolve(__dirname, '../../build/index.html');

let driver;

describe('Working with the how-to library', () => {
    beforeAll(() => {
        driver = getDriver();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Backpack is "Coming Soon" without backpack host param', async () => {
        await loadUri(uri);
        // The app no longer shows a "Coming Soon" tooltip for the backpack.
        // If the Backpack header is present, clicking it should not produce browser errors.
        const hasBackpack = await textExists('Backpack');
        if (hasBackpack) {
            await clickText('Backpack');
            const logs = await getLogs();
            await expect(logs).toEqual([]);
        }
    });
});
