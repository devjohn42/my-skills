import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './app/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#af0' />
      <Home />
    </>
  );
}
