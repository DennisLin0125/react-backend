import * as echarts from 'echarts';
import { useEffect, useRef } from "react";

const Home = () => {
  // 將 useRef 移至組件主體內
  const chartDom = useRef();
  
  useEffect(() => {
    // 在此處使用 chartDom.current
    const myChart = echarts.init(chartDom.current);
    
    const option = {
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
  }, []);
  
  return (
    <div>
      <div ref={chartDom} style={{width: '500px', height: '400px'}}></div>
    </div>
  );
};

export default Home;
