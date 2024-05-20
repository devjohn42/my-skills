import React, { useState } from 'react';
import { StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleAddewSkill = () => {
    setMySkills([...mySkills, newSkill]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor='#23232f' />
      <Text style={styles.title}>My Skills</Text>

      <TextInput
        style={styles.input}
        placeholder='new skill'
        placeholderTextColor={'#555'}
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleAddewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 42, fontWeight: '500' }]}>
        {' '}
        My Skills
      </Text>

      {mySkills.map((skill, index) => (
        <TouchableOpacity
          style={styles.buttonSkill}
          key={index}
          activeOpacity={0.8}
        >
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23232f',
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  title: {
    color: '#af0',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    padding: Platform.OS === 'android' ? 15 : 12,
    marginTop: 32,
    borderRadius: 8,

    color: '#af0',
    fontSize: 18,
    fontWeight: '500'
  },
  button: {
    backgroundColor: '#af0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#1f1e25',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5
  },
  textSkill: {
    color: '#af0',
    fontSize: 18,
    fontWeight: '500'
  }
});
