import styled from "styled-components"
import { ReactComponent as Chalkboard } from "../../assets/dashboard/chalkboard-user-solid.svg"


const GradientBanner = styled.div`
    background: linear-gradient(180deg,#7028e4 0,#fe4b9f 100%);
    padding: 22px 16px;
    margin-top: 24px;
`
const Title = styled.h2`
    font-size: 24px;
    margin-left: 10px;
    color:white;
`

export function BannerIntimus() {
    return (
        <div>
            <a href="/intimus-nas-escolas">
                <GradientBanner>
                    <div style={{ display: "flex" }}>
                        <Chalkboard style={{ width: "50px" }} />
                        <div>
                            <Title>
                                Intimus® nas Escolas
                            </Title>
                        </div>
                    </div>
                    <p style={{ color: "white", fontSize: "14px", fontWeight: "300" }}>Conteúdos feitos especialmente para ajudar você na jornada de autoconhecimento íntimo</p>
                </GradientBanner>
            </a>
        </div >
    )
}