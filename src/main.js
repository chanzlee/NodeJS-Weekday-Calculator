import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Weekday} from './weekday.js';

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    let date = $("#year").val();
    let weekdayInstance = new Date(date);
    let weekdayInt = weekdayInstance.getDay();
    // let weekdayString = Weekday.prototype.weekdayTranslator(weekdayInt);
    function dayOfWeekAsString(dayIndex) {
      return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][dayIndex];
    }
    let result = dayOfWeekAsString(weekdayInt);
    $("#result").text(`${result}`);
  });
});
