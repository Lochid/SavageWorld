import { connect } from 'react-redux';
import { putCurrentAddress } from '../../actions';

jest.mock('react-redux', () => ({
    connect: jest.fn()
}));

jest.mock('../../actions', () => ({
    putCurrentAddress: jest.fn()
}));

const connectMock = connect as jest.Mock;
const putCurrentAddressMock = putCurrentAddress as jest.Mock;

const putCurrentAddressMockValue = 'putCurrentAddressMockValue';
const menuItems = 'menuItems';
const currentItem = {
    key: 'key'
};

const state = {
    navigationBar: {
        menuItems,
        currentItem
    }
}

describe('NavigationBarContainer', () => {
    let mapStateToProps;
    let mapDispatchToProps;

    beforeAll(async () => {
        jest.resetAllMocks();

        connectMock.mockImplementation((mstp, mdtp) => {
            mapStateToProps = mstp;
            mapDispatchToProps = mdtp;
            return jest.fn();
        });

        await import('./NavigationBarContainer');
    });

    beforeEach(() => {
        jest.resetAllMocks();
        putCurrentAddressMock.mockReturnValue(putCurrentAddressMockValue);
    });

    it('translate state\'s navigationBar translate to props', () => {
        const preprops = {
            preprops: 'preprops'
        };
        const props = mapStateToProps(state, preprops);

        expect(props).toEqual({
            ...preprops,
            menuItems: state.navigationBar.menuItems,
            selectedKey: state.navigationBar.currentItem.key
        });
    });

    it('put selectedKey as undefined if current item is undefined', () => {
        const preprops = {
            preprops: 'preprops'
        };
        const props = mapStateToProps({
            ...state,
            navigationBar: {
                ...state.navigationBar,
                currentItem: undefined
            }
        }, preprops);

        expect(props).toEqual({
            ...preprops,
            menuItems: state.navigationBar.menuItems,
            selectedKey: undefined
        });
    });

    it('put putCurrentAddress to props and call putCurrentAddress from actions', () => {
        const address = 'address';
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        
        props.putCurrentAddress(address);

        expect(putCurrentAddressMock).toHaveBeenCalledWith(address);
        expect(dispatch).toHaveBeenCalledWith(putCurrentAddressMockValue);
    });
    /*
    
        it('should map dispatch to props', () => {
            const expectedPropKeys = ['load'];
    
            expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
        });*/
});