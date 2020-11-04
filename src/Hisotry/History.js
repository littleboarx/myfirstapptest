import React from 'react';
import { HistoryList } from './HistoryList';
import { Title } from '../public/Title';
export class History extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            historyLists: {
                lists: []
            }
        }
    }
    async componentDidMount() {
        this.props.setActive(1);
        if(window.localStorage.getItem('history')!== null){
            this.setState({    
                historyLists:JSON.parse(window.localStorage.getItem('history'))
            })}
        }

    async handleDelete(id){
        let temp = this.state.historyLists
        for (let index in temp.lists){
            if(temp.lists[index].id === id ){
                temp.lists.splice(index,1)
            }
            }
            this.setState({historyLists:temp})
            let ress = JSON.stringify(temp)
            window.localStorage.setItem('history', ress)
    }


    render() {
        return <div style={{
            flexGrow:'1',

        }}>
        <Title>我的记录</Title>
        <div style= {{
            flexGrow:'1',
        }}>
        {this.state.historyLists.lists.map((e, key) => {
                return <HistoryList list={e} key={key} handleDelete = {this.handleDelete} />;
            })}
        </div>
        </div>;
    }
}


