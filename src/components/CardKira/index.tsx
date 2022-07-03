import { PrimaryButton } from "../Button";
import { ReactComponent as Local } from "../../assets/chamaakira/Location.svg"
import styled from "styled-components";
import React, { useState } from "react";

type CardProps = {
    like?: boolean;
    width?: string;
    end?: boolean;
}

const Coracao = styled.img<CardProps>`
    display: ${props => props.like ? "None" : "block"} ;
    margin-bottom: 20px;
`
const CoracaoLiked = styled.img<CardProps>`
    display: ${props => props.like ? "block" : "None"} ;
    margin-bottom: 20px;
`

const Description = styled.p`
    color: #A8A7A7;
`

const DivRow = styled.div <CardProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:${props => props.width};
`
const Title = styled.h3`
    color:black;
`
const DivFlex = styled.div<CardProps>`
    width: 33vw;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.end ? "flex-end" : "flex-start"};
    justify-content: center;
`

export function CardKira(props: any) {
    const [active, setActive] = useState(false)

    function handleClick() {
        setActive(!active)
    }

    return (
        <DivRow width="50vw">
            <div>
                <img src={props.src_ginecologista} alt=""></img>
            </div>
            <DivRow width="">
                <DivFlex>
                    <Title>{props.nome}</Title>
                    <Description>Ginecologista</Description>
                    <DivRow width="30vw">
                        <Local />
                        <Description>{props.bairro}</Description>
                    </DivRow>
                </DivFlex>
                <DivFlex end>
                    <Coracao like={active} onClick={handleClick} src={require("../../assets/chamaakira/coracaodisabled.PNG")} />
                    <CoracaoLiked like={active} onClick={handleClick} src={require("../../assets/chamaakira/coracaoactive.PNG")} />
                    <PrimaryButton width="35vw">Ver Perfil</PrimaryButton>
                </DivFlex>
            </DivRow>
        </DivRow>
    )
}