import React from 'react';
import { Form, Input, Button } from 'antd';
import { Template } from '../types/template';

export interface TemplateFormProps {
    onFinish: (values: Partial<Template>) => void;
    initialData?: Partial<Template>;
}

const TemplateForm = ({
    onFinish,
    initialData = {}
}: TemplateFormProps) => {
    return (
        <Form
            name="basic"
            onFinish={onFinish}
            initialValues={initialData}
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
export default TemplateForm;