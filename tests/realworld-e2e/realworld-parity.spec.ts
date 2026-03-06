import { expect, test, type Page } from "@playwright/test"

/**
 * Captures deterministic full-page checkpoint screenshot.
 * @param page - Playwright page instance.
 * @param snapshotName - Snapshot filename defined in catalog.
 * @returns Promise<void>
 * - Resolves when screenshot assertion passes
 * @example
 * await takeCheckpoint(page, "rw-home-initial.png")
 */
const takeCheckpoint = async (page: Page, snapshotName: string) => {
  await expect(page).toHaveScreenshot(snapshotName, {
    fullPage: true
  })
}

test.describe("M4 realworld parity", () => {
  test("runs shared transition catalog with screenshot checkpoints", async ({ page }) => {
    await page.goto("")
    await expect(page.getByTestId("realworld-root")).toBeVisible()

    // catalog: RW-INIT-001
    await takeCheckpoint(page, "rw-home-initial.png")

    await page.getByTestId("username-input").fill("invalid-user")
    await page.getByTestId("password-input").fill("invalid-password")
    await page.getByTestId("login-submit").click()
    await expect(page.getByTestId("login-error")).toBeVisible()

    // catalog: RW-AUTH-002
    await takeCheckpoint(page, "rw-login-error.png")

    await page.getByTestId("username-input").fill("demo")
    await page.getByTestId("password-input").fill("demo")
    await page.getByTestId("login-submit").click()
    await expect(page.getByTestId("auth-state")).toContainText("Authenticated")

    // catalog: RW-AUTH-001
    await takeCheckpoint(page, "rw-login-success.png")

    await page.getByTestId("composer-input").fill("Post created from shared realworld test")
    await page.getByTestId("composer-submit").click()
    await expect(page.getByTestId("home-timeline")).toContainText(
      "Post created from shared realworld test"
    )

    // catalog: RW-POST-001
    await takeCheckpoint(page, "rw-post-created.png")

    await page.getByTestId("like-button").click()
    await expect(page.getByTestId("like-button")).toContainText("Like (on)")

    // catalog: RW-INT-001
    await takeCheckpoint(page, "rw-like-toggled.png")

    await page.getByTestId("retweet-button").click()
    await expect(page.getByTestId("retweet-button")).toContainText("Retweet (on)")

    // catalog: RW-INT-002
    await takeCheckpoint(page, "rw-retweet-toggled.png")

    await page.getByTestId("reply-input").fill("Reply from shared realworld test")
    await page.getByTestId("reply-submit").click()
    await expect(page.getByTestId("reply-list")).toContainText("Reply from shared realworld test")

    // catalog: RW-THREAD-001
    await takeCheckpoint(page, "rw-thread-replied.png")

    await page.getByTestId("notification-trigger").click()
    await expect(page.getByTestId("notification-list")).toContainText("New interaction received")

    // catalog: RW-NOTIF-001
    await takeCheckpoint(page, "rw-notification-visible.png")
  })
})
