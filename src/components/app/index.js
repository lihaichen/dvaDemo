import React, {Component, PropTypes} from 'react';
import './index.less';
const prefixCls = 'App';

export default class App extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className={`${prefixCls}`}>
        {this.props.children}
      </div>);
  }
}
