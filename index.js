var dom = document.getElementById('root');
var header = document.createElement('div');
header.innerText = 'header';


var sidebar = document.createElement('div');
sidebar.innerText = 'sidebar';

var content = document.createElement('div');
content.innerText = 'content';



dom.append(header)
dom.append(sidebar)
dom.append(content)