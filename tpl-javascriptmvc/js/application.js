/* -------------------------------------------------------------------------------------------------
    @BOOTSTRAP
------------------------------------------------------------------------------------------------- */

$(function() { $('body').application({  }); });

/* -------------------------------------------------------------------------------------------------
    @APPLICATION
------------------------------------------------------------------------------------------------- */

$.Controller('Application', 
{
    pluginName: 'application',
    defaults: {
        
    }
}, 
{
    init: function () 
    {
        this.fixIframes();
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

