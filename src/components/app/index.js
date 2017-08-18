import React, {Component, PropTypes} from 'react';
import './index.less';
import Header from '../header/index';
import Footer from '../footer/index';
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
        <div className={`${prefixCls}-header`}>
          <Header/>
        </div>
        <div className={`${prefixCls}-body`}>
          {this.props.children}
        </div>
        <div className={`${prefixCls}-footer`}>
          <Footer/>
        </div>
      </div>);
  }
}
