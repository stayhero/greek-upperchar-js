/**
 * jQuery greek upper char
 */

;(function ($, window, document, undefined) {
    var pluginName = "greekUpperChar",
        defaults = {
            chars: [
                ['άι'],
                ['έι'],
                ['όι'],
                ['ύι'],
                ['άυ'],
                ['έv'],
                ['όυ'],
                ['ήυ'],
                ['ά', 'ὰ', 'ᾶ', 'ἀ', 'ἁ', 'ἄ', 'ἂ', 'ἆ', 'ἅ', 'ἃ', 'ἇ'], // Alpha
                ['έ', 'ὲ', 'ἐ', 'ἑ', 'ἔ', 'ἒ', 'ἕ', 'ἓ'], // Epsilon
                ['ή', 'ὴ', 'ῆ', 'ἠ', 'ἡ', 'ἤ', 'ἢ', 'ἦ', 'ἥ', 'ἣ', 'ἧ'], // Eta
                ['ί', 'ὶ', 'ῖ', 'ἰ', 'ἱ', 'ἴ', 'ἲ', 'ἶ', 'ἵ', 'ἳ', 'ἷ'], // Iota
                ['ό', 'ὸ', 'ὀ', 'ὁ', 'ὄ', 'ὂ', 'ὅ', 'ὃ'], // Omikron
                ['ύ', 'ὺ', 'ῦ', 'ὐ', 'ὑ', 'ὔ', 'ὒ', 'ὖ', 'ὕ', 'ὓ', 'ὗ'], // Ypsilon
                ['ώ', 'ὼ', 'ῶ', 'ὠ', 'ὡ', 'ὤ', 'ὢ', 'ὦ', 'ὥ', 'ὣ', 'ὧ'] // Omega
            ],
            repalce: [
                'αϊ' , 'εϊ' , 'οϊ' , 'υϊ',
                'αϋ' , 'εϋ' , 'οϋ' , 'ηϋ',
                'α', // Alpha
                'ε', // Epsilon
                'η', // Eta
                'ι', // Iota
                'ο', // Omikron
                'υ', // Ypsilon
                'ω'  // Omega
            ]
        };

    // The actual plugin constructor
    function GreekUpperChar(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    GreekUpperChar.prototype = {
        init: function () {
            var self = this;
            $(this.element).find(":not(iframe)").andSelf().contents().filter(function () {
                if (this.nodeType == 3 && this.nodeValue.length && $.trim(this.nodeValue).length) {
                    if ($(this).parent().css('text-transform') == 'uppercase') {
                        for (var x in self._defaults.chars) {
                            for (var i in self._defaults.chars[x]) {
                                this.nodeValue = this.nodeValue.split(self._defaults.chars[x][i]).join(self._defaults.repalce[x]);
                            }
                        }
                    }
                }
            });
        }
    };

    $.fn.greekUpperChar = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new GreekUpperChar(this, options));
            }
        });
    }

})(jQuery, window, document);
