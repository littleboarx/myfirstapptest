import styled from "styled-components";
import { Link } from "react-router-dom";
export const RouteButton1 = styled(Link)`
  padding: 0px;
  background: white;
  border:0px;
  width:32px;
  height:32px;
  font-size:12px;
  display:flex; 
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  text-decoration: none;
`;

export const Text = styled.div`
font-style: normal;
font-weight: normal;
font-size: 12px;
color: ${props => props.active?'#FE5E41': '#5E5E5E'} !important;
font-family: PingFang SC;
text-decoration: none;
line-height: 14px;
text-align: center;
`;
export const RouteButton = styled.div`
  position:fixed;
  bottom: 0px;
  height: 49px;
  width:100%;
  font-size: 12px;
  background: #FFFFFF;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
