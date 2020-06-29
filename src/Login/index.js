import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import logo from '../assets/Group.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import InputTextField from '../components/inputTextField';

export default function Login({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto"/>
      <View>

        <View style={{ marginTop: 68, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.image} source={logo}/>
        </View>

        <View style={{ marginTop: 48, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image source={facebook} style={styles.socialLogo}/>
              <Text style={[ styles.text, styles.socialText ]}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image source={google} style={styles.socialLogo}/>
              <Text style={[ styles.text, styles.socialText ]}>Google</Text>
            </View>
          </TouchableOpacity>

          </View>
          <View>

          <Text 
          style={[
             styles.text, { 
              color: '#ABB4BD', 
             fontSize: 15, 
             textAlign: 'center', 
             marginVertical: 20 
             } 
             ]}>or</Text>

          <InputTextField title="Email"></InputTextField>
          <InputTextField 
          style={{ marginTop: 32, marginBottom: 8, }} 
          title="Password"
          isSecure={true}
          ></InputTextField>

          <Text onPress={() => navigation.navigate('ForgotPassword')} style={[ styles.text, styles.link, { textAlign: 'right' } ]}>Forgot Password?</Text>

          <TouchableOpacity style={styles.submitContainer}>
            <Text style={[ styles.text, { color: '#fff', fontWeight: '600', fontSize: 16 } ]}>Login</Text>
          </TouchableOpacity>   
          

          <Text style={[
            styles.text, { fontSize: 14, color: '#ABB4BD', textAlign: 'center', marginTop: 24, }
          ]}>Don't have an account? <Text style={ styles.link }>Register Now</Text></Text>
        </View>

      </View>
    </ScrollView>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },

  text: {
    color: '#1D2029',
  },  

  socialText: {
    marginTop: 10,
  },

  link: {
    color: '#FF1654',
    fontSize: 14,
    fontWeight: '500'
  },

  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5
  },

  socialLogo: { 
    height: 40,
    width: 40,
    marginRight: 8,
  },

  submitContainer: {
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 22, 84, 0.24)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
})