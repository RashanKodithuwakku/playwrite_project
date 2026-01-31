import { test } from '@playwright/test';

test('Neg_Fun_0003 - Convert imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');

  const textareas = page.locator('textarea');
  await textareas.nth(0).fill('yo bro, api reastaurant ekata yamu, lets grab a bite and bounce. salli mata thiyenavaa.');

  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'singlish-converter/screenshots/IT23491526_Neg_Fun_0003.png'
  });
});