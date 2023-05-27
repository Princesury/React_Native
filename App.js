import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randombackground, setRandombackground] = useState('#ffffff');

  const generateColor = () => {
    const hexrange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexrange[Math.floor(Math.random() * 16)];
    }
    setRandombackground(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randombackground} />
      <View style={[styles.container, {backgroundColor: randombackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    backgroundColor: 'red',
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  actionBtnTxt: {
    fontFamily: 'ariel',
    fontWeight: 'bold',
  },
});
