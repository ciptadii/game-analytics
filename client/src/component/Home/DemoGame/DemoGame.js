import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Icon, Avatar } from 'antd';

import Monetization from './Dashboard/Monetization';
import Resources from './Dashboard/Resources';
import { Button } from 'antd/lib/radio';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class DemoGame extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // handle click header
  handleClick = e => {
    console.log('click', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{
              overflow: 'auto',
              position: 'fixed',
              height: '100vh',
              left: 0,
              zIndex: 100
            }}>
            {/* <Button type='link'> */}
            <div className="logo" style={{ padding: '4px 8px', borderBottom: '1px white solid', height: '50px' }}>
              <Avatar
                src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg"
                style={{ marginBottom: '23px' }}
              />
              <div style={{ display: 'inline-block', margin: 'auto', width: '140px', paddingLeft: '10px', color: 'white' }}>
                <span><b>Demo Game</b></span> <br />
                <span style={{ fontSize: '12px' }}>GameAnalytics</span>
              </div>
              <div style={{ display: 'inline-block', float: 'right', marginTop: '10px', width: '9px' }}>
                <Icon type="down" style={{ color: 'white', margin: 'auto', fontSize: '9px' }} />
              </div>
            </div>
            {/* </Button> */}
            <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline">
              {/* <Menu.Item key="realtime">
                <Icon type="search" />
                <span>Realtime</span>
              </Menu.Item> */}
              <SubMenu
                key="dashboard"
                title={
                  <span>
                    <Icon type="dashboard" />
                    <span>Dashboards</span>
                  </span>
                }
              >
                <Menu.Item key="overview"><Icon type="dashboard" />Overview</Menu.Item>
                <Menu.Item key="engagement"><Icon type="deployment-unit" />Engagement</Menu.Item>
                <Menu.Item key="benchmarks"><Icon type="deployment-unit" />Benchmarks</Menu.Item>
                <Menu.Item key="monetization"><Icon type="deployment-unit" />
                  Monetization
                  <Link to='/Game/1782/Dashboard/Show/Monetization' />
                </Menu.Item>
                <Menu.Item key="resources"><Icon type="deployment-unit" />
                  Resources
                  <Link to='/Game/1782/Dashboard/Show/Resources' />
                </Menu.Item>
                <Menu.Item key="progression"><Icon type="deployment-unit" />Progression</Menu.Item>
                <Menu.Item key="quality"><Icon type="deployment-unit" />Quality</Menu.Item>
              </SubMenu>
              <Menu.Item key="explore">
                <Icon type="search" />
                <span>Explore</span>
              </Menu.Item>
              <Menu.Item key="funnels">
                <Icon type="funnel-plot" />
                <span>Funnels</span>
              </Menu.Item>
              <Menu.Item key="development">
                <Icon type="deployment-unit" />
                <span>Cohorts</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: '200px' }}>
            {/* <main style={{ width: '1519.200px', marginLeft: '200px', zIndex: 50 }}> */}
            <Content>
              <Switch>
                <Route exact path="/Game/:id/Dashboard/Show/Monetization" component={Monetization} />
                <Route exact path="/Game/:id/Dashboard/Show/Resources" component={Resources} />
              </Switch>
            </Content>
            {/* </main> */}
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default DemoGame;