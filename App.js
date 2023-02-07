import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const PlaceholderImage = require('./assets/concert.png');

export default function App() {
  const [ticketAmount, onChangeTicketAmount] = React.useState(0)
  const [ticketCost, onChangeTicketCost] = React.useState()
  
  return (
    <View style={styles.container}>
      <Text style={styles.ticketVaultText}>Ticket Vault</Text>
      
      <TextInput
        style={styles.numberOfTickets}
        placeholder="Number of Tickets"
        onChangeText={onChangeTicketAmount}
        value={ticketAmount}
        />
        
        <Pressable style={styles.container}
        onPress={() => {
          //onChangeTicketAmount(ticketAmount)
          onChangeTicketCost((ticketAmount * 99.99).toFixed(2))
        }}>
       
      
      <Text style={styles.buttonStyle}>Find The Cost</Text>
      {ticketCost ? (

        <Text style={styles.ticketPrice}>Ticket Cost: ${ticketCost} </Text>
      ) : (null)
}
      <StatusBar style="auto" />
      <Image source={PlaceholderImage} style={styles.concertContainer} />
      </Pressable>
      
      
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
    marginTop: 185
  },
  buttonStyle: {
    backgroundColor: '#f98b88',
    fontSize: 30,
    padding: 7,
    marginTop: 20
  },
  ticketVaultText: {
    fontSize: 50,
    marginTop: 30,
  },
  ticketPrice: {
    fontSize: 30,
    marginTop: 40,
  },
  numberOfTickets: {
    marginTop: 22,
    fontSize: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 8,
  }
});
