export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();

            // To remove `/src/routes` and `.md`
			const postPath = path.slice(11, -3); 

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
