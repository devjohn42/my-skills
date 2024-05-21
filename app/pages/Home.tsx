import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillProps {
  id: string;
  name: string;
  level?: Date;
}

export default function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<SkillProps[]>([]);
  const [gretting, setGretting] = useState<string>('');

  const handleAddNewSkill = (): void => {
    const skillData = {
      id: String(new Date().getTime()),
      name: newSkill
    };
    setMySkills([...mySkills, skillData]);
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

      <Button title='Add' onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 42, fontWeight: '500' }]}>
        {' '}
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name} key={item.id} />}
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
