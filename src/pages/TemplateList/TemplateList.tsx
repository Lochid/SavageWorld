import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'antd/lib/table/Table';
import Button from 'antd/lib/button/button';
import NameColumn from '../../components/NameColumn';
import { Template } from '../../types/template';

export interface TemplateListProps {
  templateList: Template[];
  deleteTemplates: (templateKeys: string[]) => void;
}

export interface TemplateListState {
  templateKeys: string[];
}

class TemplateList extends Component<TemplateListProps, TemplateListState> {
  constructor(props: TemplateListProps) {
    super(props);

    this.state = {
      templateKeys: []
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
          onClick={() => this.props.deleteTemplates(this.state.templateKeys)}
        >
          Delete template
        </Button>
        <Table
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedTemplatesKeys) => this.setState({
              ...this.state,
              templateKeys: selectedTemplatesKeys.map(key => key.toString())
            })
          }}
          dataSource={templateList}
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: (name: string, { key }: Template) => <NameColumn url={`/templates/edit/${key}`} name={name} />,
            }
          ]}
        />
      </>
    );
  }
}
export default TemplateList;