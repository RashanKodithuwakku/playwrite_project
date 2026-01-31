import { test } from '@playwright/test';

test('Pos_Fun_0010 - Convert imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');

  const textareas = page.locator('textarea');
  await textareas.nth(0).fill('mama pathoola kanna aasa naee.');

  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'singlish-converter/screenshots/IT23491526_Pos_Fun_0010.png'
  });
});