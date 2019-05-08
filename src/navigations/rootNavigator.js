import React from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import signedOutNavigator from "./signedOutNavigator"
import signedInNavigator from "./signedInNavigator"


export default createRootNavigator = (loggedIn) => {
    return createAppContainer(createSwitchNavigator({
        signedOutNavigator: { screen: signedOutNavigator },
        signedInNavigator: { screen: signedInNavigator }
    },
        {
            initialRouteName: loggedIn ? "signedInNavigator" : "signedOutNavigator"
        }))
}
