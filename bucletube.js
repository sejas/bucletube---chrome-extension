
  chrome.browserAction.onClicked.addListener(function(tab) {
	redirigir(tab);
  });

function redirigir(tab){
	chrome.tabs.getSelected(null,function(tab) {
	    var tablink = tab.url;
	    newurl='http://bucletube.es/'+tab.url;
	    chrome.tabs.update(tab.id, {url: newurl});
	});
	 _gaq.push(['_trackPageview'],tab.url);
}

// Analytics
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();