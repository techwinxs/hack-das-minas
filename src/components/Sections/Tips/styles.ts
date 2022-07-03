import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(180deg, #7228E3 0%, #F048A5 100%);
  padding: 1.25rem 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0px;
  margin: 2rem 0 ;

  & > section{
    margin: 0;
  }
  
  h2{
    font-size: 1rem;
    color: #fff;
    margin-bottom: .87rem;
    font-weight: 600;
  }

  p{
    color: #fff;
    font-size: .75rem;
  }

`

export const ContentButton = styled.a`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
`

export const Button = styled.a`
  color: #fff;
  font-size: .75rem;
`