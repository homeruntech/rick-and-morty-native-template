const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('node:path')

const config = {
	entryFile: './index.ts',
	resolver: {
		extraNodeModules: {
			'~': path.resolve('./src'),
		},
	},
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
