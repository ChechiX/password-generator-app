import { useState } from 'react';
import { LengthControl } from './LengthControl';
import { OptionsList } from './OptionsList';
import { StrengthMeter } from './StrengthMeter';

const min = 0;
const max = 20;

export const GeneratorForm = ({ onGenerate }) => {
  const [length, setLength] = useState(0);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const strengthCount =
    Number(options.uppercase) +
    Number(options.lowercase) +
    Number(options.numbers) +
    Number(options.symbols);

  const progress = ((length - min) / (max - min)) * 100;
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  const handleLengthChange = (value) => {
    setLength(value);
  };

  const handleOptionChange = (name) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: !prevOptions[name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (length === 0) return;

    const hasAnyOption =
      options.uppercase ||
      options.lowercase ||
      options.numbers ||
      options.symbols;

    if (!hasAnyOption) return;

    const activeSets = [];

    if (options.uppercase) activeSets.push(uppercase);
    if (options.lowercase) activeSets.push(lowercase);
    if (options.numbers) activeSets.push(numbers);
    if (options.symbols) activeSets.push(symbols);

    if (length < activeSets.length) return;

    const result = [];

    for (let i = 0; i < activeSets.length; i++) {
      const set = activeSets[i];
      const char = set[Math.floor(Math.random() * set.length)];

      result.push(char);
    }

    const pool = activeSets.join('');

    while (result.length < length) {
      const char = pool[Math.floor(Math.random() * pool.length)];
      result.push(char);
    }

    // Shuffle the result array to ensure randomness
    for (let j = result.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [result[j], result[k]] = [result[k], result[j]];
    }

    onGenerate(result.join(''));
  };

  return (
    <form className="generator__form" onSubmit={handleSubmit}>
      <LengthControl
        length={length}
        onChange={handleLengthChange}
        progress={progress}
      />

      <OptionsList options={options} onToggle={handleOptionChange} />

      <StrengthMeter count={strengthCount} />

      <button type="submit" className="generator__button">
        Generate
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </button>
    </form>
  );
};
