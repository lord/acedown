var ace = require('brace');
var VirtualRenderer = ace.acequire("./virtual_renderer").VirtualRenderer;
var Editor = ace.acequire("./editor").Editor;
require('brace/mode/lua');
require('brace/theme/solarized_dark');
// var acedown = require('./acedown');

require('brace/keybinding/vim');

var session = ace.createEditSession("", "ace/mode/lua");
var renderer = new VirtualRenderer(document.getElementById('editor'), "ace/theme/solarized_dark");
var editor = new Editor(renderer, session);

editor.setKeyboardHandler("ace/keyboard/vim");
