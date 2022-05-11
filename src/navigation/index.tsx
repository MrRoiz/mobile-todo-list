import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../views/home';
import RootStackParamList from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: 'Todo list',
				}}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default AppNavigation;
