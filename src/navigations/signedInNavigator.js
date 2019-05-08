import React , { Component }from "react"
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../screens/Login"
import Home from "../screens/Home"
import SideMenu from "../components/common/SideMenu"


const Stack = createStackNavigator(

    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
             headerVisible: false,
            gesturesEnabled: true,
        }
    }

)

const DrawerNav = createDrawerNavigator(
    {
        Stack: { screen: Stack }
    },

    {
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
        contentComponent: (props) => <SideMenu {...props} />,
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
)

const MainNav = createAppContainer(DrawerNav)


export default class SignedInNavigator extends Component{

    render(){
        return(
            <MainNav></MainNav>
        )
    }
}



