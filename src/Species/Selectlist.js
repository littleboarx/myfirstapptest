import React from 'react';
import styled from 'styled-components';
import { Container, Text, Text2, Button } from '../public/Container-slectList';
import { ListContent } from '../public/ListContent';
import { Button as ButtonSelect, DeleteIcon } from '../public/SelectIcon'
export function Selectlist(props) {
    return <div style={{
        position: 'fixed ',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,.5)',
        zIndex: '10',
        left: '0px',
        top: '0px',
    }}>
        <ContainerThis style={{
        }}>
            <Text>已选<Text2>{props.nums[0]}</Text2>界<Text2>{props.nums[1]}</Text2>纲<Text2>{props.nums[2]}</Text2></Text>
            <ContentContainer>
                {props.list.map((e, key) => {
                    return <div key={key} style={{
                        width: '295px',
                        position: 'relative',
                        marginBottom: '15px',
                        margin: '0px 16px 15px 0px',
                        flexGrow: '1',
                        height: '34px',
                    }}>{ListContent(key, e)}
                        <StyledButton onClick={() => {
                            props.handleDelete(e.id);
                        }}><DeleteIcon /></StyledButton>
                    </div>

                })}
                <Blankdiv />
                <Blankdiv />
                <Blankdiv />
                <Blankdiv />
                <Blankdiv />
            </ContentContainer>
            <Button onClick={() => {
                props.setShow();
            }}><DownIcon></DownIcon>关闭</Button><UpdateButton onClick={() => { props.handleUpdate() }}>记录</UpdateButton></ContainerThis>
        <div></div>

    </div>;
}

function Blankdiv(props) {
    return <div style={{
        width: '295px',
        position: 'relative',
        marginBottom: '15px',
        margin: '0px 16px 15px 0px',
        flexGrow: '1',
        height: '34px',
    }

    }></div>
}



const StyledButton = styled(ButtonSelect)`
right: 0px;
top: 9px
`

const ContentContainer = styled.div`
position:absolute;
left:24px;
top:58px;
bottom:94px;
overflow:auto;
display: flex;
flex-wrap:wrap;
flex-direction:row;
width:calc( 100vw - 67px);
align-content: flex-start;
`

const ContainerThis = styled(Container)`
position: absolute;
bottom: 67px;
height: 382px;
`


const UpdateButton = styled(Button)`
position: absolute; 
bottom: 25px;
width: 136px;
height: 36px;
left: calc( 50% - 68px );
background: #FE5E41;
border-radius: 9px;
font-size: 16px;
line-height:36px;
color: #FFFFFF;
text-align: center;
padding: 0px;
`



function DownIcon(props) {

    return <svg style={{
        position: 'absolute',
        left: '18.6px',
        top: '10.6px',
    }} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.00002 0.599903L6.00002 4.5999L10 0.599903L11.4 1.9999L6.00002 7.3999L0.600025 1.9999L2.00002 0.599903Z" fill="#FE5E41" />
    </svg>

}
