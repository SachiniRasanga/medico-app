import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorDetails from './Screens/doctor/DoctorDetails';
import BookingDetails from './Screens/doctor/BookingDetails';
import AddDoctor from './Screens/doctor/AddDoctor';
import UpdateDoctor from './Screens/doctor/UpdateDoctor';
import Main from './Screens/doctor/Main';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Main">

      <Stack.Screen name="Main" component={Main} options={{
          headerStyle: {
            backgroundColor: '#7A1CAC',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },

        }} />
        <Stack.Screen name="Add Doctors" component={AddDoctor} options={{
          headerStyle: {
            backgroundColor: '#7A1CAC',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },

        }} />

        <Stack.Screen name="Doctor Details" component={DoctorDetails} options={{
          headerStyle: {
            backgroundColor: '#7A1CAC',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },

        }} />

        <Stack.Screen name="Booking Details" component={BookingDetails} options={{
          headerStyle: {
            backgroundColor: '#7A1CAC',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },

        }} />

        <Stack.Screen name="Update Doctor" component={UpdateDoctor} options={{
          headerStyle: {
            backgroundColor: '#7A1CAC',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },

        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


