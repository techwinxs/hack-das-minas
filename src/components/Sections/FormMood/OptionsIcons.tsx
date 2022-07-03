import { IconAngry, IconDiscouraged, IconSad } from "../../ui/Icons/IconsHumor";
import { IconHeart, IconNoHeart } from "../../ui/Icons/IconsSex";
import {
  IconAcne,
  IconFatigue,
  IconNausea,
  IconPain,
} from "../../ui/Icons/IconsSintomas";
import {
  IconVaginaEggWhite,
  IconVaginaPasty,
  IconVaginaSecretion,
  IconVaginaSlimy,
} from "../../ui/Icons/IconsVagina";

interface IOptionsCheckbox {
  type: string;
}

const OptionsCheckbox: React.FC<IOptionsCheckbox> = ({ type }) => {
  switch (type) {
    case "angry":
      return <IconAngry />;
    case "discouraged":
      return <IconDiscouraged />;
    case "sad":
      return <IconSad />;
    case "pain":
      return <IconPain />;
    case "acne":
      return <IconAcne />;
    case "fatigue":
      return <IconFatigue />;
    case "nausea":
      return <IconNausea />;
    case "hadSex":
        return <IconHeart />;
    case "noHadSex":
        return <IconNoHeart />;
   case "noSecretion":
      return <IconVaginaSecretion />;
    case "pasty":
      return <IconVaginaPasty />;
    case "slimy":
      return <IconVaginaSlimy />;
    case "eggWhite":
      return <IconVaginaEggWhite />;
    default:
      return null;
  }
};

export default OptionsCheckbox;
