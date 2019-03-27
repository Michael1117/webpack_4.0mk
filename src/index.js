import _ from 'lodash';

import $ from 'jquery';

import { ui } from './jquery.ui'

ui()

const dom = $('<div>');
dom.html(_.join(['Michael', 'hello']), '----')
$('body').append(dom)