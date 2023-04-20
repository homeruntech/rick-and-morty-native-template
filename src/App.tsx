import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const App = () => (
	<SafeAreaView>
		<View style={styles.safearea}>
			<View>
				<Text style={styles.rickAndMorty}>Rick and Morty</Text>
			</View>

			<View>
				<Text style={styles.welcome}>Welcome!</Text>
			</View>

			<View style={styles.captionWrapper}>
				<Text>See INSTRUCTIONS.md for more information on how to proceed.</Text>
			</View>
		</View>
	</SafeAreaView>
)

const styles = StyleSheet.create({
	safearea: {
		padding: 16,
	},
	rickAndMorty: {
		fontSize: 32,
	},
	welcome: {
		fontSize: 24,
	},
	captionWrapper: {
		paddingTop: 16,
	},
})
