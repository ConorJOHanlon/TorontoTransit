import React from 'react';
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
import { DrawerActions } from 'react-navigation';
import { WebBrowser, } from 'expo';
import { MonoText } from '../components/StyledText';
import Icon from "react-native-vector-icons/Ionicons";

import { Font } from 'expo';
export default class PrestoScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };



  render() {
    return (
      <View style={styles.container}>
      	<ImageBackground source={require('../assets/images/prestoScreen.png')} style={styles.bg}>
        <Icon
        name="md-menu"
        size={30}
        color='#2E2E2E'
        style={styles.hamburger}
        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} />
  	</ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

bg: {
    width: '100%',
    height: '100%',

},

favourites: {
    width: '70%',
    height: '70%',
    marginTop:45,
},

rectangle: {
    width: 320,
    height: 140,
    marginTop:'5%',
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor: '#fff',
    borderRadius:5,

},

bottomRedTab: {
    width: 25,
    height: 180,
    marginLeft:0,
    backgroundColor: '#D73328',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    alignItems: 'center',

},

bottomRectangle: {
    width: 200,
    height: 180,
    backgroundColor: '#fff',
    borderRadius:5,
    marginLeft:20,

},


textRot: {
    transform: [{ rotate: '270deg'}],
    width:150,
},

 sendContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding:15,

  },
 
  instructions: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  balance: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 10,
    fontSize: 26,
    fontWeight: '500',
  },
  headerText: {
    alignItems: 'center',
    marginTop: 0,
    fontSize: 26,
    fontWeight: '500',
  },

 submit:{
    marginTop:50,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:300,
  },
  submitText:{
      color:'#000',
      textAlign:'center',
  },

  buttonWrapper:{
     borderTopColor:'#333',
     flexDirection: 'row', 
     alignSelf: 'flex-start',
     marginTop:5,
},

  bottomWrapper:{
     flexDirection: 'row', 
     flex:1,
     marginTop:'50%',

},
  actionButtons:{
    width:140,
},

hamburger:{
marginLeft:40,
marginTop:70,
}
});
