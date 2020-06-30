import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Register({ navigation }) {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Login')}>  
          <Ionicons name="ios-arrow-back" size={40} color="rgba(0, 0, 0, 0.8)" />
        </TouchableOpacity>
        
        <Text style={styles.textForgot}>Register to Vermo</Text>

        <View>
          <Text style={styles.inputTitle}>Full Name</Text>
          <TextInput 
          style={styles.input}   
          placeholder="Vermo"   
          autoCorrect={false}    
          ></TextInput>
          <View style={{ borderBottomWidth: 2, borderBottomColor:'#D8D8D8', width: 300, }}></View>
        </View>

        <View>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput 
          style={styles.input}
          placeholder="vermo@gmail.com"
          autoCorrect={false}
          ></TextInput>         
          <View style={{ borderBottomWidth: 2, borderBottomColor:'#D8D8D8', width: 300, }}></View>
        </View>

        <View>
          <Text style={styles.inputTitle}>Mobile Number</Text>         
            <TextInput 
            placeholder="9999-9999"
            style={styles.input}
            keyboardType="number-pad"   
            autoCorrect={false}
            ></TextInput>   
          <View style={{ borderBottomWidth: 2, borderBottomColor:'#D8D8D8', width: 300, }}></View>
        </View>
       
        <View>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput 
          style={styles.input}
          secureTextEntry={true}
          placeholder="1b3da4d"
          autoCorrect={false}
          ></TextInput>
          <View style={{ borderBottomWidth: 2, borderBottomColor:'#D8D8D8', width: 300, }}></View>
        </View>

        <View>
          <Text style={styles.inputTitle}>Confirm New Password</Text>
          <TextInput 
          style={styles.input}
          secureTextEntry={true}
          placeholder="1b3da4d"
          autoCorrect={false}
          ></TextInput>
          <View style={{ borderBottomWidth: 2, borderBottomColor:'#D8D8D8', width: 300, }}></View>
        </View>

          <TouchableOpacity onPress={() => navigation.navigate('CheckYourPhone')} style={styles.submitContainer}>
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Register</Text>
          </TouchableOpacity>   

          <Text 
          style={[
            styles.text, { fontSize: 12, color: '#ABB4BD', textAlign: 'center', marginTop: 24, }
          ]}>By registering you agree to <Text style={ styles.link }>Terms & Conditions</Text>
          {"\n"}
          and
          <Text style={[styles.link, { marginLeft: 10, }]}> Privacy Policy</Text> of the Vermo</Text>
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

  link: {
    color: '#FF1654',
    fontSize: 12,
    fontWeight: '500'
  },

  input: {
    color: '#1D2029',
    fontSize: 14,
    marginTop: 20,
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
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 22, 84, 0.25)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
})
