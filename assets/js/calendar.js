$(document).ready(function() {

	$('#calendar').fullCalendar({

		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,listYear'
		},

		displayEventTime: false, // don't show the time column in list view

		// THIS KEY WON'T WORK IN PRODUCTION!!!
		// To make your own Google API key, follow the directions here:
		// http://fullcalendar.io/docs/google_calendar/
		googleCalendarApiKey: 'AIzaSyAbSIh2-ppRCTJ_4Wdo1rzklSueTT0Qee0',

		// US Holidays
		events: 'q512lvgbuo39o0b7cgcmef4g1g@group.calendar.google.com',

		eventClick: function(event) {
			// opens events in a popup window
			window.open(event.url, 'gcalevent', 'width=700,height=600');
			return false;
		},

		loading: function(bool) {
			$('#loading').toggle(bool);
		}

	});

});
