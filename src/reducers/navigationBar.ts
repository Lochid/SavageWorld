import {
    PUT_CURRENT_ADDRESS,
    PutCurrentAddressData
} from '../actions/index';
import menuItems from '../constants/navigationBarItems';
import { MenuItemProps } from '../types/navigationBar';

export interface State {
    menuItems: MenuItemProps[];
    currentItem?: MenuItemProps;
}

export const initValues = {
    menuItems
};

const navigationBar = (
    state: State = initValues,
    action: PutCurrentAddressData,
) => {
    switch (action.type) {
        case PUT_CURRENT_ADDRESS:
            return {
                ...state,
                currentItem: state.menuItems
                    .find(({ address }) => address === action.address)
            };
        default:
            return state
    }
};

export default navigationBar;