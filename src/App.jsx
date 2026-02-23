import { useState } from 'react';
import { GeneratorForm } from './features/password-generator/components/GeneratorForm';
import { PasswordOutput } from './features/password-generator/components/PasswordOutput';

export const App = () => {
  const [password, setPassword] = useState('');

  return (
    <main className="generator">
      <h1 className="generator__header">Password Generator</h1>
      <section className="generator__panel">
        <PasswordOutput password={password} />

        <GeneratorForm onGenerate={setPassword} />
      </section>
    </main>
  );
};
