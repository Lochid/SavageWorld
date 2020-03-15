import React from 'react';
import TemplateForm from '../../components/TemplateForm';
import { Template } from '../../types/template';

export interface TemplateEditProps {
  template: Template;
  editTemplate: (template: Template) => void;
  history: {
    goBack: () => void;
  }
}

const TemplateEdit = ({
  template,
  editTemplate,
  history: {
    goBack
  }
}: TemplateEditProps) => {
  return (
    <TemplateForm
      initialData={template}
      onFinish={(values) => {
        const temp = values as Template;
        editTemplate({
          ...template,
          ...temp
        });
        goBack();
      }}
    />
  );
}
export default TemplateEdit;