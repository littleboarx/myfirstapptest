import React from 'react';
import { Button } from '@zeit-ui/react';
export class SearchButton extends React.Component {
  render() {
    return (<div>


      <Button style={{
      width: '25%',
      height: '5vh' 
    }} auto onClick={() => { this.props.handleSearch(); }}>查询</Button>
    </div>);
  }
}
