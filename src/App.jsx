import iconCopy from './assets/images/icon-copy.svg';
import iconArrowRight from './assets/images/icon-arrow-right.svg';

export const App = () => {
  return (
    <main className="generator">
      <h1 className="generator__header">Password Generator</h1>
      <section className="generator__panel">
        <div className="generator__output">
          <output>P4$5W0rD!</output>

          <button>
            <img src={iconCopy} alt="Copy Icon" />
          </button>
        </div>

        <div className="generator__length">
          <label htmlFor="length">Character Length</label>
          <span>0</span>

          <input type="range" min={0} max={20} value={0} id="length" />
        </div>

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

        <div className="generator__strength">
          <p>Strength</p>

          <div className="generator__strength-bars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <button className="generator__button">
          Generate <img src={iconArrowRight} alt="Arrow Right Icon" />
        </button>
      </section>
    </main>
  );
};
