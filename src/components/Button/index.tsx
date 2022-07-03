import styled from "styled-components";

type ButtonProps = {
    width: string;
}

export const PrimaryButton = styled.button<ButtonProps>`
    background: linear-gradient(354.34deg,#eb1a29 4.51%,#ff00bc 95.49%);  
    color: white;
    border-radius: 0 0 32px 0;
    box-shadow: 0 4px 4px rgba(0,0,0,.25);
    border: none;
    font-weight: 300;
    font-size: 12px;
    line-height: 2rem;
    width: ${props => props.width};
    padding: 0;
    max-width: 18.75rem;
    display: block;
`