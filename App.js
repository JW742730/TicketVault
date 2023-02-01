import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const PlaceholderImage = require('./assets/concert.png');

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.ticketVaultText}>Ticket Vault</Text>
      <Image source={PlaceholderImage} style={styles.concertContainer} />
      <Pressable style={styles.container}
        onPress={() => {
          let ticketAmount = 0
          let ticketCost = ticketAmount * 99.99
        }}>
       <Text style={styles.buttonStyle}>Find The Cost</Text>
      </Pressable>
      <Text style={styles.ticketPrice}>Ticket Cost: $299.97</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.numberOfTickets}
        placeholder="Number of Tickets"
        onChangeText={newText => ticketAmount(newText)}
        />
      
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
  concertContainer: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#f98b88',
    fontSize: 30,
    padding: 7,
    position: 'absolute',
    top: 210,
  },
  ticketVaultText: {
    position: 'absolute',
    fontSize: 50,
    top: 30
  },
  ticketPrice: {
    position: 'absolute',
    fontSize: 30,
    top: 310
  },
  numberOfTickets: {
    position: 'absolute',
    top: 120,
    fontSize: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 8,
  }
});
