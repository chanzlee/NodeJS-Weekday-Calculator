export class Weekday {
  constructor(year, month, day) {
    this.year = parseInt(year);
    this.month = parseInt(month);
    this.day = parseInt(day);
  }

  calculateWeekday(){
    let m = this.month;
    let d = this.day;
    let y = this.year;
    let c = Math.floor(y / 100);
    let w = 0;

    console.log(m);
    console.log(d);
    console.log(y);
    console.log(c);

    // Determine Y, which is the year minus 1 for  January or February, and the year for  the rest of the year
    if (m < 3) {
      y--;
    }

    // Determine y, which is the last 2 digits of Y
    y = y % 100;

    // Determine m, which is the month shifted left by 2 (March = 1,... February = 12)
    if (m-2<1) {
      m += 10;
    } else {
      m -=2;
    }

    let temp = d + Math.floor((2.6*m) - 0.2) + y + Math.floor(y / 4) + Math.floor(c / 4) - (2*c);
    console.log(temp);
    w =  temp % 7;

    console.log(w);
    return w;
  }

  weekdayTranslator(weekdayInt){
    let weekday;
    if(weekdayInt == 0) {
      weekday = "Sunday";
    }
    else if(weekdayInt == 1) {
      weekday = "Monday";
    }
    else if(weekdayInt ==2) {
      weekday = "Tuesday";
    }
    else if(weekdayInt == 3) {
      weekday = "Wednesday";
    }
    else if(weekdayInt == 4) {
      weekday = "Thursday";
    }
    else if(weekdayInt == 5) {
      weekday = "Friday";
    }
    else  {
      weekday = "Saturday";
    }
    return weekday;
  }
}
