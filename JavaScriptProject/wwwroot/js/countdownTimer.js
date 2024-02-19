const daysDocument = document.getElementById('days');
const hoursDocument = document.getElementById('hours');
const minutesDocument = document.getElementById('minutes');
const secondsDocument = document.getElementById('seconds');
const newYears = '1 Jan 2025';
function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();
	const totalSeconds = new Date(newYearsDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds % 60);
	daysDocument.innerHTML = formatTime(days);
	hoursDocument.innerHTML = formatTime(hours);
	minutesDocument.innerHTML = formatTime(minutes);
	secondsDocument.innerHTML = formatTime(seconds);
}
function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
