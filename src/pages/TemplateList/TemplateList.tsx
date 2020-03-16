import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'antd/lib/table/Table';
import Button from 'antd/lib/button/button';
import NameColumn from '../../components/NameColumn';
import { Template } from '../../types/template';

export interface TemplateListProps {
  templateList: Template[];
  deleteTemplates: (templateIds: string[]) => void;
}

export interface TemplateListState {
  templateIds: string[];
}

class TemplateList extends Component<TemplateListProps, TemplateListState> {
  constructor(props: TemplateListProps) {
    super(props);

    this.state = {
      templateIds: []
    };
  }

  render() {
    const { templateList } = this.props;
    return (
      <>
        <Button>
          <Link to="/templates/add">Add template</Link>
        </Button>
        <Button
          onClick={() => this.props.deleteTemplates(this.state.templateIds)}
        >
          Delete template
        </Button>
        <Table
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedTemplatesIds) => this.setState({
              ...this.state,
              templateIds: selectedTemplatesIds.map(id => id.toString())
            })
          }}
          dataSource={templateList}
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: (name: string, { id }: Template) => <NameColumn url={`/templates/edit/${id}`} name={name} />,
            }
          ]}
        />
      </>
    );
  }
}
export default TemplateList;