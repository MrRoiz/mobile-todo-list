import { Alert, Text } from 'react-native';
import { useEffect, VFC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import AddToDoButton from '../../components/AddToDoButton';
import RootStackParamList from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: VFC<Props> = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => <AddToDoButton onPress={() => Alert.alert('test')} />,
		});
	}, []);

	return (
		<Text>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo laborum
			atque facere enim, accusamus officiis voluptatem laboriosam pariatur,
			nulla laudantium magnam ad placeat excepturi. Animi possimus odit vitae
			dolores ratione!
		</Text>
	);
};

export default Home;
