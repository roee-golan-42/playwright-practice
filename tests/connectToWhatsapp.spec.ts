import { Page, test } from "@playwright/test";

test("Connect To Whatsapp Poc", async ({ page }) => {
  await page.goto("https://web.whatsapp.com/");
  console.log("entered to Whatsapp succesfully");

  await moveToLoginWithCode(page);
  await enterPhoneNumber(page, "+972586640882");
  await logVerificationCode(page);

  await searchChat(page, "Roee Golan");
  await page.locator("[title='Roee Golan']").click();
  const messages = await page.locator(`[role="row"]`).innerText();
  console.log(messages);

  await page.waitForTimeout(120000);
});

const moveToLoginWithCode = async (page: Page) => {
  await page
    .locator(`//*[contains(text(), 'Log in with phone number')]`)
    .waitFor({ state: "visible" });
    await page.waitForTimeout(3000)
  await page
    .locator(`//*[contains(text(), 'Log in with phone number')]`)
    .hover();
    await page.waitForTimeout(3000)

  await page
    .locator(`//*[contains(text(), 'Log in with phone number')]`)
    .click();

  console.log("move to login with code succesfully");
};

const enterPhoneNumber = async (page: Page, phoneNumber: string) => {
  await page
    .locator(`[aria-label='Type your phone number.']`)
    .waitFor({ state: "visible", timeout: 60000 });
  await page
    .locator(`[aria-label='Type your phone number.']`)
    .fill("+972586640882");
  await page.click("//button//*[contains(text(), 'Next')]");

  console.log("phone enterd succesfully");
};

const logVerificationCode = async (page: Page) => {
  await page
    .locator(
      "[aria-details='link-device-phone-number-code-screen-instructions']"
    )
    .waitFor({ state: "visible" });
  const verificationCode = await page
    .locator(
      "[aria-details='link-device-phone-number-code-screen-instructions']"
    )
    .getAttribute("data-link-code");
  console.log("verification code: " + verificationCode);
};

const searchChat = async (page: Page, chatName: string) => {
  const searchBar = page.locator(
    "[class='x1hx0egp x6ikm8r x1odjw0f x6prxxf x1k6rcq7 x1whj5v']"
  );

  await searchBar.waitFor({ state: "visible", timeout: 60000 });
  await searchBar.fill(chatName);
};
