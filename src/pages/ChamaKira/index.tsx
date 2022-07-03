import styled from "styled-components";
import { CardKira } from "../../components/CardKira";
import { HeaderChamaKira } from "../../components/HeaderChamaKira";

const Wrapper = styled.div`
    padding: 5%;
`

export function ChamaKira() {
    const src_one = require("../../assets/chamaakira/ginecologista-1.PNG")
    const src_two = require("../../assets/chamaakira/ginecologista-2.PNG")
    const src_three = require("../../assets/chamaakira/ginecologista-3.PNG")
    const src_four = require("../../assets/chamaakira/ginecologista-4.PNG")
    const src_five = require("../../assets/chamaakira/ginecologista-5.PNG")

    return (
        <Wrapper>
            <HeaderChamaKira />
            <CardKira nome="Marcela Riveira" bairro="Zona Sul - SP" src_ginecologista={src_one} />
            <CardKira nome="Aline Sobral" bairro="Zona Norte - SP" src_ginecologista={src_two} />
            <CardKira nome="Noemi Panini" bairro="Zona Sul - SP" src_ginecologista={src_three} />
            <CardKira nome="Gabriela Ricci" bairro="Zona Sul - SP" src_ginecologista={src_four} />
            <CardKira nome="Juliana Crispiano" bairro="Zona Norte - SP" src_ginecologista={src_five} />

        </Wrapper>
    );
}