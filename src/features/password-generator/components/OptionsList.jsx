export const OptionsList = ({ options, onToggle }) => {
  return (
    <div className="generator__controls">
      <div>
        <input
          type="checkbox"
          id="uppercase"
          checked={options.uppercase}
          onChange={() => onToggle('uppercase')}
        />

        <label htmlFor="uppercase">Include Uppercase Letters</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="lowercase"
          checked={options.lowercase}
          onChange={() => onToggle('lowercase')}
        />

        <label htmlFor="lowercase">Include Lowercase Letters</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="numbers"
          checked={options.numbers}
          onChange={() => onToggle('numbers')}
        />

        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="symbols"
          checked={options.symbols}
          onChange={() => onToggle('symbols')}
        />

        <label htmlFor="symbols">Include Symbols</label>
      </div>
    </div>
  );
};
