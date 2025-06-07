import { useRef, useState, useEffect, useCallback } from 'react';
import P from 'prop-types';

import * as Styled from './style';
import SplittedString from './SplittedString';

const TARGET_TEXT_EN = '<hi there, my name is>';
const SECOND_TARGET_TEXT_EN = '</and I bring designs to life on the web>';
const TARGET_TEXT_PT = '<olá, meu nome é>';
const SECOND_TARGET_TEXT_PT = '</e eu dou vida a designs na web>';
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 40;

const CHARS = '!@#$%^&*():{};|,.<>/?';

const HomeText = ({ animate, language = 'us' }) => {
  const intervalRefs = useRef([null, null]);

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const stopScramble = useCallback((targetText, setText, intervalIndex) => {
    clearInterval(intervalRefs.current[intervalIndex] || undefined);
    setText(targetText);
  }, []);

  const scramble = useCallback(
    (targetText, setText, intervalIndex) => {
      let pos = 0;

      intervalRefs.current[intervalIndex] = setInterval(() => {
        const scrambled = targetText
          .split('')
          .map((char, index) => {
            if (pos / CYCLES_PER_LETTER > index) {
              return char;
            }

            const randomCharIndex = Math.floor(Math.random() * CHARS.length);
            const randomChar = CHARS[randomCharIndex];

            return randomChar;
          })
          .join('');

        setText(scrambled);
        pos++;

        if (pos >= targetText.length * CYCLES_PER_LETTER) {
          stopScramble(targetText, setText, intervalIndex);
        }
      }, SHUFFLE_TIME);
    },
    [stopScramble],
  );

  useEffect(() => {
    if (animate) {
      setText1('');
      setText2('');
      const localRefs = [...intervalRefs.current];
      if (language === 'us') {
        scramble(TARGET_TEXT_EN, setText1, 0);
        scramble(SECOND_TARGET_TEXT_EN, setText2, 1);
      } else {
        scramble(TARGET_TEXT_PT, setText1, 0);
        scramble(SECOND_TARGET_TEXT_PT, setText2, 1);
      }

      return () => {
        localRefs.forEach(clearInterval);
      };
    }
  }, [animate, language, scramble]);

  return (
    <Styled.Container>
      <Styled.Paragraph>
        <span>{text1}</span>
      </Styled.Paragraph>
      <Styled.NameContainer>
        <SplittedString text="Gabriel" />
        <SplittedString text="Brunhara" delay={9} />
        <span className="barra"></span>
      </Styled.NameContainer>
      <Styled.Paragraph>
        <span>{text2}</span>
      </Styled.Paragraph>
    </Styled.Container>
  );
};

HomeText.propTypes = {
  animate: P.bool.isRequired,
  language: P.string,
};

export default HomeText;
