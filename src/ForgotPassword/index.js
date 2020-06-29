import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function ForgotPassword({ navigation }) {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Login')}>  
          <Ionicons name="ios-arrow-back" size={40} color="rgba(0, 0, 0, 0.8)" />
        </TouchableOpacity>
        
        <Text style={styles.textForgot}>Forgot Password</Text>
        <Text style={styles.text}>Please enter your registered email or mobile to reset your password.</Text>

          <View>
            <Text style={styles.inputTitle}>Email / Mobile number</Text>
            <TextInput 
            style={styles.input}
            ></TextInput>
            <View style={{ borderBottomWidth: 2, borderBottomColor:'#D8D8D8', width: 300, }}></View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('CheckYourEmail')} style={styles.submitContainer}>
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Recover Password</Text>
          </TouchableOpacity>   
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },

  inputTitle: {
    marginTop: 20,
    color: '#ABB4BD',
    fontSize: 14,
  },

  input: {
    color: '#1D2029',
    fontSize: 14,
  },

  back: {
    marginTop: 86,
  },

  textForgot: {
    marginTop: 20,
    color: '#000',
    fontSize: 34,
    fontWeight: '700',
  },

  text: {
    marginTop: 20,  
    width: 308,
    height: 42,
    color: '#ABB4BD',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },

  submitContainer: {
    lineHeight: 21,
    width: 315,
    height: 56,
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 22, 84, 0.25)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
})
