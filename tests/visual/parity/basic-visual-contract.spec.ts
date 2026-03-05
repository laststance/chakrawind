import { expect, test } from "@playwright/test"

test.describe("M1 visual parity contract", () => {
  test("renders deterministic baseline card", async ({ page }) => {
    await page.setContent(`
      <style>
        :root {
          color-scheme: light;
          font-family: Arial, sans-serif;
        }

        body {
          margin: 0;
          padding: 32px;
          background: #f8fafc;
          color: #0f172a;
        }

        .card {
          width: 360px;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
          padding: 20px;
        }

        .title {
          font-size: 18px;
          line-height: 1.4;
          margin: 0;
        }

        .body {
          margin-top: 8px;
          font-size: 14px;
          line-height: 1.5;
          color: #475569;
        }

        .button {
          margin-top: 16px;
          border: 0;
          border-radius: 8px;
          background: #2563eb;
          color: #ffffff;
          font-size: 14px;
          line-height: 20px;
          padding: 10px 16px;
        }
      </style>
      <main>
        <section class="card" aria-label="visual-baseline-card">
          <h1 class="title">Chakra Wind Visual Baseline</h1>
          <p class="body">M1 visual parity snapshot contract.</p>
          <button class="button" type="button">Primary</button>
        </section>
      </main>
    `)

    await expect(page.locator('[aria-label="visual-baseline-card"]')).toBeVisible()
    await expect(page).toHaveScreenshot("baseline-card.png", {
      fullPage: true
    })
  })
})
