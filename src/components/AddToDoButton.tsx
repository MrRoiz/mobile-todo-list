import { VFC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface Props {
	onPress: () => void;
}

const AddToDoButton: VFC<Props> = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={style.button}>
			<Text>
				Add todo <FontAwesome name="plus" />
			</Text>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	button: {
		backgroundColor: '#2aa1d8',
	},
});

export default AddToDoButton;
