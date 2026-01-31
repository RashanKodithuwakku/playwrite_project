import { test } from '@playwright/test';

test('Pos_Fun_0024 - Convert imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');

  const textareas = page.locator('textarea');
  await textareas.nth(0).fill('ee kattiya monava kivvath anthimeeta ithin apita apee vaedimahalma saamaajikaya vena saman  mahaththaya kiyapu vidhihata Colombo idhala aapahu enakota ithin kaduvelin passe Galle paeththen yanakota vaeligama beach eka pahukarala  maathara harahaa thamayi apee anthima navaathaena vuna dhakuNu palaathe thiyana lassana gamak kiyala godak dhenek kiyana thissamahaaraamaya kiyana paeththee thiyana yaala kiyana vana rakShithayata gihin eeke inna ali, koti, valassu vagee eka eka saththu apita balaaganna puLuvan unee.');

  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'singlish-converter/screenshots/IT23491526_Pos_Fun_0024.png'
  });
});