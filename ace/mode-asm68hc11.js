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

define('ace/mode/asm68hc11', ['require', 'exports', 'module' , 'ace/lib/oop', 'ace/mode/text', 'ace/tokenizer', 'ace/mode/asm68hc11_highlight_rules', 'ace/mode/folding/asm68hc11', 'ace/range'], function(require, exports, module) {


var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var ASM68HC11HighlightRules = require("./asm68hc11_highlight_rules").ASM68HC11HighlightRules;
var ASM68HC11FoldMode = require("./folding/asm68hc11").FoldMode;
var Range = require("../range").Range;

var Mode = function() {
    this.$tokenizer = new Tokenizer(new ASM68HC11HighlightRules().getRules());
    this.foldingRules = new ASM68HC11FoldMode("\\:");
};
oop.inherits(Mode, TextMode);

(function() {

    this.toggleCommentLines = function(state, doc, startRow, endRow) {
        var outdent = true;
        var re = /^(\s*)\\*/;

        for (var i=startRow; i<= endRow; i++) {
            if (!re.test(doc.getLine(i))) {
                outdent = false;
                break;
            }
        }

        if (outdent) {
            var deleteRange = new Range(0, 0, 0, 0);
            for (var i=startRow; i<= endRow; i++)
            {
                var line = doc.getLine(i);
                var m = line.match(re);
                deleteRange.start.row = i;
                deleteRange.end.row = i;
                deleteRange.end.column = m[0].length;
                doc.replace(deleteRange, m[1]);
            }
        }
        else {
            doc.indentRows(startRow, endRow, "*");
        }
    };

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

/*        var tokenizedLine = this.$tokenizer.getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;

        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }*/

        if (state == "start") {
            var match = line.match(/^.*\:/);
            if (match) {
                indent = tab + tab;
            }
        }

        return indent;
    };
    
    this.checkOutdent = function(state, line, input) {
        return input == ":";
    };

    this.autoOutdent = function(state, doc, row) {
        var line = doc.getLine(row);
        if(line.match(/^.*\:/)) {
            var indent = this.$getIndent(line);
            doc.remove(new Range(row, 0, row, indent.length));
        }
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
/*
 * TODO: asm68hc11 delimiters
 */

define('ace/mode/asm68hc11_highlight_rules', ['require', 'exports', 'module' , 'ace/lib/oop', 'ace/mode/text_highlight_rules'], function(require, exports, module) {


var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var ASM68HC11HighlightRules = function() {

    var keywords = (
        "org|fcb|fdb|equ"
    );

    var builtinConstants = (
        ""
    );

    var builtinFunctions = (
        "aba|abx|aby|adca|adcb|adda|addb|addd|anda|andb|asl|asla|aslb|asld|" +
        "asr|asra|asrb|bcc|bclr|bcs|beq|bge|bgt|bhi|bhs|bita|bitb|ble|blo|" +
        "bls|blt|bmi|bne|bpl|bra|brclr|brn|brset|bset|bsr|bvc|bvs|cba|clc|" +
        "cli|clr|clra|clrb|clv|cmpa|cmpb|com|coma|comb|cpd|cpx|cpy|daa|dec|" +
        "deca|decb|des|dex|dey|eora|eorb|fdiv|idiv|inc|inca|incb|ins|inx|iny|" +
        "jmp|jsr|ldaa|ldab|ldd|lds|ldx|ldy|lsl|lsla|lslb|lsld|lsr|lsra|lsrb|" +
        "lsrd|mul|neg|nega|negb|nop|oraa|orab|psha|pshb|pshx|pshy|pula|pulb|" +
        "pulx|puly|rol|rola|rolb|ror|rora|rorb|rti|rts|sba|sbca|sbcb|sec|sei|" +
        "sev|staa|stab|std|stop|sts|stx|sty|suba|subb|subd|swi|tab|tap|tba|" +
        "test|tpa|tst|tsta|tstb|tsx|tsy|txs|tys|wai|xgdx|xgdy"
    );

    var keywordMapper = this.createKeywordMapper({
        "invalid.deprecated": "debugger",
        "support.function": builtinFunctions,
        "constant.language": builtinConstants,
        "keyword": keywords
    }, "identifier");

    var decimalInteger = "(?:(?:[1-9]\\d*)|(?:0))";
    var hexInteger = "(?:$[\\dA-Fa-f]+)";
    var binInteger = "(?:%[01]+)";
    var integer = "(?:" + decimalInteger + "|" + hexInteger + "|" + binInteger + ")";

    var exponent = "(?:[eE][+-]?\\d+)";
    var fraction = "(?:\\.\\d+)";
    var intPart = "(?:\\d+)";
    var pointFloat = "(?:(?:" + intPart + "?" + fraction + ")|(?:" + intPart + "\\.))";
    var exponentFloat = "(?:(?:" + pointFloat + "|" +  intPart + ")" + exponent + ")";
    var floatNumber = "(?:" + exponentFloat + "|" + pointFloat + ")";

    this.$rules = {
        "start" : [ {
            token : "comment",          // * comment
            regex : "\\*.*$"
        }, {
            token : "string",           // " string
            regex : '"(?:[^\\\\]|\\\\.)*?"'
        }, {
            token : "constant.numeric", // integer
            regex : integer
        }, {
            token : keywordMapper,
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
            token : "keyword.operator",
            regex : "\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="
        }, {
            token : "paren.lparen",
            regex : "[\\[\\(\\{]"
        }, {
            token : "paren.rparen",
            regex : "[\\]\\)\\}]"
        }, {
            token : "text",
            regex : "\\s+"
        } ]
    };
};

oop.inherits(ASM68HC11HighlightRules, TextHighlightRules);

exports.ASM68HC11HighlightRules = ASM68HC11HighlightRules;
});

define('ace/mode/folding/asm68hc11', ['require', 'exports', 'module' , 'ace/lib/oop', 'ace/mode/folding/fold_mode'], function(require, exports, module) {


var oop = require("../../lib/oop");
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(markers) {
    this.foldingStartMarker = new RegExp("^.*\\:");
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        var line = session.getLine(row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
            if (match[1])
                return this.openingBracketBlock(session, match[1], row, match.index);
            if (match[2])
                return this.indentationBlock(session, row, match.index + match[2].length);
            return this.indentationBlock(session, row);
        }
    }

}).call(FoldMode.prototype);

});

define('ace/mode/folding/fold_mode', ['require', 'exports', 'module' , 'ace/range'], function(require, exports, module) {


var Range = require("../../range").Range;

var FoldMode = exports.FoldMode = function() {};

(function() {

    this.foldingStartMarker = null;
    this.foldingStopMarker = null;

    // must return "" if there's no fold, to enable caching
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
        if (this.foldingStartMarker.test(line))
            return "start";
        if (foldStyle == "markbeginend"
                && this.foldingStopMarker
                && this.foldingStopMarker.test(line))
            return "end";
        return "";
    };

    this.getFoldWidgetRange = function(session, foldStyle, row) {
        return null;
    };

    this.indentationBlock = function(session, row, column) {
        var re = /\S/;
        var line = session.getLine(row);
        var startLevel = line.search(re);
        if (startLevel == -1)
            return;

        var startColumn = column || line.length;
        var maxRow = session.getLength();
        var startRow = row;
        var endRow = row;

        while (++row < maxRow) {
            var level = session.getLine(row).search(re);

            if (level == -1)
                continue;

            if (level <= startLevel)
                break;

            endRow = row;
        }

        if (endRow > startRow) {
            var endColumn = session.getLine(endRow).length;
            return new Range(startRow, startColumn, endRow, endColumn);
        }
    };

    this.openingBracketBlock = function(session, bracket, row, column, typeRe) {
        var start = {row: row, column: column + 1};
        var end = session.$findClosingBracket(bracket, start, typeRe);
        if (!end)
            return;

        var fw = session.foldWidgets[end.row];
        if (fw == null)
            fw = this.getFoldWidget(session, end.row);

        if (fw == "start" && end.row > start.row) {
            end.row --;
            end.column = session.getLine(end.row).length;
        }
        return Range.fromPoints(start, end);
    };

}).call(FoldMode.prototype);

});
