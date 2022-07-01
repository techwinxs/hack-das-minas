import { MenuItems, MenuListItems, MenuItem, Button  } from './styles'

import IconHair from '../../UI/Icons/IconHair'

const Menu : React.FC = () => {
    return (
        <MenuItems>
            <MenuListItems>
                <MenuItem>
                    <Button>
                        <IconHair />
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button>
                        <IconHair />
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button>
                        <IconHair />
                    </Button>
                </MenuItem>
            </MenuListItems>
        </MenuItems>
    )
}

export default Menu