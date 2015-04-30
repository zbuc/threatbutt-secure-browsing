document.addEventListener('DOMContentLoaded', function () {
	chrome.storage.local.get(['ioc', 'attribution', 'is_threat'], function(items){
		document.getElementById('ioc').innerHTML = items.ioc;
		document.getElementById('attribution').innerHTML = items.attribution;

		if (items.is_threat === 1) {
			document.getElementById('is_threat').innerHTML = "THREAT DETECTED";
			document.getElementById('threat_details').style.display = 'default';
		} else {
			document.getElementById('is_threat').innerHTML = "NO THREAT DETECTED ... YET";
			document.getElementById('threat_details').style.display = 'none';
		}
	});
});
