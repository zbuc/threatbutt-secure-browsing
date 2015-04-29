document.addEventListener('DOMContentLoaded', function () {
	chrome.storage.local.get(['ioc', 'attribution'], function(items){
		document.getElementById('ioc').innerHTML = items.ioc;
		document.getElementById('attribution').innerHTML = items.attribution;
	});
});
