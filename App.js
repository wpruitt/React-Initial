import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.greencontentbox}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
        </View>
        <View style={styles.goldcontentbox}>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Test....</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greencontentbox: {
    flex: 1,
    backgroundColor: 'green',
  },
  goldcontentbox: {
    flex: 1,
    backgroundColor: 'gold',
  }
});
