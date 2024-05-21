import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SkillCard({ skill, index }) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={0.8}
      key={index}
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
