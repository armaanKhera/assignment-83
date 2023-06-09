import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../Screens/Profile";
import TabNav from "./tabNavigator";

const Drawer = createDrawerNavigator()

export default function DrawerNavigator (){
    return(
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerTintColor:'skyblue', overlayColor:'grey'}}>
            <Drawer.Screen component={TabNav} name="Home"/>
            <Drawer.Screen component={Profile} name="Profile"/>
        </Drawer.Navigator>
    </NavigationContainer>
    )
}