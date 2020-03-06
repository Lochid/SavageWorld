import React from 'react';
import Table from 'antd/lib/table/Table';
import NameColumn from '../../components/NameColumn';
import { Template } from '../../types/template';

export interface TemplateListProps {
  templateList: Template[];
}

const TemplateList = ({
  templateList
}: TemplateListProps) => {
  return (
    <Table
      dataSource={templateList}
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (name: string, { key }: Template) => <NameColumn url={`/templates/${key}`} name={name} />,
        }
      ]}
    />
  );
}
export default TemplateList;