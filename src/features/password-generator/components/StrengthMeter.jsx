export const StrengthMeter = ({ count }) => {
  let strengthLabel = '';

  if (count === 1 || count === 2) strengthLabel = 'Weak';
  if (count === 3) strengthLabel = 'Medium';
  if (count === 4) strengthLabel = 'Strong';

  return (
    <div className="generator__strength-container">
      <div className="generator__strength">
        <p>Strength</p>

        <div className="generator__strength-indicator">
          <span className="generator__strength-label">{strengthLabel}</span>

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
    </div>
  );
};
