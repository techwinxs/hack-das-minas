import IconSkin from '../../UI/Icons/iconSkin'
import IconHair from '../../UI/Icons/IconHair'
import IconClothes from '../../UI/Icons/IconClothes'
import IconFace from '../../UI/Icons/IconFace'

import { characteristics } from '../../helpers/menuCharacteristics'

import { MenuItems, MenuListItems, MenuItem, Button  } from './styles'

const Menu : React.FC = () => {
    const choiceIcon = (type: string) => {
        switch(type){
            case 'skin':
                return <IconSkin />
            case 'hair':
                return <IconHair />    
            case 'shirt':
                return <IconClothes />    
            case 'face':
                return <IconFace />    
            default:
                return null;
        }
    }

    if (!characteristics.length) {
        return null
    }

    return (
        <MenuItems>
            <MenuListItems>
                {
                    characteristics.map(({name}) => {
                        return(
                            <MenuItem>
                                <Button>
                                    {choiceIcon(name)}
                                </Button>
                            </MenuItem>
                        )
                    })
                }
            </MenuListItems>
        </MenuItems>
    )
}

export default Menu