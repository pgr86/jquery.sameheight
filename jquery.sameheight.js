/**
 * jquery.sameHeight.js
 * @author  Patrick Gollmer
 * @version 1.0
 *
 * usage: $('.box').sameHeight();
 *
 * Brings all .box-Elements to height of the heighest one.
 * In many grid layouts boxes of the same row should have
 * the same height:
 *
 *   $('.row').each(function() {
 *      $(this).find('.box').sameHeight();
 *   })
 *
 * There is an opional callback to hook in, after height
 * is synchronized. E.g. add some css class:
 *
 *  $('.box').sameHeight(function(elem) {
 *      $(elem).addClass('foo')
 *  });
 */
$.fn.sameHeight = function(callback) {
    var maxHeight = 0,
        currentHeight;
        if($(this).length > 1)
        {
            $(this).each(function() {
                $(this).height('auto');
                currentHeight = $(this).outerHeight();
                maxHeight = (currentHeight > maxHeight) ? currentHeight : maxHeight;
            });

            $(this).each(function() {
                var maxHeightCurrent = maxHeight;
                $(this).height(maxHeightCurrent);
                if(typeof callback === 'function') callback($(this));
            });
        }

    return this;
};
