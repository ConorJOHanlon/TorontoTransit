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
import ImageSequence from 'react-native-image-sequence';
import { Slider } from 'react-native';

export default class AskScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
        super(props);
        this.images = [
          require('../assets/images/RealTime_Ask1.png'),
          require('../assets/images/RealTime_Ask2.png'),
          require('../assets/images/RealTime_Ask3.png'),
        ];
        this.next = this.next.bind(this);
        this.state = {index: 0};
    }

    componentWillMount() {
        this.next();
    }

    next() {
    }

  render() {
    return (
     <View style={styles.container}>
        <ImageBackground source={this.images[this.state.index]} style={styles.bg}>
        <Icon
       	name="md-arrow-round-back"
        size={25}
        color='#2E2E2E'
        style={styles.hamburger}
        onPress={() => {this.props.navigation.navigate('Settings');this.setState({ index: 0 })}} />
    </ImageBackground>
     {this.state.index == 0 &&
    <View style={styles.buttonWrapper}>
    <TouchableOpacity style={styles.actionButtons} onPress={() => {this.props.navigation.navigate('Settings');this.setState({ index: 0 })}} >
                <Text style={[styles.noText]}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtons} onPress={() =>  setTimeout(() => { this.setState({index: 1})}, 200)}>
                <Text style={[styles.yesText]}>Yes</Text>
          </TouchableOpacity>
    </View>
    }

    {this.state.index == 1 &&
      <View style={styles.buttonWrapper}>
        <Slider
          style={{width: '95%', height: 160}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#FFFFFF"
          onSlidingComplete={() => {this.setState({ index: 2 })}}
        />
      </View>
    }

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
    fontWeight: '500',
    marginTop:50,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:300,
  },
  yesText:{
      borderRadius:5,
      fontWeight: '500',
      color:'#fff',
      textAlign:'center',
      backgroundColor:'#d73328',
      padding:20,
      marginLeft:40,
      color:'#fff',
      width:130,
  },

  noText:{
      borderRadius:5,
      fontWeight: '500',
      color:'#222',
      textAlign:'center',
      backgroundColor:'#f8f8f8',
      padding:20,
      marginLeft:40,
      width:130,
  },

  buttonWrapper:{
    left:20,
     bottom:30,
     position:'absolute',
     flexDirection: 'row', 
      alignSelf: 'flex-start',
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
marginLeft:20,
marginTop: 45,
}
});
