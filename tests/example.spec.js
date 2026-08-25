// @ts-check
import {test} from '@playwright/test';
import { waitForDebugger } from 'node:inspector';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('heading', { name: 'Installation' }).click();
  
}); 

test.only('flipkart', async ({page}) => {
  await page.goto('https://www.flipkart.com/');
  await page.locator('.b3wTlE').click()
  await page.locator('.nw1UBF.v1zwn25').nth(0).fill("samsung TVs");
  await page.locator('.nw1UBF.v1zwn25').nth(0).press("Enter")
  const text=await page.locator("._Omnvo").textContent()
console.log(text)
  await page.locator('div.WNv7PR').nth(1).click();
  await page.pause();
   const linktext=await page.locator('div.WNv7PR').nth(1).textContent();
   console.log(linktext)

});  //add program comment
  //one more comment