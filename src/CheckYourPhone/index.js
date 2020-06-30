import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function ForgotPassword({ navigation }) {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Login')}>  
          <Ionicons name="ios-arrow-back" size={40} color="rgba(0, 0, 0, 0.8)" />
        </TouchableOpacity>
        
        <Text style={styles.textForgot}>Enter 4 digit code sent you at <Text style={{ color: '#FF1654', fontSize: 30, fontWeight: '700' }}> 435442344575</Text></Text>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginTop: 20, }}>
              <TextInput 
              style={styles.input}
              placeholder="5"
              ></TextInput>
              <View style={{ borderBottomWidth: 2, borderBottomColor:'#ABB4BD', width: 70, }}></View>
            </View>

            <View style={{ marginTop: 20, marginLeft: 20,}}>
              <TextInput 
              style={styles.input}
              placeholder="2"
              ></TextInput>
              <View style={{ borderBottomWidth: 2, borderBottomColor:'#ABB4BD', width: 70, }}></View>
            </View>

            <View style={{ marginTop: 20, marginLeft: 20,}}>
              <TextInput 
              style={styles.input}
              placeholder="7"
              ></TextInput>
              <View style={{ borderBottomWidth: 2, borderBottomColor:'#ABB4BD', width: 70, }}></View>
            </View>

            <View style={{ marginTop: 20, marginLeft: 20,}}>
              <TextInput 
              style={styles.input}
              placeholder="7"
              ></TextInput>
              <View style={{ borderBottomWidth: 2, borderBottomColor:'#ABB4BD', width: 70, }}></View>
            </View>

          </View>
         
          <TouchableOpacity onPress={() => navigation.navigate('CheckYourEmail')} style={styles.submitContainer}>
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Verify</Text>
          </TouchableOpacity>   

          <Text 
          style={[
            styles.text, { fontSize: 12, color: '#ABB4BD', textAlign: 'center', marginTop: 24, }
          ]}>Didn't recieve a verification code?
          {"\n"}
          <Text style={[styles.link, { marginLeft: 10, }]}>Resend Code | Change Number</Text></Text>
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
    textAlign: 'center',
    color: '#1D2029',
    fontSize: 38,
  },

  link: {
    color: '#FF1654',
    fontSize: 14,
    fontWeight: '500'
  },

  back: {
    marginTop: 86,
  },

  textForgot: {
    marginTop: 20,
    color: '#000',
    fontSize: 30,
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
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 22, 84, 0.25)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
})
