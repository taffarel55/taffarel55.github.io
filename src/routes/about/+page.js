const language = 'pt-br';

export async function load() {
	try {
		const post = await import(`./content/${language}.md`);
		const { title, date, description } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date,
			description
		};
	} catch (err) {
		return {
			status: 404,
			error: new Error(err)
		};
	}
}
