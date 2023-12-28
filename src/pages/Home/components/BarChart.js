import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const BarChart = ({title}) => {
  const chartDom = useRef();
  
  useEffect(() => {
    // 在此處使用 chartDom.current
    const myChart = echarts.init(chartDom.current);
    
    const option = {
      title:{
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [10, 40, 70],
          type: 'bar'
        }
      ]
    };
    
    myChart.setOption(option);
    
    // 在組件卸載時銷毀圖表
    return () => {
      myChart.dispose();
    };
  }, [title]);
  
  return <div ref={chartDom} style={{width: '500px', height: '400px'}}></div>
}

export default BarChart