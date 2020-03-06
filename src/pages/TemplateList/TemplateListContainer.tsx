import { connect } from 'react-redux';
import TemplateList from './TemplateList';
import { State } from '../../reducers';

export interface OwnProps {
}

const mapStateToProps = (state: State, props: OwnProps) => {
    return {
        ...props,
        templateList: state.templates.templateList,
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);