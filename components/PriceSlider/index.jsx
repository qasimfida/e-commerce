import { PriceSliderWrapper } from './styles';

export const PriceSlider = ({ max, min, value, onChange }) => {
  return (
    <PriceSliderWrapper>
      {value} <br />
      <input
        type="range"
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </PriceSliderWrapper>
  );
};

export default PriceSlider;
