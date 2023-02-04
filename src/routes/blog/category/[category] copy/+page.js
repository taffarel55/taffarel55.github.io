export const load = async ({ fetch, params }) => {
	try {
		const { category } = params;
		const sanitizedCategory = category
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase();

		const response = await fetch(`/api/posts`);
		const allPosts = await response.json();

		const posts = allPosts.filter((post) => {
			const sanitizedCategories = post.meta.categories?.map((category) =>
				category
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.toLowerCase()
			);
			return sanitizedCategories.includes(sanitizedCategory);
		});

		return {
			category,
			posts
		};
	} catch (err) {
		return {
			status: 404,
			error: new Error(err)
		};
	}
};
