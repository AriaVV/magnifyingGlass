$(function () {
    magnifyingGlass();

    function magnifyingGlass() {
        var $box = $('#box'),
            $smallBox = $('#smallBox'),
            $mask = $('#mask'),
            $bigBox = $('#bigBox'),
            $bigImg = $bigBox.children();
        $smallBox.on('mouseenter', function () {
            $mask.css('display', 'block');
            $bigBox.css('display', 'block');
        });
        $smallBox.on('mouseleave', function () {
            $mask.css('display', 'none');
            $bigBox.css('display', 'none');
        });

        $smallBox.on('mousemove', function (e) {
            var $pageX = e.pageX + $(document).scrollLeft(),
                $pageY = e.pageY + $(document).scrollTop(),
                $left = $pageX - $box.offset().left,
                $top = $pageY - $box.offset().top,
                $maskW = $left - $mask.width() / 2,
                $maskH = $top - $mask.height() / 2;
            if ($maskW < 0) $maskW = 0;
            if ($maskW > $smallBox.width() - $mask.width()) $maskW = $smallBox.width() - $mask.width();
            if ($maskH < 0) $maskH = 0;
            if ($maskH > $smallBox.height() - $mask.height()) $maskH = $smallBox.height() - $mask.height();
            $mask.css('left', $maskW + "px");
            $mask.css('top', $maskH + "px");
            var $widthClient = $bigImg.width() - $bigBox.width();
            var $heightClient = $smallBox.width() - $mask.width();
            var $over = $widthClient / $heightClient;
            $bigImg.css('left', (-$over * $maskW) + "px");
            $bigImg.css('top', (-$over * $maskH) + "px");
        });
    }
})