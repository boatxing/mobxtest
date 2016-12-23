import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="请输入美元" value={this.props.priceApp.price}>
        <input type="button" value="换算" onClick={this.change}>
        <span id="output">{this.props.priceApp}</span>
        <DevTools />
      </div>
    );
  }

  change = () => {
    this.props.priceApp.changeDoll();
  }
};

export default App;
