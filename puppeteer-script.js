/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
  // launch browser for LHCI
  const page = await browser.newPage();
  await page.goto('https://www.americastestkitchen.com/sign_in');
  await page.type('#email', 'puppeteertest@americastestkitchen.com');
  await page.type('.login-form__password', 'password');
  await page.click('.login-form__submit');
  await page.waitForNavigation();
  await page.goto('https://www-staging3.americastestkitchen.com/sign_in');
  await page.authenticate(process.env.LIGHTHOUSE_CHECK_USERNAME, process.env.LIGHTHOUSE_CHECK_PASSWORD);
  await page.type('#email', 'puppeteertest@americastestkitchen.com');
  await page.type('.login-form__password', 'password');
  await page.click('.login-form__submit');
  await page.waitForNavigation();
  await page.goto('https://www-staging3.cookscountry.com/sign_in');
  await page.authenticate(process.env.LIGHTHOUSE_CHECK_USERNAME, process.env.LIGHTHOUSE_CHECK_PASSWORD);
  await page.goto('https://www-staging3.cooksillustrated.com/sign_in');
  await page.authenticate(process.env.LIGHTHOUSE_CHECK_USERNAME, process.env.LIGHTHOUSE_CHECK_PASSWORD);
  // close session for next run
  await page.close();
};
