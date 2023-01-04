import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text>Hello Guys !</Text>
      <TextInput
        
        placeholder="useless placeholder"

        value="Hello"
      />
      <TextInput
        
        value="Hello"
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
    </View>
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
