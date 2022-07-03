import styled from "styled-components";

export const Container = styled.section`
    margin-top: 3.5rem;
    margin-bottom: 1.375rem;

    h2{
        font-size: 1.125rem;
        color: ${props => props.theme.colors.primaryPinkDarkest};
        text-align: center;
        margin-bottom: 1.5rem;
    }
`

export const Content = styled.section`
    display: flex;

    div{
        width: 100%;

        &:nth-of-type(1){
            width: calc(100% - 160px);
        }
    }


`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4{
        color: #3B206C;
        font-size: .87rem;
        margin-bottom: .75rem;
        font-weight: 500;
    }
`

export const ListInfo = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem 0;
    margin-bottom: 1.375rem;
`

export const InfoItem = styled.li`

    p{
        
        span{
            font-size: .75rem;
            color: #626162;
            font-weight: 400;
            display: block;
            margin-bottom: .2rem;
        }

        strong{
            font-size: .87rem;
            color: ${props => props.theme.colors.primaryPinkDarkest};
            font-weight: 600;
            display: block;
        }
    }
`

export const Button = styled.a`
    display: flex;
    width: 100%;
    height: 30px;
    color: #fff;
    font-size: .75rem;
    background: ${props => props.theme.colors.gradient};
    border-radius: 0px 0px 15.3056px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2.18652px 2.18652px rgba(0, 0, 0, 0.25);
`