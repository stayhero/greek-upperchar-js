
function greekUpperchar() 
{
    var chars =
        [
            ['άι'], ['έι'], ['όι'], ['ύι'],
            ['άυ'], ['έv'], ['όυ'], ['ήυ'],
            ['ά','ὰ','ᾶ','ἀ','ἁ','ἄ','ἂ','ἆ','ἅ','ἃ','ἇ'],  // Alpha
            ['έ','ὲ','ἐ','ἑ','ἔ','ἒ','ἕ','ἓ'],                // Epsilon
            ['ή','ὴ','ῆ','ἠ','ἡ','ἤ','ἢ','ἦ','ἥ','ἣ','ἧ'],   // Eta
            ['ί','ὶ','ῖ','ἰ','ἱ','ἴ','ἲ','ἶ','ἵ','ἳ','ἷ'],       // Iota
            ['ό','ὸ','ὀ','ὁ','ὄ','ὂ','ὅ','ὃ'],               // Omikron
            ['ύ','ὺ','ῦ','ὐ','ὑ','ὔ','ὒ','ὖ','ὕ','ὓ','ὗ'],   // Ypsilon
            ['ώ','ὼ','ῶ','ὠ','ὡ','ὤ','ὢ','ὦ','ὥ','ὣ','ὧ'] // Omega
        ];
    var repalce =
        [
            'αϊ' , 'εϊ' , 'οϊ' , 'υϊ',
            'αϋ' , 'εϋ' , 'οϋ' , 'ηϋ',
            'α', // Alpha
            'ε', // Epsilon
            'η', // Eta
            'ι', // Iota
            'ο', // Omikron
            'υ', // Ypsilon
            'ω'  // Omega
        ];

    $('body').find(":not(iframe)").andSelf().contents().filter(function()
    {
        if(this.nodeType == 3 && this.nodeValue.length && $.trim(this.nodeValue).length)
        {
            if($(this).parent().css('text-transform') == 'uppercase')
            {
                for (var x in chars)
                {
                    for (var i in chars[x])
                    {
                        this.nodeValue = this.nodeValue.split(chars[x][i]).join(repalce[x]);
                    }
                }
            }
        }
    });
}