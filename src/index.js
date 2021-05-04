import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { History } from './Hisotry/History';
import { Specises } from './Species/Specises';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { RouteButton, RouteButton1, Text, } from './Router/RouteButton1';
import swConfig from './swSet'
import styled from 'styled-components'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.setActive = this.setActive.bind(this);
    this.state = {
      active: [0, 0]
    }
  }

  setActive(index) {
    let temp = this.state.active
    for (let i in temp) {
      temp[i] = 0
    }
    temp[index] = 1;
    this.setState({ active: temp });

  }

  componentDidMount() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }


  render() {
    return (

      <Router >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          //height: 'calc(var(--vh, 1vh) * 100)',
          justifyContent: 'space-around'
        }}>
          <Switch>

            <Route path="/" exact ><NotFound /></Route>
            <Route path='/species'><Specises setActive={this.setActive} /> </Route>
            <Route path='/history'><History setActive={this.setActive} /></Route>
          </Switch>
          <RouteButton>
            <RouteButton1 to="/species" onClick={() => { this.setActive(0) }}><SpecisesIcon active={this.state.active[0]} /><Text active={this.state.active[0]}>物种</Text></RouteButton1>
            <RouteButton1 to='/history' onClick={() => { this.setActive(1) }}><HistoryIcon active={this.state.active[1]} /><Text active={this.state.active[1]} >记录</Text></RouteButton1>
          </RouteButton>
        </div>



      </Router>
    )
  }

}
const NotFoundWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size:20px;
height:100vh;
`
function NotFound(){
  return <NotFoundWrapper>您似乎来到了一个不存在的页面，点击下方按钮切换页面</NotFoundWrapper>
}
function HistoryIcon(props) {
  return <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" >
    <path d="M13 7L16 4L13 3L12 0L9 3L9.6 4.9L8.6 5.9C7.7 5.3 6.6 4.9 5.5 4.9C2.5 5 0 7.5 0 10.5C0 13.5 2.5 16 5.5 16C8.5 16 11 13.5 11 10.5C11 9.3 10.6 8.3 10 7.4L11 6.4L13 7ZM9 10.5C9 12.4 7.4 14 5.5 14C3.6 14 2 12.4 2 10.5C2 8.6 3.6 7 5.5 7C6.1 7 6.7 7.2 7.2 7.4L4.8 9.8C4.4 10.2 4.4 10.8 4.8 11.2C5 11.4 5.3 11.5 5.5 11.5C5.7 11.5 6 11.4 6.2 11.2L8.6 8.8C8.8 9.3 9 9.9 9 10.5Z" fill={props.active ? '#FE5E41' : "#5E5E5E"} />
  </svg>
}


function SpecisesIcon(props) {
  return <svg width="16px" height="12px" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6666 4L7.99994 0L5.33325 4H10.6666Z" fill={props.active ? '#FE5E41' : "#5E5E5E"} />
    <path d="M12 6H4L0 12H16L12 6Z" fill={props.active ? '#FE5E41' : "#5E5E5E"} />
  </svg>
}



ReactDOM.render(

  <Main />
  ,
  document.getElementById('root')
);

serviceWorker.register(swConfig);
