import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 1.375rem;
  
  h2{
    font-size: 1rem;
    color: ${props => props.theme.colors.primaryPinkDarkest};
    margin-bottom: .87rem;
    font-weight: 600;
  }

  img{
    max-width: 100%;
  }
`
