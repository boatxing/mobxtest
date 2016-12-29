import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class ComputedTestApp extends Component {
    constructor(props) {
        super(props);
        this.state = {renminbi: this.props.currencyApp.renminbi};

        this.handleChange = this.handleChange.bind(this);
        this.change = this.change.bind(this);
    }

    handleChange(e){
        this.setState({renminbi: e.target.value})
    }

    render() {
        return (
        <div>
            <input type="text" placeholder="请输入人民币" value={this.state.renminbi} onChange={this.handleChange}/>
            <input type="button" value="换算" onClick={this.change}/>
            <span>{this.props.currencyApp.dollar}</span>
            <DevTools />
        </div>
        )
    }

    change = () => {
        this.props.currencyApp.renminbi = this.state.renminbi;
    }
};

export default ComputedTestApp;
