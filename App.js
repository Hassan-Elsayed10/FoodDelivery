import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navigation from './navigation';
import HomeScreen from './Screens/HomeScreen';
function App() {

  return (
    <SafeAreaView style={styles.sectionContainer} >
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%'
  }
});

export default App;
