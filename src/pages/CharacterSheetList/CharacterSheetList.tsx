import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'antd/lib/table/Table';
import Button from 'antd/lib/button/button';
import NameColumn from '../../components/NameColumn';
import { CharacterSheet } from '../../types/characterSheet';

export interface CharacterSheetListProps {
  characterSheetList: CharacterSheet[];
  deleteCharacterSheets: (characterSheetIds: string[]) => void;
}

export interface CharacterSheetListState {
  characterSheetIds: string[];
}

class CharacterSheetList extends Component<CharacterSheetListProps, CharacterSheetListState> {
  constructor(props: CharacterSheetListProps) {
    super(props);

    this.state = {
      characterSheetIds: []
    };
  }

  render() {
    const { characterSheetList } = this.props;
    return (
      <>
        <Button>
          <Link to="/charsheets/add">Add character sheet</Link>
        </Button>
        <Button
          onClick={() => this.props.deleteCharacterSheets(this.state.characterSheetIds)}
        >
          Delete characterSheet
        </Button>
        <Table
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedCharacterSheetIds) => this.setState({
              ...this.state,
              characterSheetIds: selectedCharacterSheetIds.map(id => id.toString())
            })
          }}
          dataSource={characterSheetList}
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: (name: string, { id }: CharacterSheet) => <NameColumn url={`/charsheets/edit/${id}`} name={name} />,
            }
          ]}
        />
      </>
    );
  }
}
export default CharacterSheetList;