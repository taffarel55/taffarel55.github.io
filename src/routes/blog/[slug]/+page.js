const language = 'pt-br';

export async function load({ params }) {
	try {
		const post = await import(`../posts/${params.slug}/${language}.md`);
		const { title, date } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date
		};
	} catch (err) {
		return {
			status: 404,
			error: new Error(err)
		};
	}
}
