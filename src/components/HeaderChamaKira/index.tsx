import styled from "styled-components"

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
    justify-content: space-around;
    margin-bottom: 5vh;
`

const Link = styled.a`
    color: ${props => props.theme.colors.secondGrayLight};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.primaryPinkDarkest};
    margin-left: 10px ;
    cursor: pointer;
`

export function HeaderChamaKira() {
    return (
        <DivRow>
            <Link href="/chamakira">Ginecologistas</Link>
            <Link href="/artigos">Artigos</Link>
            <Link href="/duvidas">Dúvidas</Link>
        </DivRow>
    )
}