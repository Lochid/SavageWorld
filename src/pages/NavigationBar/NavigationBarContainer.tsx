import { ReactElement } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import NavigationBar from './NavigationBar';
import { putCurrentAddress, PutCurrentAddressData } from '../../actions';
import { State } from '../../reducers';

export interface OwnProps {
    children: ReactElement | ReactElement[];
}

const mapStateToProps = (state: State, props: OwnProps) => {
    return {
        ...props,
        menuItems: state.navigationBar.menuItems,
        selectedKey: state.navigationBar.currentItem?.key
    };
};

const mapDispatchToProps = (dispatch: Dispatch<PutCurrentAddressData>) => ({
    putCurrentAddress: (address: string) => dispatch(putCurrentAddress(address))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
