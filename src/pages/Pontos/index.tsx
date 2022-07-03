import React from "react";
import styled from "styled-components";
import CardPontos from "../../components/CardPontos";


const Wrapper = styled.div`
    padding: 5vw;
`
const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    align-items: center;
`
const NumPoints = styled.h4`
    margin-left: 10px;
`

const Title = styled.p`
    color:${props => props.theme.colors.primaryPinkMedium} ;
    font-weight: 700;
`
const Description = styled.p`
    color:${props => props.theme.colors.primaryPinkMedium} ;
    font-weight: 300;
`

export function Pontos() {
    const descriptionCardOne = <React.Fragment>
        <DivRow>
            <p>Você possui</p> <NumPoints>70 pontos</NumPoints>
        </DivRow>
    </React.Fragment>
    const descriptionCardTwo = <React.Fragment>
        <DivFlex>
            <Title>Lojas</Title>
            <Description>Estabelecimentos cadastrados.</Description></DivFlex>
    </React.Fragment>
    const descriptionCardThree = <React.Fragment>
        <DivFlex>
            <Title>Produtos</Title>
            <Description>Encontre produtos incríveis.</Description></DivFlex>
    </React.Fragment>
    const descriptionCardFour = <React.Fragment>
        <DivFlex>
            <Title>Avatar</Title>
            <Description>Troque pontos por acessórios inéditos.</Description></DivFlex>
    </React.Fragment>
    return (
        <Wrapper>
            <CardPontos points background={"linear-gradient(180deg, #7228E3 0%, #F048A5 100%);"} description={descriptionCardOne} />
            <Description>Confira a lista dos produtos e serviços que você poderá trocar com os seus pontos.</Description>
            <Title>Disponíveis para troca</Title>
            <CardPontos store background={"#ECF1F4;"} description={descriptionCardTwo} needsButton />
            <CardPontos products background={"#ECF1F4;"} description={descriptionCardThree} needsButton />
            <CardPontos products background={"#ECF1F4;"} description={descriptionCardFour} needsButton /></Wrapper >
    )
}