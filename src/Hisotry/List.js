import React from 'react';
import styled from 'styled-components';
import { Button, SelectIcon, DeleteIcon } from '../public/SelectIcon';
export class List extends React.Component {
  render() {
    return <div style= {{
      height: '60px',
      position: 'relative' ,
      boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.06)',
      flexBasis: '309px',
      flexGrow: '1',
      marginRight:'16px',
      marginLeft:'16px',
    }}>
    <Text1 selected = {this.props.list.select} >{this.props.list.中}</Text1>
    <Text2>{this.props.list.界} {this.props.list.纲.length === 0 ? this.props.list.亚纲.length === 0 ? '':' | ' +this.props.list.亚纲:' | ' + this.props.list.纲} </Text2>
    <Button onClick =  {() => {
      this.props.list.select ===0?this.props.handleSelect(this.props.list):this.props.handleDelete(this.props.list.id);
    }}>{this.props.list.select ===0?<SelectIcon />:<DeleteIcon />}</Button>
    
      
    </div>
        
}}


const Text1 = styled.div`
position: absolute;
left: 11px;
top: 10px;
font-family: PingFang SC;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 21px;
color: ${props => props.selected === 0?'#323232':'#FE5E41;'}
`

const Text2 = styled.div`
position: absolute;
left:11px;
top: 35px;
font-family: PingFang SC;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
color: #5E5E5E;
`

/*
{this.props.list.中}
        {this.props.list.界}  
        {this.props.list.纲.length === 0 ? this.props.list.亚纲 : this.props.list.纲}         
        <SelectButton disabled = {this.props.list.select === 0?false:true} auto size="mini"  onClick = {() =>{
              this.props.handleSelect(this.props.list)
            }}>{this.props.list.select === 0?'添加到列表':'已添加'}</SelectButton>
  }*/


