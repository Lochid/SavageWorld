import React from 'react';
import { Form, Input, Button } from 'antd';
import uuid from 'uuid/v4';
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
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={(values) => {
        const template = values as Template;
        addTemplate({
          ...template,
          key: uuid()
        });
        goBack();
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input template name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form >
  );
}
export default TemplateAdd;