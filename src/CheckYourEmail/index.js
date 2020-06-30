import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Mail from '../assets/images/MailPlus1.png';

export default function CheckYourEmail({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.back}>
        <Ionicons name="md-close" size={34} color="rgba(0, 0, 0, 0.6)" />
      </TouchableOpacity>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50, }}>
       <Image source={Mail}/>
      </View>
      <View style={styles.containerRecover}>
        <Text style={{ fontSize: 25, color: '#1D2029', marginTop: 10, }}>Check Your Email</Text>
        <Text style={{ fontSize: 18, color: '#ABB4BD', marginTop: 10, textAlign: 'center' }}>We have sent you a reset password link on you registered email address</Text>

        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')} style={styles.submitContainer}>
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Reset Password</Text>
          </TouchableOpacity>   
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },

  containerRecover: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  back: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 86,
  },

  submitContainer: {
    lineHeight: 21,
    width: 243,
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
