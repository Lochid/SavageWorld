import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import TemplateEdit from './TemplateEdit';
import { State } from '../../reducers';
import { editTemplate, EditTemplateData } from '../../actions';
import { Template } from '../../types/template';

export interface OwnProps {
    match: {
        params: {
            key: string;
        }
    };
    history: {
        goBack: () => void;
    }
}

const mapStateToProps = ({ templates: { templateList } }: State, props: OwnProps) => {
    const template = templateList
        .find(temp => temp.key === props.match.params.key);
    if (template === undefined) {
        props.history.goBack();
        return props;
    }
    return {
        ...props,
        template
    };
};

const mapDispatchToProps = (dispatch: Dispatch<EditTemplateData>) => ({
    editTemplate: (template: Template) => dispatch(editTemplate(template))
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateEdit);