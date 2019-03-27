import _ from 'lodash';

import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['Michael', 'hello']), '----')
$('body').append(dom)