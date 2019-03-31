import React from 'react';
import { createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    ImageBackground
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
	<View style={styles.container}> 
    <View style={styles.header}> 
      <Icon
        name="md-close"
        size={30}
        color='#e2e2e2'
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} />
      </View>
		<View style={styles.topContainer}>
	       		<Text style={styles.headerText}>Hana Kim</Text>
	 		<Text style={styles.instructions}>nameishana@gmail.com</Text>
		</View>
		<View style={styles.bottomContainer}>
			<DrawerItems activeTintColor='#D73328' activeBackgroundColor='#fff' {...props} />
		</View>
		<View style={styles.footer}>
			<Text style={styles.searching}>Searching...</Text>
		</View>
	</View>
);

const RootStack = createDrawerNavigator({
    'Get Direction':HomeScreen,
    'AR Camera': HomeScreen,
    'Presto Card': HomeScreen,
    News: HomeScreen,
    Settings: HomeScreen,
 
},
   {contentOptions: {
      labelStyle: {
        fontSize: 20,
        marginLeft: 10,
      },
    },

	contentComponent: CustomDrawerContentComponent,
});

const App = createAppContainer(RootStack);


const styles = StyleSheet.create({

container:{
   height:'100%',
   
},

header:{
   marginLeft:40,
   marginTop:60,
   
},

topContainer:{
   padding:40,
   marginTop:0,
   width:'100%',
   
},

bottomContainer:{
   padding:30,
   borderTopColor:'#f2f2f2',
   borderTopWidth:1,
   width:'100%',
   
},

footer:{
   width:'100%',
  position: 'absolute',
  bottom: 0,
   height:80,
   backgroundColor:'#2e2e2e',
   color:'#fff',
   
},

headerText: {
    fontSize: 22,
    fontWeight: '500',
  },

searching: {
    fontSize: 20,
    fontWeight: '400',
    color:'#fff',
    paddingTop:25,
    paddingLeft:40,
 
  },

});

export default App;


