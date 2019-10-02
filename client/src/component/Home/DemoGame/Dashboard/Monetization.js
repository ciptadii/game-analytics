import React, { Component } from 'react';
import { Layout, Menu, Icon, Card } from 'antd';

import ChartLine from '../Chart/ChartLine';

const { Header } = Layout;

export class Monetization extends Component {
    state = {
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

    render() {
        return (
            <div style={{ background: '#ECECEC', paddingTop: '40px', paddingRight: '24px', paddingBottom: '72px', paddingLeft: '24px' }}>
                <Card title="Status" bordered={false}>
                    Card Content
                    </Card>
                <br />
                <Card title="Chart 1" bordered={false} style={{ padding: '0px' }} >
                    <ChartLine chartData={this.state.chartData} legendPosition="bottom" />
                </Card>
            </div>
        )
    }
}

export default Monetization;
