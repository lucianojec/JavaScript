//Date

const data1 = new Date()
const data2 = new Date('March 06 2020 09:30')
const data3 = new Date(2020,02,06,9,30)
//data3.setFullYear(2030);
data3.toDateString()
data3.toTimeString()
data3.toISOString()