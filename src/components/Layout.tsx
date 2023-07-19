import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Title from './Title';

function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Container>
        <Title />
        {children}
      </Container>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  height: fit-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #cceaff;
`;

const Container = styled.div`
  max-width: 1040px;
  height: 463px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
