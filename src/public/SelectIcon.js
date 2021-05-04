import React from 'react';
import styled from 'styled-components';
export function SelectIcon() {
  return <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
    <path d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#FE5E41" />
  </svg>;

}
export function DeleteIcon() {
  return <svg width="100%" height="100%" viewBox="0 0 16 2" fill="none">
    <path d="M9 0H15C15.6 0 16 0.4 16 1C16 1.6 15.6 2 15 2H9H7H1C0.4 2 0 1.6 0 1C0 0.4 0.4 0 1 0H7H9Z" fill="#5E5E5E" />
  </svg>;
}
export const Button = styled.button`
position:absolute;
right :16px;
top :22px;
background: #FFFFFF;
border: 0px;
width: 16px;
height : 16px;
padding: 0px;
cursor:pointer;
`;
