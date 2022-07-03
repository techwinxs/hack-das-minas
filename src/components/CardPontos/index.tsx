import styled from "styled-components";
import { ReactComponent as Points } from "../../assets/pontos/points.svg"
import { ReactComponent as Products } from "../../assets/pontos/products.svg"
import { ReactComponent as Store } from "../../assets/pontos/store.svg"
import { ReactComponent as Magic } from "../../assets/pontos/magic.svg"
import { PrimaryButton } from "../Button";

type CardPontosProps = {
    background: string;
}

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`



const CardPontosStyle = styled.div<CardPontosProps>`
/* width: 353px;
height: 89px; */
left: 28px;
top: 102px;
background: ${props => props.background};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px 0px;
padding: 5vw;
margin: 5vw 0;
`
const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;    
    justify-content: center;
    margin-left: 10px;
`

export default function CardPontos(props: any) {
    const background = props.background
    return (
        <CardPontosStyle background={background} >
            <DivRow>
                {props.points ? <Points /> : ""}
                {props.products ? <Products /> : ""}
                {props.store ? <Store /> : ""}
                {props.magic ? <Magic /> : ""}
                <DivFlex>
                    {props.description}
                    {props.needsButton ? <PrimaryButton width="50%">"Visualizar"</PrimaryButton> : ""}</DivFlex>
            </DivRow>

        </CardPontosStyle>
    )
}