import React, {Component, PropTypes} from 'react';
import { Menu } from 'antd';
import './index.less';
const prefixCls = 'Header';

const SubMenu = Menu.SubMenu;

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
        <div className={`${prefixCls}-logo`}/>
        <Menu
          mode="horizontal"
          theme="dark"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="task">
            任务库
          </Menu.Item>
          <Menu.Item key="12323">
            技能法
          </Menu.Item>
          <Menu.Item key="tools">
            工具库
          </Menu.Item>
          <Menu.Item key="system">
            系统管理
          </Menu.Item>
        </Menu>
      </div>);
  }
}
