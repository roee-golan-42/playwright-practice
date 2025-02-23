import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://web.whatsapp.com/');
  // 
  // console.log(await page.locator(`xpath=//*[contains(text(), 'Log in with phone number')]`).innerText());
  // await page.waitForTimeout(15000)
  await page.locator(`//*[contains(text(), 'Log in with phone number')]`).waitFor({ state: 'visible' });
  await page.locator(`//*[contains(text(), 'Log in with phone number')]`).hover();
  await page.locator(`//*[contains(text(), 'Log in with phone number')]`).click();

  await page.locator(`//*[contains(text(), 'Log in with phone number')]`).click({ force: true });

  await page.locator(`[aria-label='Type your phone number.']`).fill("")
  await page.locator(`[aria-label='Type your phone number.']`).fill("+972586640882")
  await page.click("//button//*[contains(text(), 'Next')]")
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
