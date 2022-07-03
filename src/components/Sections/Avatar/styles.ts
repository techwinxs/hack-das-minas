import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
`;

export const ContainerAvatar = styled.div`
  background: #ffcec0;
  border-radius: 1.25rem;
  min-height: 240px;
  position: relative;
  margin-bottom: 1rem;
`;

export const Button = styled.a`
  margin-top: 30px;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.87rem;
  background: ${(props) => props.theme.colors.gradient};
  height: 30px;
  box-shadow: 0px 2.53919px 2.53919px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 17.7743px 0px;
`;
