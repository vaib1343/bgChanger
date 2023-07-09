/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [bgColor, setBgColor] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * hexRange.length)];
    }
    setBgColor(`#${color}`);
  };
  return (
    <React.Fragment>
      <StatusBar backgroundColor={bgColor} />
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: bgColor,
          },
        ]}>
        <TouchableOpacity onPress={() => generateColor()}>
          <View style={styles.actionBtn}>
            <Text style={styles.btnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});

export default App;
