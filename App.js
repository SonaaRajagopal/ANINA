import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<Text style={styles.welcome}>Welcome to the</Text>
  <Text style={styles.welcome}>
  <Text style={{ color: 'purple' }}>A</Text>
  <Text style={{ color: 'green' }}>N</Text>
  <Text style={{ color: 'blue' }}>I</Text>
  <Text style={{ color: 'green' }}>N</Text>
  <Text style={{ color: 'purple' }}>A</Text>
  
</Text>
<Text style={styles.app}>app!</Text>
<Button title="My name is: " color="green" >
        Hi
      </Button>
      <Text style={styles.name}>Sonaa Rajagopal</Text>
      
      <Button title="My Reg No. is:" color="blue" >
        Hi
      </Button>
      <Text style={styles.regno}>22MIS1028</Text>
      
      <Text style={styles.more}>To get to know </Text>
      <Text style={styles.more}>more about the app,</Text>
      <Button title="Stay Tuned!" color="red" >
        Hi
      </Button>
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color:'blue',
    
  },

  app: {
    fontSize: 40,
    marginBottom: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color:'blue',
    
  },

  name: {
    fontSize: 30,
    marginBottom: 30,
    color:'purple',
    fontStyle: 'italic',
    
  },

  regno: {
    fontSize: 20,
    marginBottom: 20,
    color:'green',
    fontWeight: 'bold',
    
  },
  
  more: {
    fontSize: 20,
    marginBottom: 20,
    color:'grey',
    
  },
});
