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
  Spin,
  Table,
  Divider,
  Tag
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

// Table
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

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
          <Header style={{ position: 'fixed', zIndex: 100, width: '1319.200px', padding: 0 }} >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ width: '1319.200px' }}>
              <Menu.Item>
                Real Time
                </Menu.Item>
              <Menu.Item>
                Live Feed
                </Menu.Item>
              <Icon type="question-circle" theme="twoTone" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginRight: 20 }} />
            </Menu>
            <Menu>
              <div className="demo">
                <div style={{ paddingLeft: '20px', paddingRight: '20px', clear: 'both', whiteSpace: 'nowrap', width: '1319.200px' }}>
                  <Popover placement="bottomLeft" content={content} trigger="click">
                    <Button>
                      <span><Icon type="calendar" theme="twoTone" /></span>
                      <span>BL</span>
                    </Button>
                  </Popover>
                </div>
              </div>
            </Menu>
          </Header>
          <div style={{ width: '1279.200px', height: '90px' }} />
        </div>

        <div style={{ width: '1279.200px', height: '40px' }} />

        <div style={{marginLeft: '54.600px', marginRight: '54.600px' }}>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <Row gutter={8}>
              <Col span={12}>
                <li>
                  <Card title="Revenue" style={{ width: '564px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.Revenue}
                        options={{
                          maintainAspectRatio: true,
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
                  <Card title="Transactions" style={{ width: '564px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.Transactions}
                        options={{
                          maintainAspectRatio: true,
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
                  <Card title="Conversion rate" style={{ width: '564px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.conversionRate}
                        options={{
                          maintainAspectRatio: true,
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
              <Col span={12}>
                <li>
                  <Card title="ARPDAU" style={{ width: '564px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Bar
                        data={chartData.ARPDAU}
                        options={{
                          maintainAspectRatio: true,
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
                  <Card title="ARPPU" style={{ width: '564px', border: 1 }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={chartData.ARPPU}
                        options={{
                          maintainAspectRatio: true,
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
              <Col span={12}>
                <li>
                  <Card title="Paying user" style={{ width: '564px', border: 1 }} >
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
            </Row> <br />
            <Row>
              <Col span={24}>
                <li>
                  <Card title="Revenue per item" style={{ width: '1150px', border: 1 }} >
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
          </ul> <br/>

          
            <Table columns={columns} dataSource={data} style={{ width: '1150px' }} />
          
        </div>
      </React.Fragment>
    )
  }
}

export default Monetization;
