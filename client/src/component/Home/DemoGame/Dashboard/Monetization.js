import React, { Component } from 'react';
import { Card } from 'antd';

import ChartLine from '../Chart/ChartLine';

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
            <div>
                <Card title="Revenue" bordered={false} style={{ padding: '0px', width: '554', height: '217' }}>
                    <ChartLine chartData={this.state.chartData} legendPosition="bottom" />
                </Card> <br/>
                <Card title="Transactions" bordered={false} style={{ padding: '0px' }} >
                    <ChartLine chartData={this.state.chartData} legendPosition="bottom" />
                </Card> <br/>
                <Card title="Conversion rate" bordered={false} style={{ padding: '0px' }} >
                    <ChartLine chartData={this.state.chartData} legendPosition="bottom" />
                </Card> <br/>
                <Card title="ARPDAU" bordered={false} style={{ padding: '0px' }} >
                    <ChartLine chartData={this.state.chartData} legendPosition="bottom" />
                </Card> <br/>
                <Card title="ARPPU" bordered={false} style={{ padding: '0px' }} >
                    <ChartLine chartData={this.state.chartData} legendPosition="bottom" />
                </Card> <br/>
                <Card title="Paying Users" bordered={false} style={{ padding: '0px' }} >
                    <ChartLine chartData={this.state.chartData} legendPosition="bottom" />
                </Card> <br/>
                <Card title="Revenue per item" bordered={false} style={{ padding: '0px' }} >
                    <ChartLine chartData={this.state.chartData} legendPosition="bottom" />
                </Card>
            </div>
        )
    }
}

export default Monetization;
