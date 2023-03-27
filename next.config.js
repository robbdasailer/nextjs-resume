const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = {
	publicRuntimeConfig: {
		// remove private variables from processEnv
		processEnv: Object.fromEntries(
			Object.entries(process.env).filter(([key]) =>
				key.includes('NEXT_PUBLIC_')
			)
		),
	},
};

module.exports = (phase) => ({
	...nextConfig,
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx']
		.map((extension) => {
			const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
			const prodExtension = `(?<!dev\.)${extension}`;
			const devExtension = `dev\.${extension}`;
			return isDevServer ? [devExtension, extension] : prodExtension;
		})
		.flat(),
});
