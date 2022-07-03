import styled from "styled-components";

export const Container = styled.section`
    margin-top: 3.5rem;
    margin-bottom: 1.375rem;

    h2{
        font-size: 1rem;
        color: ${props => props.theme.colors.primaryPinkDarkest};
        margin-bottom: 1.5rem;
        font-weight: 600;
    }
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;

    p{
        color: #626162;
        font-size: .75rem;
        margin-bottom: 1rem;
    }

`