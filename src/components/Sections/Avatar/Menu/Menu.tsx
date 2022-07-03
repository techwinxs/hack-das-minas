

import { characteristics } from '../../../../helpers/menuCharacteristics'
import IconClothes from '../../../ui/Icons/IconClothes'
import IconFace from '../../../ui/Icons/IconFace'
import IconHair from '../../../ui/Icons/IconHair'
import IconSkin from '../../../ui/Icons/iconSkin'

import { MenuItems, MenuListItems, MenuItem, Button } from './styles'

interface IMenu {
    setTabActive: React.Dispatch<React.SetStateAction<string>>
    active: string
}

const Menu: React.FC<IMenu> = ({ setTabActive, active }) => {
    const choiceIcon = (type: string) => {
        switch (type) {
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
                    characteristics.map(({ name }, idx) => {
                        const isActive = name === active

                        return (
                            <MenuItem key={`${name}-${idx}`} className={`${isActive ? 'active' : ''}`}>
                                <Button onClick={() => setTabActive(name)} >
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