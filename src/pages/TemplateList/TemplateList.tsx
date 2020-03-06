import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'antd/lib/table/Table';
import Button from 'antd/lib/button/button';
import NameColumn from '../../components/NameColumn';
import { Template } from '../../types/template';

export interface TemplateListProps {
  templateList: Template[];
}

const TemplateList = ({
  templateList
}: TemplateListProps) => {
  return (
    <>
      <Button>
        <Link to="/templates/add">Add template</Link>
      </Button>
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
    </>
  );
}
export default TemplateList;