
<script>

    (function() {

        var screenWidth = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        if(screenWidth < 736 && screenWidth > 414) {
            var secondSet = $('.listingCities .cities-quarter-div:nth-child(2) ul').html();
            $('.cities-quarter-div:nth-child(2)').css('display', 'none');
            $('.listingCities .cities-quarter-div:nth-child(1) ul').append(secondSet);

            var fourthSet = $('.listingCities .cities-quarter-div:nth-child(4) ul').html();
            $('.cities-quarter-div:nth-child(4)').css('display', 'none');
            $('.listingCities .cities-quarter-div:nth-child(3) ul').append(fourthSet);
        }


    })();
</script>