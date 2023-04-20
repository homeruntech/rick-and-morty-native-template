const path = require('path')

module.exports = {
	entryFile: './index.ts',
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: true,
			},
		}),
	},
	resolver: {
		extraNodeModules: {
			'~': path.resolve('./src'),
		},
	},
}
