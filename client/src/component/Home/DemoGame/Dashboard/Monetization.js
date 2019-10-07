import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Layout,
  Menu,
  Icon,
  Popover,
  Button,
  Spin
} from 'antd';
import { Line, Bar } from '../../../../../node_modules/react-chartjs-2';

import './Monetization.css';

// Menu Header
const { Header } = Layout;
// PopUp Calendar
// const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

export class Monetization extends Component {
  state = {
    chartData: {},
    isLoading: true
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/ciptadii/jsonserver/db')
      .then(response => response.json())
      .then(data => this.setState({ chartData: data, isLoading: false }))
  }

  // default props chart
  static defaultProps = {
    displayLegend: true,
    legendPosition: 'top'
  }

  render() {
    const { chartData } = this.state

    return (
      <React.Fragment>
        <div>
          <Header style={{ background: '#fff', padding: 0, margin: 0 }} >
            <div>
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item>
                  Real Time
                </Menu.Item>
                <Menu.Item>
                  Live Feed
                </Menu.Item>
                <Icon type="question-circle" theme="twoTone" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginRight: 20 }} />
              </Menu>
            </div>
            <div>
              <Menu>
                <div className="demo">
                  <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popover placement="bottomLeft" content={content} trigger="click">
                      <Button>
                        <span><Icon type="calendar" theme="twoTone" /></span>
                        <span>BL</span>
                      </Button>
                    </Popover>
                  </div>
                </div>
              </Menu>
            </div>
          </Header>
        </div>
        <div style={{ width: '1279.200px', height: '40px' }} />
        <div style={{ marginLeft: '54.600px', marginRight: '54.600px' }}>
          <ul style={{ listStyle: 'none' }}>
            <Row gutter={8}>
              <Col span={12}>
                <li>
                  <Card title="Revenue" style={{ width: '564px', height: '272px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.Revenue}
                        options={{
                          maintainAspectRatio: false,
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          }
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
              <Col span={12}>
                <li>
                  <Card title="Transactions" style={{ width: '564px', height: '272px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.Transactions}
                        options={{
                          maintainAspectRatio: false,
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
            </Row>
            <br />
            <Row gutter={8}>
              <Col span={12}>
                <li>
                  <Card title="Conversion rate" style={{ width: '564px', height: '272px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.conversionRate}
                        options={{
                          maintainAspectRatio: false,
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
              <Col span={12}>
                <li>
                  <Card title="ARPDAU" style={{ width: '564px', height: '272px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Bar
                        data={chartData.ARPDAU}
                        options={{
                          maintainAspectRatio: false,
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
            </Row> <br />
            <Row gutter={8}>
              <Col span={12}>
                <li>
                  <Card title="ARPPU" style={{ width: '564px', height: '272px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.ARPPU}
                        options={{
                          maintainAspectRatio: false,
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
              <Col span={12}>
                <li>
                  <Card title="Paying user" style={{ width: '564px', height: '272px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.ARPDAU}
                        options={{
                          maintainAspectRatio: false,
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
            </Row> <br />
            <Row>
              <Col span={24}>
                <li>
                  <Card title="Revenue per item" style={{ width: '1150px', height: '566px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.ARPDAU}
                        options={{
                          maintainAspectRatio: true,
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
            </Row>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Monetization;
