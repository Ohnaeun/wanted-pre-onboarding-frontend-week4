import { styled } from 'styled-components';

function Title() {
  return (
    <StyledTitle>
      국내 모든 임상시험 검색하고
      <br />
      온라인으로 참여하기
    </StyledTitle>
  );
}

export default Title;

const StyledTitle = styled.h2`
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin-bottom: 40px;
`;
