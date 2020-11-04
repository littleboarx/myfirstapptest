import React from 'react';
import styled from "styled-components";
export const Container = styled.div`
margin-left:16px;
margin-right:16px;
width:calc( 100vw - 32px);
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:space-between;
box-shadow: 0px 1px 0px #F2F2F2;
`;
export const Header = styled.div`
margin-left:9px;
margin-top: 13px;
font-family: PingFang SC;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: #9B9B9B;
`;
export const DeleteButton = styled.button`
background: #FFFFFF;
border: 1px solid #F2F2F2;
box-sizing: border-box;
border-radius: 6px;
width:64px;
height:39px;
margin-top:9px;
font-family: PingFang SC;
font-style: normal;
font-weight:bolder;
font-size: 14px;
line-height: 29px;
color: #FE5E41;
`;
export const Selectcontainer = styled.div`
width:100%;
padding-top:13px;
padding-left:11px;
padding-bottom:12px;
display: flex;  
flex-direction: column;
`;
export function Ellipse() {
  return <div style={{
    width: '24px',
    height: '34px',
    display: 'flex',
    flexDirection: 'column',  
    alignContent: 'flex-start',
    justifyContent: 'center',
  }}>
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" fill="#828282" />
    </svg>
  </div>;
}
export const Text1 = styled.div`
font-family: PingFang SC;
font-style: normal;
font-weight: bolder;
font-size: 14px;
line-height:20px;
color: #323232;
`;
export const Text2 = styled.div`
font-family: PingFang SC;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
color: #5E5E5E;
`;
