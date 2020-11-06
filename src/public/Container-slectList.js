import styled from 'styled-components';
export const Container = styled.div`
position: fixed;
left:16px;
right: 16px;
bottom: 61px;
height: 45px;
border: 1px solid #F2F2F2;
box-sizing: border-box;
box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
border-radius: 9px;
background: #FFFFFF;
z-index:2;
display: flex;
justify-content: space-between;
flex-direction: row;
padding: 8px 8px 8px 21px;
`;
export const Text = styled.div`
font-family: PingFang SC;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 29px;
color: #9B9B9B;
/* identical to box height */
`;
export const Text2 = styled(Text)`
display: inline-block;
margin-left: 4px;
margin-right: 18px;
font-weight: 600;
color: #323232;
`;
export const Button = styled.button`
width:85px;
height: 29px;
background: rgba(254, 94, 65, 0.12);
border-radius: 6px;
border: 0px;
font-family: PingFang SC;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 29px;
color: #FE5E41;
padding-left: 28px;
position: relative;
`;
