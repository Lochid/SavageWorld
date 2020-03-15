import React from 'react';
import { v4 as uuid } from 'uuid';
import TemplateForm from '../../components/TemplateForm';
import { Template } from '../../types/template';

export interface TemplateAddProps {
  addTemplate: (template: Template) => void;
  history: {
    goBack: () => void;
  }
}

const TemplateAdd = ({
  addTemplate,
  history: {
    goBack
  }
}: TemplateAddProps) => {
  return (
    <TemplateForm
      onFinish={(values) => {
        const template = values as Partial<Template>;
        addTemplate({
          ...template,
          key: uuid()
        } as Template);
        goBack();
      }}
    />
  );
}
export default TemplateAdd;