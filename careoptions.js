/**
 * main.js
 *
 * Main JavaScript file for your campaign.
 */

var $color          = "#8ed4ed",
    $highlightColor = { color: $color },
    $animationSpeed = 750;

$(function() {
    $("a[href^='#']").on('click', function (e) {
        var hash    = $(this).attr('href').substr(1),
            $target = $('#' + hash),
            data    = $(this).data();


        if (data.toggle && data.toggle === 'collapse') {
            console.group('Toggle Link Clicked');
            console.log('hash:', hash);
            console.log('$target:', $target);
            console.log('data:', data);
            console.log('scroll:', false);
            console.groupEnd();
            return;
        } else {
            console.group('Scrollable Link Clicked');
            console.log('hash:', hash);
            console.log('$target:', $target);
            console.log('$target.offset:', $target.offset());
            console.groupEnd();

            if ($target.offset()) {
                e.preventDefault();
                $('body,html').animate({ scrollTop: $target.offset().top }, $animationSpeed);
            }
        }

        // if (data.toggle && data.toggle === 'collapse') {
        //     return;
        // } else {
        //     e.preventDefault();
        //     $('body').animate({ scrollTop: $target.offset().top }, $animationSpeed, function () {
        //         $target.effect('highlight', $highlightColor);
        //     });
        // }
    });
});
