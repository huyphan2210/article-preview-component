$(document).ready(function() {
    $('.share').click(function() {
        const shareVisibility = $('.shareIcons').css('visibility');
        if (shareVisibility !== 'hidden') {
            const shareDisplay = $('.shareIcons').css('display');
            if (shareDisplay === 'none') {
                $('.shareIcons').css('display', 'flex');
                $(this).css('background-color', 'hsl(217, 19%, 35%)');
                $(this).find('img:first-child').css('filter', 'brightness(4)');
            } else {
                $('.shareIcons').css('display', 'none');
                $(this).css('background-color', '');
                $(this).find('img:first-child').css('filter', '');
            }
        } else {
            const shareMobileIndex = $('.shareMobile').css('z-index');
            if (shareMobileIndex === '0') {
                $('.shareMobile').css('z-index', -1);
                $('.share').css('position', '');
            } else {
                $('.shareMobile').css('z-index', 0);
                $('.share').css('position', 'absolute');
                $('.share').css('right', '0');
                $('.share').css('z-index', '1');
            }
            
        }
    })
})
