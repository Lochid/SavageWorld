import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import TemplateAdd from './TemplateAdd';
import { State } from '../../reducers';
import { addTemplate, AddTemplateData } from '../../actions';
import { Template } from '../../types/template';

export interface OwnProps {
}

const mapStateToProps = (_state: State, props: OwnProps) => props;

const mapDispatchToProps = (dispatch: Dispatch<AddTemplateData>) => ({
    addTemplate: (template: Template) => dispatch(addTemplate(template))
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateAdd);