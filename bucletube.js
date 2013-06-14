alert('Cargada');
  chrome.browserAction.onClicked.addListener(function(tab) {
  	alert('click');
	redirigir(tab);
  });

function redirigir(tab){
chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    newurl='http://bucletube.es/'+tab.url;
    chrome.tabs.update(tab.id, {url: newurl});
});
}