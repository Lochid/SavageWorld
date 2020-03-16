import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { CharacterSheet } from '../types/characterSheet';
import { Template } from '../types/template';

const { Option } = Select;

export interface CharacterSheetFormProps {
    onFinish: (values: Partial<CharacterSheet>) => void;
    initialData?: Partial<CharacterSheet>;
    templates: Template[];
}

const CharacterSheetForm = ({
    onFinish,
    initialData = {},
    templates = []
}: CharacterSheetFormProps) => {
    return (
        <Form
            name="basic"
            onFinish={onFinish}
            initialValues={initialData}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input character sheet name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Template"
                name="templateId"
                rules={[{ required: true, message: 'Please choose template!' }]}
            >
                <Select style={{ width: 120 }}>
                    {
                        templates
                            .map(({ id, name }) => <Option key={id} value={id}>{name}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form >
    );
}
export default CharacterSheetForm;