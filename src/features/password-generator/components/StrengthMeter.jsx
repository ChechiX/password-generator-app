export const StrengthMeter = ({ count }) => {
  return (
    <div className="generator__strength-container">
      <div className="generator__strength">
        <p>Strength</p>

        <div className="generator__strength-bars">
          <div
            className={count > 0 ? 'generator__strength-bar--filled' : ''}
          ></div>
          <div
            className={count > 1 ? 'generator__strength-bar--filled' : ''}
          ></div>
          <div
            className={count > 2 ? 'generator__strength-bar--filled' : ''}
          ></div>
          <div
            className={count > 3 ? 'generator__strength-bar--filled' : ''}
          ></div>
        </div>
      </div>
    </div>
  );
};
