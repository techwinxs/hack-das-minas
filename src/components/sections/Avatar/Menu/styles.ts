import styled from "styled-components";

export const MenuItems = styled.nav`
    width: 30px;
    position: absolute;
    right: 1rem;
    top: 1.25rem;
`

export const MenuListItems = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const MenuItem = styled.li`
    display: flex;
    justify-content: center;

    &.active{
        svg path{
           fill:  ${props => props.theme.colors.primaryPinkDarkest};
        }
    }
`

export const Button = styled.button`
`