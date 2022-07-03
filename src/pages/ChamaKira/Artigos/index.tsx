import styled from "styled-components";
import { CardArtigos } from "../../../components/CardArtigos";
import { HeaderChamaKira } from "../../../components/HeaderChamaKira";


const Wrapper = styled.div`
    padding: 5%;
    margin: 10px auto;
`

export function Artigos() {
    const src_one = require("../../../assets/chamaakira/ginecologista-1.PNG")
    const src_three = require("../../../assets/chamaakira/ginecologista-3.PNG")
    const src_foto_one = require("../../../assets/chamaakira/image241.PNG")
    const src_foto_two = require("../../../assets/chamaakira/image242.PNG")

    return (
        <Wrapper>
            <HeaderChamaKira />
            <CardArtigos src_foto_gineco={src_one} src_foto_manchete={src_foto_one} name="Marcela Riveira" />
            <CardArtigos src_foto_gineco={src_three} src_foto_manchete={src_foto_two} name="Marcela Riveira" />
        </Wrapper>
    )
}