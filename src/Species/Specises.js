import React from 'react';
import { Title } from '../public/Title';
import { List } from '../Hisotry/List'
import md5 from 'md5';
import { Search } from '../Hisotry/Search';
import { Bar } from './Bar';
import { Selectlist } from './Selectlist';
/*    if (localStorage.getItem('list') === null) {
      let data = await fetch('http://121.41.110.199:4000/getlist')
      let res = await data.json()

      let ress = JSON.stringify(res);
      window.localStorage.setItem('list', ress);

    } else { */
function checkTime(i) {
  if (i < 10) { i = "0" + i }
  return i
}
export class Specises extends React.Component {
  constructor(props) {
    super(props);
    this.changeKeyWord = this.changeKeyWord.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.setIndex = this.setIndex.bind(this);
    this.setShow = this.setShow.bind(this);
    this.child = React.createRef();
    this.state = {
      keyWord: '',
      lists: [],
      searchLists: [

      ],
      selectLists: [
      ],
      count: [0, 0, 0],
      show: !false,
      blank: 1,
      blank1: 0,
    }
  }

  changeKeyWord(e) {
    this.handleSearch(e.target.value);
    this.setState({ keyWord: e.target.value });
  }

  search(arr, keyword) {
    const res = [];
    let tempJson = '';
    for (let i = 0, len = arr.length; i < len; i++) {
      tempJson = JSON.stringify(arr[i]);
      if (tempJson.indexOf(keyword) !== -1) {
        res.push(arr[i]);
      }
    }
    return res;
  }

  setShow() {
    let temp = this.state.show;
    temp = !temp;
    this.setState({ show: temp });
  }

  async checkUpdate(){
    try{
    let data = await fetch('https://littleboarx.cn:3000/getlist')
    let res = await data.json()
    let ress = JSON.stringify(res);
    if(window.localStorage.getItem('history')=== null){
      let ress = JSON.stringify(res);
      window.localStorage.setItem('list', ress);
      this.setState({ lists: res })
      this.setState({ searchLists: res })
    }
    else if(md5(ress) === md5(window.localStorage.getItem('list'))){
      return 0;
    }
    else{
      // eslint-disable-next-line no-restricted-globals
      if( confirm("检测到数据更新，是否更新？") ){
      let ress = JSON.stringify(res);
      window.localStorage.setItem('list', ress);
      this.setState({ lists: res })
      this.setState({ searchLists: res })
      }
    }}catch{return 0}
  }

  async componentDidMount() {
    this.props.setActive(0);

      let res = JSON.parse(window.localStorage.getItem('list'))
      if (res !== null){
      this.setState({ lists: res })
      this.setState({ searchLists: res })
    }
      this.checkUpdate();

    }
  handleSearch(value) {
    let res = this.search(this.state.lists, value)
    this.setState({ searchLists: res })
    let width  = window.innerWidth;
    let num = Math.floor(width/341);
    let fill = num*2 - res.length%num;
    this.setState({
      blank: fill
    })
  } 

  setIndex() {
    if (this.state.index === -1) {
      this.setState({ index: 13 })
    } else this.setState({ index: -1 })
  }


  updateCount() {
    let id = []
    let id1 = []
    for (let i in this.state.selectLists) {
      if (this.state.selectLists[i].界.length !== 0) id[this.state.selectLists[i].界] = 1;
      if (this.state.selectLists[i].纲.length !== 0) id1[this.state.selectLists[i].纲] = 1;
    }
    let count1 = 0;
    let count2 = 0;
    for (let i in id) {
      if (id[i] === 1) count1++;
    }
    for (let i in id1) {
      if (id1[i] === 1) count2++;
    }
    this.setState({ count: [this.state.selectLists.length, count1, count2] })
  }


  handleSelect(e) {
    let temp = this.state.selectLists;
    temp.push(e);
    let data = this.state.lists;
    data[e.id].select = 1;
    this.updateCount();
    let width  = window.innerWidth;
    let num = Math.floor((width-67)/310);
    let fill = num - temp.length%num;
    this.setState({
      blank1: fill
    })
    this.setState({ selectLists: temp })
    this.setState({ lists: data })
    this.setState({ temp })
  }

  handleDelete(e) {
    let temp = this.state.selectLists;
    let f = temp.findIndex((t) => {
      return t.id === e
    })
    temp[f].select = 0;
    temp.splice(f, 1)
    this.setState({ selectLists: temp })
  }

  async handleUpdate() {
    if (this.state.selectLists.length === 0) {
      alert('上传列表为空！');
      return 0;
    }
    const myDate = new Date()
    const res = {
      body: this.state.selectLists,
      date: `${myDate.getFullYear()}年${myDate.getMonth()}月${myDate.getDate()}日 ${checkTime(myDate.getHours())}:${checkTime(myDate.getMinutes())}`,
      id: md5(JSON.stringify(this.state.selectLists)),
    }
    if(localStorage.getItem('history')!==null){
    let history = JSON.parse(window.localStorage.getItem('history'))
    history.lists.push(res);
    history.total = history.lists.length;
    let ress = JSON.stringify(history);
    window.localStorage.setItem('history', ress);}
    else{
      let ression = {
        lists: [res],
        total: 1
      }

      const a = JSON.stringify(ression)
      window.localStorage.setItem('history', a)       
    }
    this.setState({ selectLists: [] });
    let data = this.state.lists;
    for (let i in data) { data[i].select = 0 };
    this.setState({ list: data });
    alert('成功记录');
  }


  render() {
    return <div style = {{
      display: 'flex',  
      flexDirection: 'column',
      maxHeight: 'calc(100% - 49px)',
      flexGrow: '1'
    }}>
      <div style = {{
       position:'fixed',
       top:'0px', 
       backgroundColor:'white',
       zIndex:'1',
      }}>
      <Title>
        物种检索-test
              </Title>
      <Search changeKeyWord={this.changeKeyWord} />
      </div>
      <Bar nums={this.state.count} setShow={this.setShow} />
      {this.state.show ? '' : <Selectlist list={this.state.selectLists} nums={this.state.count} setShow={this.setShow} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />}
      <div style={{
        display: 'flex',
        position: 'relative',
        top: '103px',

        overflow: 'scroll',
        width: '100vw',
        flexGrow: '1',
        flexShrink: '1',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
      }}>
        {this.state.searchLists.map((e, key) => {
          return <List list={e} key={key} handleSelect={this.handleSelect} handleDelete={this.handleDelete} />;
        })}
        {Array(this.state.blank).fill(<Blankdiv />)}
      </div>
    </div>
  }
}
function Blankdiv(props){
  return <div style ={{
     height: '60px',
     position: 'relative' ,
     flexBasis: '309px',
     flexGrow: '1',
     marginRight:'16px',
     marginLeft:'16px',
  }
            
  }></div>
 }
/*<div style={{
        overflow: 'scroll',
        width: '100vw',
        flexDirection: 'column',
        flexGrow: '1',
        flexShrink: '1',
      }}>
        {this.state.searchLists.map((e, key) => {
          return <List list={e} key={key} handleSelect={this.handleSelect} handleDelete={this.handleDelete} />;
        })}
        <div style={{
          height: '16vw'
        }}></div>
      </div>*/



