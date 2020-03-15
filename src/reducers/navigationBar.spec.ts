import navigationBar, { initValues } from './navigationBar';
import { PUT_CURRENT_ADDRESS } from '../actions';
import menuItems from '../constants/navigationBarItems';

describe('navigationBar', () => {
    it('return initValues if type is unknown', () => {
        const result = navigationBar(undefined as any, {} as any);

        expect(result).toBe(initValues);
    });

    it('return state with currentItem with current address if type is PUT_CURRENT_ADDRESS and menuItem is exist', () => {
        const result = navigationBar(undefined as any, {
            type: PUT_CURRENT_ADDRESS,
            address: menuItems[0].address
        });

        expect(result).toEqual({
            ...initValues,
            currentItem: menuItems[0]
        });
    });

    it('return state with empty currentItem if type is PUT_CURRENT_ADDRESS and menuItem isn\'t exist', () => {
        const result = navigationBar(undefined as any, {
            type: PUT_CURRENT_ADDRESS,
            address: 'address'
        });

        expect(result).toEqual({
            ...initValues,
            currentItem: undefined
        });
    });
});