import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';

import SideBar from './screens/common/Sidebar';
import Login from './screens/user/Login';



const Switch = createSwitchNavigator({
  Auth : { screen: Auth},
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
},
{initialRouteName: 'Auth',
headerMode: 'none'})

const Stack = createStackNavigator({
  Switch : { screen: Switch},
  // Forget Password or username
  ForgotPasswordOrUsername : { screen: ForgotPasswordOrUsername},
  // Screen1
  Signup: { screen: Signup },
  // Screen2
  Profile: { screen: Profile },
  // Screen1
  SmokeDetector: { screen: SmokeDetector },
  // Screen1
  CarbonMonoxideDetector: { screen: CarbonMonoxideDetector },
  //Car Battery Screen
  CarBattery: { screen: CarBattery},
  // Screen6
  HotWaterAlarm: { screen: HotWaterHeaterSpillAlarm },
  // Screen7
  HomeSecurity: {screen : HomeSecuritySystem},
  // Screen8
  ClothesDryerCleaner: {screen : ClothesDryerCleaner},
  // Screen9
  FirstAidKits : {screen : FirstAidKits},
  // Screen10
  FireExtinguisher : {screen : FireExtinguisher},
  // Screen11
  ChimmneyCleaning : {screen : ChimmneyCleaning},
  // Screen12
  AlertAndSafetyStore: {screen : AlertAndSafetyStore},
  //Education list
  Education : {screen : Education},
  //Education details
  EducationDetail : {screen : EducationDetail},
  //Screen14
  SmokeDetectorGuide : { screen : SmokeDetectorGuide},
  //Screen14
  Product : { screen : Product},
  //Screen14
  Cart : { screen : Cart},
  // Product detail Screen
  ProductDetail : { screen : ProductDetail},
  //Screen14
  Order : { screen : Order},
  // Order Detail Screen
  OrderDetail : { screen : orderDetail},
  // Checkout Screen

  Checkout : { screen : Checkout},
  // Smoke Detector List
  SmokeDetectorList : { screen : SmokeDetectorList},
  // CO detector list
  CarbonMonoxideDetectorList : { screen : CarbonMonoxideDetectorList},
  // Heater List
  HotWaterHeaterList : { screen : HotWaterHeaterList},
  //Cloths Dryer List Screen
  ClothDryList: {screen:ClothsDryerlist},
  //Fire Extinguisher List
  FireExtinguishList: {screen:FireExtinguisherlist},
  //Home Security List
  HomeSecureList: {screen:HomeSecuritylist},
  //First Aid Kit List
  FirstAidKitList: {screen: FirstAidKitList},
  // Car battery List
  CarBatteryList: {screen: CarBatteryList},
  //Chimney List Screen
  Chimney: {screen:ChimneyList},
  // Smoke Detector Edit
  SmokeDetectorEdit : { screen : SmokeDetectorEdit},
  // carbon monoxide Edit
  CarbonMonoxideDetectorEdit : { screen : CarbonMonoxideDetectorEdit},
 
  //Fire Extinguisher edit
  FireExtinguisherEdit: {screen: FireExtinguisherEdit},
  // First Aid Kit edit
  FirstAidKitsEdit: {screen: FirstAidKitsEdit},
  // Car battery edit
  CarBatteryEdit: {screen: CarBatteryEdit},

  ClothesDryerCleanerEdit: { screen: ClothesDryerCleanerEdit},

  ChimmneyCleaningEdit: { screen: ChimmneyCleaningEdit},

  HotWaterHeaterSpillAlarmEdit: { screen: HotWaterHeaterSpillAlarmEdit},

  HomeSecuritySystemEdit: { screen: HomeSecuritySystemEdit},
  //Notification List Screen
  NotificationList: { screen:NotificationList},
  //Notification details Screen
  NotificationDetails: { screen:NotificationDetails},

  AllProducts: { screen: AllProducts},

  
}, {

      initialRouteName: 'Switch',
      headerMode: 'none',
      navigationOptions: {
          // headerVisible: false,
          gesturesEnabled: true,
      }
  })

  // For restriction drawer navigation in login page //
  Stack.navigationOptions = ({ navigation }) => {
    let drawerLockMode = 'unlocked';
    console.log("hello",navigation.state.routes)
    let activeRoute = navigation.state.routes[navigation.state.index]
    
    if (activeRoute.routeName == 'Switch' && (activeRoute.routes[1].routeName =='Login' /*&& navigation.state.index == 0*/ || activeRoute.routes[1].routeName =='Signup' || activeRoute.routes[1].routeName =='ForgotPasswordOrUsername') ) {
      drawerLockMode = 'locked-closed';
    }
    return {
      drawerLockMode,
    };
  }; 
  // For restriction drawer navigation in login page //

const Drawer = createDrawerNavigator({
  Stack: { screen: Stack }
}, {
      drawerPosition: 'left',
      drawerOpenRoute: 'DrawerOpen',
      contentComponent: (props) => <SideBar {...props} />,
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
  });

//For React Navigation 3.+
export default createAppContainer(Drawer);