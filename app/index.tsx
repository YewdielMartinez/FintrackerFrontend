import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import CreateUserScreen from "./screens/CreateUser";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator()


function MyStack (){
return (
        <Stack.Navigator initialRouteName="HomeScreen"> 
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="CreateUserScreen" component={CreateUserScreen}/>
        </Stack.Navigator>

)


}
export default function index() {
  return (

      <MyStack/>

  )
  
}
