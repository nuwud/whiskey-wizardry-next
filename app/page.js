'use client';

import { useState } from 'react';
import GameInterface from '../components/GameInterface';

export default function Home() {
  return (
    <main>
      <h1>Whiskey Wizardry</h1>
      <GameInterface />
    </main>
  );
}