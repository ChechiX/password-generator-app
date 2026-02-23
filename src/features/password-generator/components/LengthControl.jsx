export const LengthControl = ({ length, onChange, progress }) => {
  return (
    <div className="generator__length">
      <label className="generator__character-label" htmlFor="length">
        Character Length
      </label>

      <span className="generator__character-length">{length}</span>

      <div className="generator__length-wrapper">
        <input
          style={{ '--progress': `${progress}%` }}
          className="generator__length-input"
          type="range"
          min={0}
          max={20}
          value={length}
          step={1}
          id="length"
          onChange={(e) => onChange(+e.target.value)}
        />
      </div>
    </div>
  );
};
