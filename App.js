import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => this.webViewRef.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Image source={require('./assets/icon.png')} style={styles.logo} />
          <TouchableOpacity onPress={() => console.log('Hamburger menu pressed')}>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <WebView
          source={{ uri: 'https://halfin-labs.github.io/MyNostr-key-generator-app/' }}
          style={styles.webView}
          ref={(webView) => { this.webViewRef = webView; }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 59 : 0, // add padding to avoid overlapping with dynamic island on iOS
    backgroundColor: '#49269E', // set background color
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#49269E',
  },
  logo: {
    width: 100,
    height: 40,
  },
  webView: {
    flex: 1,
  },
});
