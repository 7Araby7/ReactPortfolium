import * as Styled from './style';

const HeaderText = () => {
  const name = 'Gabriel Brunhara';

  return (
    <Styled.Container>
      <Styled.Paragraph>
        <b>hi there, my name is</b>
      </Styled.Paragraph>
      <Styled.NameContainer>
        {name.split('').map((char, idx) => (
          <Styled.Letter key={idx} $index={idx}>
            <b>{char}</b>
          </Styled.Letter>
        ))}
      </Styled.NameContainer>
      <Styled.Paragraph>
        <b>and I bring designs to life on the web.</b>
      </Styled.Paragraph>
    </Styled.Container>
  );
};

export default HeaderText;
