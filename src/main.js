import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Weekday} from './weekday.js';

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    let date = $("#year").val();
    let dateArray = date.split("-");
    console.log(typeof dateArray[0]);
    let weekdayInstance = new Weekday(dateArray[0],dateArray[1],dateArray[2]);
    let weekdayInt = weekdayInstance.calculateWeekday();
    let weekdayString = Weekday.prototype.weekdayTranslator(weekdayInt);
    $("#result").text(`${weekdayString}`);
  });
});
