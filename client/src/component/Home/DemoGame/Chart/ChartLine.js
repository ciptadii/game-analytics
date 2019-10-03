import React, { Component } from '../../../../../node_modules/react'
import { Line } from '../../../../../node_modules/react-chartjs-2';

export class ChartLine extends Component {
  constructor(props){
    super(props)
      this.state = {
        chartData:props.chartData
    };
  }
    
  static defaultProps = {
    // displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render() {
      return (
          <div>
              <Line
              data={this.state.chartData}
              options={{
                  maintainAspectRatio: true,
                  // title: {
                  // display: this.props.displayTitle,
                  // text: 'Largest Cities in Massachusetts',
                  // fontSize: 25
                  // },
                  legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                  }
              }}
              />
          </div>
      )
    }
}

export default ChartLine;