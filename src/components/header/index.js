import React, {Component, PropTypes} from 'react';
import './index.less';
const prefixCls = 'Header';

export default class Header extends Component {
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
