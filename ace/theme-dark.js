/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/dark', ['require', 'exports', 'module', 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-dark";
exports.cssText = ".ace-dark .ace_editor {\
  border: 2px solid rgb(159, 159, 159)\
}\
\
.ace-dark .ace_editor.ace_focus {\
  border: 2px solid #327fbd\
}\
\
.ace-dark .ace_gutter {\
  background: #232323;\
  color: #E2E2E2\
}\
\
.ace-dark .ace_print_margin {\
  width: 1px;\
  background: #232323\
}\
\
.ace-dark .ace_scroller {\
  background-color: #141414\
}\
\
.ace-dark .ace_text-layer {\
  color: #F8F8F8\
}\
\
.ace-dark .ace_cursor {\
  border-left: 2px solid #A7A7A7\
}\
\
.ace-dark .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #A7A7A7\
}\
\
.ace-dark .ace_marker-layer .ace_selection {\
  background: rgba(221, 240, 255, 0.20)\
}\
\
.ace-dark.multiselect .ace_selection.start {\
  box-shadow: 0 0 3px 0px #141414;\
  border-radius: 2px\
}\
\
.ace-dark .ace_marker-layer .ace_step {\
  background: rgb(102, 82, 0)\
}\
\
.ace-dark .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 255, 255, 0.25)\
}\
\
.ace-dark .ace_marker-layer .ace_active_line {\
  background: rgba(255, 255, 255, 0.031)\
}\
\
.ace-dark .ace_gutter_active_line {\
  background-color: rgba(255, 255, 255, 0.031)\
}\
\
.ace-dark .ace_marker-layer .ace_selected_word {\
  border: 1px solid rgba(221, 240, 255, 0.20)\
}\
\
.ace-dark .ace_invisible {\
  color: rgba(255, 255, 255, 0.25)\
}\
\
.ace-dark .ace_keyword,\
.ace-dark .ace_meta {\
  color: #CDA8F9\
}\
\
.ace-dark .ace_constant,\
.ace-dark .ace_constant.ace_character,\
.ace-dark .ace_constant.ace_character.ace_escape,\
.ace-dark .ace_constant.ace_other,\
.ace-dark .ace_markup.ace_heading,\
.ace-dark .ace_support.ace_constant {\
  color: #CF6A4C\
}\
\
.ace-dark .ace_invalid.ace_illegal {\
  color: #F8F8F8;\
  background-color: rgba(86, 45, 86, 0.75)\
}\
\
.ace-dark .ace_invalid.ace_deprecated {\
  text-decoration: underline;\
  font-style: italic;\
  color: #D2A8A1\
}\
\
.ace-dark .ace_support {\
  color: #9B859D\
}\
\
.ace-dark .ace_fold {\
  background-color: #AC885B;\
  border-color: #F8F8F8\
}\
\
.ace-dark .ace_support.ace_function {\
  color: #DAD085\
}\
\
.ace-dark .ace_markup.ace_list,\
.ace-dark .ace_storage {\
  color: #F9EE98\
}\
\
.ace-dark .ace_entity.ace_name.ace_function,\
.ace-dark .ace_meta.ace_tag,\
.ace-dark .ace_variable {\
  color: #AC885B\
}\
\
.ace-dark .ace_string {\
  color: #8F9D6A\
}\
\
.ace-dark .ace_string.ace_regexp {\
  color: #E9C062\
}\
\
.ace-dark .ace_comment {\
  font-style: italic;\
  color: #7F7A80\
}\
\
.ace-dark .ace_variable {\
  color: #7587A6\
}\
\
.ace-dark .ace_xml_pe {\
  color: #494949\
}\
\
.ace-dark .ace_markup.ace_underline {\
  text-decoration: underline\
}\
\
.ace-dark .ace_indent-guide {\
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERH5zzBz5sz/AA5EBAYqeZXWAAAAAElFTkSuQmCC) right repeat-y\
}\
\
.block0 { background-color: #666600 }\
.block1 { background-color: #CC0033 }\
.block2 { background-color: #990066 }\
.block3 { background-color: #000099 }\
.block4 { background-color: #0066CC }\
.block5 { background-color: #006600 }\
.block6 { background-color: #996600 }\
.block7 { background-color: #CC3333 }\
.block8 { background-color: #660066 }\
.block9 { background-color: #330099 }\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
