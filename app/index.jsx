import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/icons/bubble-chat.png')}
      />
      <Text style={styles.welcomeText}>WELCOME TO BUBBLE CHAT</Text>
      
      <View style={styles.signInButton}>
        <Link style={styles.buttonText} href="Login">SIGN IN GET STARTED</Link>
      </View>

      <View style={styles.createAccountButton}>
        <Link style={styles.buttonText} href="signup">CREATE NEW ACCOUNT</Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 44, // Adjust height as needed
    width: 144, // Adjust width as needed
    objectFit: 'contain',
  },
  welcomeText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold', // Ensure you have the font loaded
    fontSize: 24,
    color: '#000',
    marginVertical: 20,
  },
  signInButton: {
    height: 50,
    width: '80%', // Adjust width as needed
    borderRadius: 25, // More rounded edges for pill shape
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  createAccountButton: {
    height: 50,
    width: '80%', // Adjust width as needed
    borderRadius: 25, // More rounded edges for pill shape
    backgroundColor: '#d1d5db', // Slate color
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold', // Ensure you have the font loaded
    color: '#fff', // Change to black for the create account button
  },
});
