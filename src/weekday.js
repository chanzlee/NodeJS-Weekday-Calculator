// export class Weekday {
//   constructor(day, month, year) {
//     this.day = day;
//     this.month = month;
//     this.year = year;
//   }
//
//   calculateWeekday(){
//     let m = this.month;
//     let d = this.day;
//     let y = this.year;
//
//     let monthTable = [1, 4, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
//     m = monthTable[m - 1];
//
//     let centuryTable = [0, 5, 3, 1];
//     let c = centuryTable[Math.floor(y / 100) % 4];
//
//     if (m > 3) {
//         y -= 1;
//     }
//
//     console.log(m);
//     y = y % 100;
//     y = (Math.floor((y / 4)) + y) % 7;
//     let weekdayInt = (d + m + c + y) % 7;
//     return weekdayInt;
//   }
//
//   weekdayTranslator(weekdayInt){
//     let weekday;
//     if(weekdayInt == 0) {
//       weekday = "Saturday";
//     }
//     else if(weekdayInt == 1) {
//       weekday = "Sunday";
//     }
//     else if(weekdayInt ==2) {
//       weekday = "Monday";
//     }
//     else if(weekdayInt == 3) {
//       weekday = "Tuesday";
//     }
//     else if(weekdayInt == 4) {
//       weekday = "Wednesday";
//     }
//     else if(weekdayInt == 5) {
//       weekday = "Thursday";
//     }
//     else  {
//       weekday = "Friday";
//     }
//     return weekday;
//   }
// }
