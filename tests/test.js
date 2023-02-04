import { expect, test } from '@playwright/test';

test('"/" page has expected content', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toContain('Bem vindo');
});

test('"/projects" page has expected content', async ({ page }) => {
	await page.goto('/projects');
	expect(await page.textContent('h1')).toContain('Meus projetos');
});

test('"/blog" page has expected content', async ({ page }) => {
	await page.goto('/blog');
	expect(await page.textContent('h1')).toContain('Blog');
});

test('"/contact" page has expected content', async ({ page }) => {
	await page.goto('/contact');
	expect(await page.textContent('h1')).toContain('Contato');
});

test('"/about" page has expected content', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toContain('Sobre');
});

test('api works well', async ({ request }) => {
	const response = await request.get('/api/posts');
	expect(response.ok()).toBeTruthy();
});
