(function ($) {
    'use strict';

    Drupal.behaviors.customBehavior = {
        attach: function (context, settings) {
            var lastScrollTop = 100;
            var header = $('.header');
            var headerHeight = header.outerHeight();

            $(window).scroll(function () {
                var scrollTop = $(this).scrollTop();

                if (Math.abs(scrollTop - lastScrollTop) > 2) {
                    if (scrollTop > lastScrollTop ) {
                        // Faites défiler vers le bas, masquez progressivement la navbar
                        header.addClass('hide');
                    } else {
                        // Faites défiler vers le haut, affichez progressivement la navbar
                        header.removeClass('hide');
                    }
                    lastScrollTop = scrollTop;
                }
            });
        }
    };

})(jQuery);
