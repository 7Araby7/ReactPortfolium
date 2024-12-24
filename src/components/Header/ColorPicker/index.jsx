import P from 'prop-types';

import * as Styled from './style';

const ColorPicker = ({ handleColor }) => {
  return (
    <Styled.colorPicker>
      <Styled.ButtonRed $index={1} onClick={() => handleColor('red')}>
        <Styled.Hole />
      </Styled.ButtonRed>
      <Styled.ButtonOrange $index={2} onClick={() => handleColor('orange')}>
        <Styled.Hole />
      </Styled.ButtonOrange>
      <Styled.ButtonYellow $index={3} onClick={() => handleColor('yellow')}>
        <Styled.Hole />
      </Styled.ButtonYellow>
      <Styled.ButtonGreen $index={4} onClick={() => handleColor('green')}>
        <Styled.Hole />
      </Styled.ButtonGreen>
      <Styled.ButtonTeal $index={5} onClick={() => handleColor('teal')}>
        <Styled.Hole />
      </Styled.ButtonTeal>
      <Styled.ButtonBlue $index={6} onClick={() => handleColor('blue')}>
        <Styled.Hole />
      </Styled.ButtonBlue>
      <Styled.ButtonPurple $index={7} onClick={() => handleColor('purple')}>
        <Styled.Hole />
      </Styled.ButtonPurple>
      <Styled.ButtonPink $index={8} onClick={() => handleColor('pink')}>
        <Styled.Hole />
      </Styled.ButtonPink>
      <Styled.ButtonMagenta $index={9} onClick={() => handleColor('magenta')}>
        <Styled.Hole />
      </Styled.ButtonMagenta>
      <Styled.ButtonTheme $index={10} onClick={() => handleColor('themeOposite')}>
        <Styled.Hole />
      </Styled.ButtonTheme>
    </Styled.colorPicker>
  );
};

ColorPicker.propTypes = {
  handleColor: P.func.isRequired,
};

export default ColorPicker;
