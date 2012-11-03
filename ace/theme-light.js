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

define('ace/theme/light', ['require', 'exports', 'module', 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-light";
exports.cssText = ".ace-light .ace_editor {\
  border: 2px solid rgb(159, 159, 159);\
}\
\
.ace-light .ace_editor.ace_focus {\
  border: 2px solid #327fbd;\
}\
\
.ace-light .ace_gutter {\
  background: #ebebeb;\
  color: #333;\
  overflow : hidden;\
}\
\
.ace-light .ace_print_margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-light .ace_scroller {\
  background-color: #FFFFFF;\
}\
\
.ace-light .ace_cursor {\
  border-left: 2px solid black;\
}\
\
.ace-light .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid black;\
}\
\
.ace-light .ace_line .ace_invisible {\
  color: rgb(191, 191, 191);\
}\
\
.ace-light .ace_line .ace_constant.ace_buildin {\
  color: rgb(88, 72, 246);\
}\
\
.ace-light .ace_line .ace_constant.ace_language {\
  color: rgb(88, 92, 246);\
}\
\
.ace-light .ace_line .ace_constant.ace_library {\
  color: rgb(6, 150, 14);\
}\
\
.ace-light .ace_line .ace_invalid {\
  background-color: rgb(153, 0, 0);\
  color: white;\
}\
\
.ace-light .ace_line .ace_fold {\
}\
\
.ace-light .ace_line .ace_support.ace_function {\
  color: rgb(60, 76, 114);\
}\
\
.ace-light .ace_line .ace_support.ace_constant {\
  color: rgb(6, 150, 14);\
}\
\
.ace-light .ace_line .ace_support.ace_type,\
.ace-light .ace_line .ace_support.ace_class\
.ace-light .ace_line .ace_support.ace_other, {\
  color: rgb(109, 121, 222);\
}\
\
.ace-light .ace_variable.ace_parameter {\
  font-style:italic;\
  color:#FD971F;\
}\
.ace-light .ace_line .ace_keyword.ace_operator {\
  color: rgb(104, 118, 135);\
}\
\
.ace-light .ace_line .ace_comment {\
  color: #236e24;\
}\
\
.ace-light .ace_line .ace_comment.ace_doc {\
  color: #236e24;\
}\
\
.ace-light .ace_line .ace_comment.ace_doc.ace_tag {\
  color: #236e24;\
}\
\
.ace-light .ace_line .ace_constant.ace_numeric {\
  color: rgb(0, 0, 205);\
}\
\
.ace-light .ace_line .ace_variable {\
  color: rgb(49, 132, 149);\
}\
\
.ace-light .ace_line .ace_xml_pe {\
  color: rgb(104, 104, 91);\
}\
\
.ace-light .ace_entity.ace_name.ace_function {\
  color: #0000A2;\
}\
\
\
.ace-light .ace_markup.ace_heading {\
  color: rgb(12, 7, 255);\
}\
\
.ace-light .ace_markup.ace_list {\
  color:rgb(185, 6, 144);\
}\
\
.ace-light .ace_marker-layer .ace_selection {\
  background: rgb(181, 213, 255);\
}\
\
.ace-light .ace_marker-layer .ace_step {\
  background: rgb(252, 255, 0);\
}\
\
.ace-light .ace_marker-layer .ace_stack {\
  background: rgb(164, 229, 101);\
}\
\
.ace-light .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgb(192, 192, 192);\
}\
\
.ace-light .ace_marker-layer .ace_active_line {\
  background: rgba(0, 0, 0, 0.07);\
}\
\
.ace-light .ace_gutter_active_line {\
    background-color : #dcdcdc;\
}\
\
.ace-light .ace_marker-layer .ace_selected_word {\
  background: rgb(250, 250, 255);\
  border: 1px solid rgb(200, 200, 250);\
}\
\
.ace-light .ace_storage,\
.ace-light .ace_line .ace_keyword,\
.ace-light .ace_meta.ace_tag {\
  color: rgb(147, 15, 128);\
}\
\
.ace-light .ace_string.ace_regex {\
  color: rgb(255, 0, 0)\
}\
\
.ace-light .ace_line .ace_string {\
  color: #1A1AA6;\
}\
\
.ace-light .ace_entity.ace_other.ace_attribute-name {\
  color: #994409;\
}\
\
.ace-light .ace_indent-guide {\
  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
.block0 { background-color: #FFCC00 }\
.block1 { background-color: #FF6699 }\
.block2 { background-color: #66CCFF }\
.block3 { background-color: #33CC33 }\
.block4 { background-color: #999933 }\
.block5 { background-color: #FF6600 }\
.block6 { background-color: #FF9999 }\
.block7 { background-color: #33CCFF }\
.block8 { background-color: #99FF99 }\
.block9 { background-color: #999966 }\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
