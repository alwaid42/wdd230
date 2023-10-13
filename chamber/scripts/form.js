//timestamp hidden value
const today = Date.now()
const timestamp = document.querySelector("#timestamp");
timestamp.value = JSON.stringify(today);
