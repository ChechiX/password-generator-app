import iconCopy from '../../../assets/images/icon-copy.svg';

export const CopyButton = () => {
  return (
    <button type="button" className="generator__copy-button">
      <img src={iconCopy} alt="Copy Icon" />
    </button>
  );
};
