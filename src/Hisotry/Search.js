import React from 'react';
import styled from 'styled-components';
export class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value : '',
    }
  }
  render() {
    return <Container>
    <Input placeholder='搜索' value={this.props.keyWord} onChange={this.props.changeKeyWord} />
    <SearchIcon />
    </Container>;
  }
}

const Container = styled.div`
position:relative;
height:32px;
width:100%;
`

const Input = styled.input`
background: #F2F2F2;
border-radius: 9px;
width:calc( 100% - 32px );
height: 32px;
border: 0px;
padding: 0px 0px 0px 41px;
margin-left: 16px;
display: block;
font-family: PingFang SC;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
box-sizing: border-box;
:focus{
width:calc( 100% - 32px );
height: 32px;
background: #FFFFFF;
border: 1px solid #FE5E41;
box-sizing: border-box;
padding: 0px 0px 0px 40px;
border-radius: 9px;
outline-width: 0px;
} 
`

function SearchIcon(){
  return<svg style = {{
      position:'absolute',
      left: '31px',
      top: '9px',
  }} width="14" height="14" viewBox="0 0 14 14" fill="none" >
  <path d="M13.7436 11.6314L11.375 9.26275C11.9263 8.344 12.25 7.27212 12.25 6.125C12.25 2.7475 9.50163 0 6.125 0C2.74837 0 0 2.7475 0 6.125C0 9.5025 2.74837 12.25 6.125 12.25C7.273 12.25 8.344 11.9271 9.26275 11.375L11.6314 13.7436C11.802 13.9142 12.026 14 12.25 14C12.474 14 12.698 13.9142 12.8686 13.7436L13.7436 12.8686C14.0857 12.5265 14.0857 11.9735 13.7436 11.6314ZM6.125 10.5C3.70913 10.5 1.75 8.54087 1.75 6.125C1.75 3.70913 3.70913 1.75 6.125 1.75C8.54087 1.75 10.5 3.70913 10.5 6.125C10.5 8.54087 8.54087 10.5 6.125 10.5Z" fill="#9B9B9B"/>
  </svg>

}
