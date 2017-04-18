import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';
import Browser from './BrowserView';

class MainApp extends Component {

  state = {
    links: [
      {title:'Tokopedia', url: 'https://www.tokopedia.com/'},
      {title:'detikcom', url: 'https://www.detik.com/'},
      {title:'Amazon', url: 'https://www.amazon.com/'},
      {title:'Youtube', url: 'https://youtube.com/'},
    ],
  };

  onPressButton(url) {
    this.refs.navigator.push({ url });
  }

  renderButton = (btn, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.onPressButton(btn.url)}
        style={styles.btn}
      >
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

  renderScene = (route, navigator) => {
    if (route.url) {
      return (
        <Browser url={route.url} navigator={navigator} />
      );
    }

    return (
      <View style={styles.content}>
        <Text>Beranda</Text>
        <View>
          {this.state.links.map(this.renderButton)}
        </View>
      </View>
    );
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        renderScene={this.renderScene}
        initialRoute={{}}
        configureScene={(route) => (
          Navigator.SceneConfigs.FloatFromBottom
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    margin: 40,
    backgroundColor: '#3ce7e4',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MainApp;
