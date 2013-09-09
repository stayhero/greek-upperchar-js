greek-upperchar-js
==================

Convert Greek accented letters to the respective non-accented uppercase letters.

More info: https://bugzilla.mozilla.org/show_bug.cgi?id=307039

## Example 
```
ά -> α
έ -> ε
```

and
```
άι -> αϊ
άυ -> αϋ
```

## Installation

In the browser:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="jquery.greek-upperchar.js"></script>
<script>$(function(){ $('.upper').greekUpperChar(); });</script>
```

## Requirements
jQuery