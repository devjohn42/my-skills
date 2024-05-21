import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  const handleAddNewSkill = () => {
    setMySkills([...mySkills, newSkill]);
  };

  useEffect(() => {
    const current = new Date().getHours();
    if (current < 12) {
      setGretting('Good Morning');
    }
    if (current >= 12 && current < 18) {
      setGretting('Good Afternoon');
    }
    if (current > 18 && current <= 23) {
      setGretting('Good Night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, DevJohn</Text>
      <Text style={styles.gretting}>{gretting}</Text>

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
  },
  gretting: {
    color: '#af0',
    fontSize: 18,
    fontWeight: '500'
  }
});
