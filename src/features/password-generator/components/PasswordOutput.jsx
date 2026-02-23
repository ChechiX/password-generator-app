import { useState } from 'react';
import { CopyButton } from './CopyButton';

export const PasswordOutput = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={
        password
          ? 'generator__output generator__output--active'
          : 'generator__output'
      }
    >
      <output>{password || 'P4$5W0rD!'}</output>

      <div className="generator__copy">
        {copied && (
          <span className="generator__copy-notification">Copied!</span>
        )}

        <CopyButton password={password} onCopy={handleCopy} />
      </div>
    </div>
  );
};
