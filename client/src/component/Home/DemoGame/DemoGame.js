import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from 'antd';

import Monetization from './Dashboard/Monetization';
import Resources from './Dashboard/Resources';

const { Sider } = Layout;
const { SubMenu } = Menu;

class DemoGame extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ position: 'fixed', minHeight: '100vh' }}>
            <div className="logo">
              <Avatar src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg" />
              <span style={{ padding: '10px', color: 'white' }} >Demo Game</span>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="dashboard" />
                    <span>Dashboards</span>
                  </span>
                }
              >
                <Menu.Item key="2"><Icon type="dashboard" />Overview</Menu.Item>
                <Menu.Item key="3"><Icon type="deployment-unit" />Engagement</Menu.Item>
                <Menu.Item key="4"><Icon type="deployment-unit" />Benchmarks</Menu.Item>
                <Menu.Item key="5"><Icon type="deployment-unit" />
                  Monetization
                  <Link to='/Game/1782/Dashboard/Show/Monetization' />
                </Menu.Item>
                <Menu.Item key="6"><Icon type="deployment-unit" />
                  Resources
                  <Link to='/Game/1782/Dashboard/Show/Resources' />
                </Menu.Item>
                <Menu.Item key="7"><Icon type="deployment-unit" />Progression</Menu.Item>
                <Menu.Item key="8"><Icon type="deployment-unit" />Quality</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="search" />
                <span>Explore</span>
              </Menu.Item>
              <Menu.Item key="10">
                <Icon type="funnel-plot" />
                <span>Funnels</span>
              </Menu.Item>
              <Menu.Item key="11">
                <Icon type="deployment-unit" />
                <span>Cohorts</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <main style={{ width: '1519.200px', marginLeft: '200px' }}>
            <Switch>
              <Route exact path="/Game/:id/Dashboard/Show/Monetization" component={Monetization} />
              <Route exact path="/Game/:id/Dashboard/Show/Resources" component={Resources} />
            </Switch>
          </main>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default DemoGame;