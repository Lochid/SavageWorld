import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import TemplateList from './TemplateList';
import { DeleteTemplateData, deleteTemplates } from '../../actions';
import { State } from '../../reducers';

export interface OwnProps {
}

const mapStateToProps = (state: State, props: OwnProps) => {
    return {
        ...props,
        templateList: state.templates.templateList,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<DeleteTemplateData>) => ({
    deleteTemplates: (templateIds: string[]) => dispatch(deleteTemplates(templateIds))
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);