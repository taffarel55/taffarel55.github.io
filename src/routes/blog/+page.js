const language = 'pt-br';

export const load = async ({ fetch }) => {
	try {
		const response = await fetch(`/api/posts`);
		const posts = await response.json();

		const post = await import(`./content/${language}.md`);
		
		const { title, date } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date,
			posts
		};
	} catch (err) {
		return {
			status: 404,
			error: new Error(err)
		};
	}
};
