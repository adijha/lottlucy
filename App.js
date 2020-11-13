import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  Image,
} from 'react-native';
import {WebView} from 'react-native-webview';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

  hideSpinner() {
    this.setState({visible: false});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          onLoad={() => this.hideSpinner()}
          style={{flex: 1}}
          source={{uri: 'https://www.lottlucy.com/lottlucyappadmin'}}
        />
        {this.state.visible && (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              top: '40%',
              left: '39%',
            }}>
            <Image
              source={require('./logo.png')}
              style={{
                height: 100,
                width: 100,
                resizeMode: 'contain',
              }}
            />
            <ActivityIndicator style={{top: '8%'}} size="large" color="green" />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
