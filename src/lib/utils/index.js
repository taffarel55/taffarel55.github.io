export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/posts/*/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

			// Get the post name
			const postName = path.split('/')[5];

			return {
				meta: metadata,
				path: '/blog/' + postName
			};
		})
	);

	return allPosts;
};
