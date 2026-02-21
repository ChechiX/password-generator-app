export const OptionsList = () => {
  return (
    <div className="generator__controls">
      <div>
        <input type="checkbox" id="uppercase" />

        <label htmlFor="uppercase">Include Uppercase Letters</label>
      </div>

      <div>
        <input type="checkbox" id="lowercase" />

        <label htmlFor="lowercase">Include Lowercase Letters</label>
      </div>

      <div>
        <input type="checkbox" id="numbers" />

        <label htmlFor="numbers">Include Numbers</label>
      </div>

      <div>
        <input type="checkbox" id="symbols" />

        <label htmlFor="symbols">Include Symbols</label>
      </div>
    </div>
  );
};
