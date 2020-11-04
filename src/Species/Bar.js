import React from 'react';
import { Container, Text, Text2, Button } from '../public/Container-slectList';
export class Bar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            display:0
        }
    }

  render() {
    return (<Container style ={{
    }}>
<Text>已选<Text2>{this.props.nums[0]}</Text2>界<Text2>{this.props.nums[1]}</Text2>纲<Text2>{this.props.nums[2]}</Text2></Text>
        <Button onClick = {() =>{this.props.setShow()
        }}><UpIcon></UpIcon>查看</Button></Container>);
  }
}

function UpIcon(props){

  return <svg style = {{
    position: 'absolute',
    left: '18.6px',
    top: '10.6px',
  }}width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99998 7.4001L5.99998 3.4001L1.99998 7.4001L0.599976 6.0001L5.99998 0.600098L11.4 6.0001L9.99998 7.4001Z" fill="#FE5E41"/>
</svg>

}