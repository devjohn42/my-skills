import React, { useState } from 'react';
import { StatusBar, TextInput } from 'react-native';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => {
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

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 42, fontWeight: '500' }]}>
        {' '}
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => <SkillCard skill={item} key={index} />}
      />
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
  }
});
