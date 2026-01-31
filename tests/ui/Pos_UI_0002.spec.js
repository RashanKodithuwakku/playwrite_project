import { test } from '@playwright/test';

test('Pos_UI_0002 - Convert imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');

  const textareas = page.locator('textarea');
  await textareas.nth(0).fill('mama paudhlika vishva vidhYaalayaka parigaNaka haa sanniveedhana thaakShanaya aDhYAnaya karanavaa.');

  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'singlish-converter/screenshots/IT23491526_Pos_UI_0002.png'
  });
});