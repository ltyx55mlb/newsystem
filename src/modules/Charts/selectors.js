// import { Dimensions } from 'react-native'
// import { chartoption, chartoptiona, chartoptionhuan } from '../../../chartconfig'
// const SCREEN_WIDTH = Dimensions.get('window').width;


// export const chartconfiga = (data, type) => {

//     let option = {}

//     chartname = []
//     chartdata = []
//     switch(type){
//         case 'pie':
//         option = JSON.parse(JSON.stringify(chartoption))
//         for (let i = 0; i < data.length; i++) {
//             chartname.push(data[i].name)
//         }
//         option.legend.data = chartname
//         option.series[0].data = data
//         break;
//         case 'line':
//         option = JSON.parse(JSON.stringify(chartoptiona))
//         break;
//         case 'huan':
//         option =JSON.parse(JSON.stringify(chartoptionhuan))
//         break;
//         default:
//         return 
//         }
//     return option
// }