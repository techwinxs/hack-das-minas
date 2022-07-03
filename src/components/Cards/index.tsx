import styled from "styled-components"
import { ReactComponent as Book } from "../../assets/dashboard/book-solid.svg"
import { ReactComponent as ShoppingCart } from "../../assets/dashboard/cart-shopping-solid.svg"
import { ReactComponent as Comment } from "../../assets/dashboard/comment-solid.svg"


const Wrapper = styled.div`
    padding: 1vw;
`
const Title = styled.h3`
    color: ${props => props.theme.colors.primaryPinkMedium};
    font-weight: 500;
    margin-left: 10px;
`
const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 10px;
`
const Content = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.theme.colors.secondGrayLight};
    margin-bottom: 15px;
`
const Small = styled.small`
    color: ${props => props.theme.colors.primaryPinkDarkest};
`

const Link = styled.a`
    color: ${props => props.theme.colors.primaryPinkMedium};
    text-decoration: underline;
    margin-left: 10px ;
    cursor: pointer;
`

export function Card(props: any) {
    return (
        <Wrapper>
            <DivRow>
                {props.conteudo ? <Book style={{ width: "20px" }} /> : ""}
                {props.shopping ? <ShoppingCart style={{ width: "20px" }} /> : ""}
                {props.chama ? <Comment style={{ width: "20px" }} /> : ""}
                <Title>{props.titulo}</Title>
            </DivRow>
            <Content>
                {props.content}
            </Content>
            <Small>
                <i></i>
                <Link href={props.link}>{props.descricao}</Link>
            </Small>
        </Wrapper>
    )
}