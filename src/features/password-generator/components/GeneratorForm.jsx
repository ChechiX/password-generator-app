import iconArrowRight from '../../../assets/images/icon-arrow-right.svg';
import { LengthControl } from './LengthControl';
import { OptionsList } from './OptionsList';
import { StrengthMeter } from './StrengthMeter';

export const GeneratorForm = () => {
  return (
    <form className="generator__form">
      <LengthControl />

      <OptionsList />

      <StrengthMeter />

      <button type="submit" className="generator__button">
        Generate
        <img src={iconArrowRight} alt="Arrow Right Icon" />
      </button>
    </form>
  );
};
