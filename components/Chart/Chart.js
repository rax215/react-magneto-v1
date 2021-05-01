
const getChart = (attributes) => { 
  
  let type = attributes.type, chart, width, height
  width = attributes.width ? attributes.width : 500
  height = attributes.height ? attributes.height : 300
    switch (type) {
        case 'Bar':
            chart = `<Bar data={BarChartData}  options={BarChartOptions}/>`
            break;

         case 'Line':
            chart = `<Line data={LineChartData}  options={LineChartOptions}/>`
            break;
        case 'Doughnut':
            
            chart = `<Doughnut data={DoughnutChartData} options={DoughnutChartOptions}/>`
            break;

         case 'Pie':
           
            chart = `<Pie data={PieChartData} options={PieChartOptions}/>`
            break;    
    
    }  
    return (
      `<div style={{width:${width}, height:${height} }}>${chart}</div>`    
    )
}

module.exports = {getChart}