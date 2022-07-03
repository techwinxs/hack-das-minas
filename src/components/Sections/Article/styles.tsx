import styled from "styled-components";

export const Container = styled.section`
  h2{
    font-size: 1rem;
    color: ${props => props.theme.colors.primaryPinkDarkest};
    margin-bottom: .87rem;
    font-weight: 600;
    text-align: center;
    text-align: left;
  }

  img{
    margin-bottom: 1.125rem;
  }

  p{
    margin-bottom: 1.125rem;
    color:  #626162;
    font-size: .75rem;
  }

`

export const ContentButton = styled.a`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`


export const Button = styled.a`
  max-width: 180px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: .87rem;
  background: ${props => props.theme.colors.gradient};
  height: 30px;
  box-shadow: 0px 2.53919px 2.53919px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 17.7743px 0px;
`
