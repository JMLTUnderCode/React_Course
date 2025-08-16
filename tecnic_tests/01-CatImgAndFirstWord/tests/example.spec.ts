import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';
const FACT_IMAGE_URL = 'https://cataas.com/cat/says/';

test('debe mostrar el titulo', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Espera a que aparezca el h2 "Fact Text"
  const h2 = await page.getByRole('heading', { name: 'Fact Text' });
  await expect(h2).toBeVisible();
});

test('debe mostrar el span con el texto del hecho', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Verifica que hay un span con texto de longitud > 0
  const span = await page.locator('.fact-info span');
  await expect(span).toBeVisible();
  const spanText = await span.textContent();
  expect(spanText && spanText.length).toBeGreaterThan(0);
});

test('debe mostrar la imagen con el src correcto', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Verifica que la imagen existe y el src es correcto
  const img = await page.locator('img');
  await expect(img).toBeVisible();
  const src = await img.getAttribute('src');
  expect(src?.startsWith(FACT_IMAGE_URL)).toBeTruthy();
});