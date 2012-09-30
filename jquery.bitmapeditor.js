/**
 jquery.bitmapeditor.js ver 0.1

The MIT License

Copyright (c) 2012 yapr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
(function($) {
	$.fn.bitmapeditor = function(options){
    /**
     * default Options
     */
     var defaults = {
       row:16,
       col:16,
     };

		return this.each(function(){
      var opts = $.extend(defaults , options);

      for(var i = 0; i < opts.row; i++){
        var rowelem = $("<div class='row' />");

        for(var k = 0; k < opts.col; k++){
          rowelem.append($("<div class='col' />"));
        }
        $(this).append(rowelem);
      }

      $(this).css("background" , "#ff0");
    });
  }
})(jQuery);