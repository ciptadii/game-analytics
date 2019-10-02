import React from 'react';
import { Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Avatar, Card } from 'antd';

// import Monetization from './Dashboard/Monetization';
import ChartLine from './Chart/ChartLine';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

function Monetization() {
  return (
    <div>
      Hello World
    </div>
  );
}

class DemoGame extends React.Component {
  state = {
    collapsed: false,
    chartData: {}
  };

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    // make AJAX calls here
    this.setState({
      chartData: {
        labels: [
          'Boston',
          'Worcester',
          'Springfield',
          'Lowell',
          'Cambridge',
          'New Bedford'
        ],
        datasets: [
          {
            label: 'Population',
            data: [
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    })
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo">
            <Avatar src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg" />
            <span style={{ padding: '10px', color: 'white' }} >Demo Game</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="stock" />
              <span>RealTime</span>
            </Menu.Item>
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
                Monetization <Link to='Show/Monetization' />
              </Menu.Item>
              <Menu.Item key="6"><Icon type="deployment-unit" />Resources</Menu.Item>
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0, margin: 0 }} >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item>
                Real Time
              </Menu.Item>
              <Menu.Item>
                Live Feed
              </Menu.Item>
              <Icon type="question-circle" theme="twoTone" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginRight: 20 }} />
            </Menu>
          </Header>
          <main style={{ background: '#ECECEC', paddingTop: '40px', paddingRight: '24px', paddingBottom: '72px', paddingLeft: '24px' }}>
            <Route exact path="Show/Monetization" component={Monetization} />
          </main>
        </Layout>
      </Layout>
    );
  }
}

export default DemoGame;