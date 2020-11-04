import React from 'react';
import { Container, Header, DeleteButton, Selectcontainer } from '../public/Container';
import { ListContent } from '../public/ListContent';
export class HistoryList extends React.Component {
  render() {
    return <Container >
      <Header>
        {this.props.list.date}
      </Header>
      <DeleteButton onClick={() => {
        this.props.handleDelete(this.props.list.id)
      }}>删除</DeleteButton>
      <Selectcontainer> 
        {this.props.list.body.map((e, key) => {
          return <div style={{
        margin: '0px 8px 16px 0px '
      }}>         
          {ListContent(key, e)}
          </div>
        })}

      </Selectcontainer>
    </Container>


  }
}



