/* -------------------------------------------------------------------------------------------------
    @BOOTSTRAP
------------------------------------------------------------------------------------------------- */

$(function()
{ 
    $('body').application({
        P_CSS:      'css/',
        P_IMAGES:   'images/',
        P_JS:       'js/',
        P_PICTURES: 'pictures/'
    }); 
});

/* -------------------------------------------------------------------------------------------------
    @APPLICATION
------------------------------------------------------------------------------------------------- */

$.Controller('Application', 
{
    pluginName: 'application',
    defaults: {
        P_CSS:      'css/',
        P_IMAGES:   'images/',
        P_JS:       'js/',
        P_PICTURES: 'pictures/'
    }
}, 
{
    init: function () 
    {
        var self = this;

        /**
         * Application params
         */
        this.test = new Object;

        /**
         * Bootstrap
         */
        this.initPolyfills();
    },

    testBrowser: function()
    {
        this.test.mediaqueries = $('html').hasClass('mediaqueries');
        this.test.placeholder = $('html').hasClass('placeholder');
    },

    initPolyfills: function()
    {
        for (val in this.test) {
            if (!this.test[val]) {
                this.initPolyfill(val);
            }
        }
    },

    initPolyfill: function(polyfill)
    {
        switch (polyfill) {
            case 'mediaqueries': this.initMediaQueries(); break;
            case 'placeholder': this.initPlaceholder(); break;
            default: break;
        }
    },

    initMediaQueries: function()
    {
        yepnope([{
            load: 'js/polyfills/media-queries.js'
        }]);
    },

    initPlaceholder: function()
    {
        yepnope([{
            load: 'js/polyfills/placeholder.js'
        }]);
    },

    fixIframes: function()
    {
        $("iframe").each(function(){
            var ifr_source = $(this).attr('src');
            var wmode = "wmode=transparent";

            if(ifr_source.indexOf('?') != -1) {
                $(this).attr('src', ifr_source + '&' + wmode);
            } else {
                $(this).attr('src', ifr_source + '?' + wmode);
            } 
        });
    }
});

/* -------------------------------------------------------------------------------------------------
    @
------------------------------------------------------------------------------------------------- */

