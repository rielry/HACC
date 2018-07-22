var gbp;
var usd;
var eur;
var cad;
var aud;

$(document).ready(function() {
    gbp = $("#GBP");
    usd = $("#USD");
    eur = $("#EUR");
    cad = $("#CAD");
    aud = $("#AUD");
});


function gbpfunc()
{
    usd.val(parseFloat(gbp.val()) * 0.49246);
    eur.val(parseFloat(gbp.val()) * 0.69714);
    cad.val(parseFloat(gbp.val()) * 0.50221);
    aud.val(parseFloat(gbp.val()) * 0.43497);
}

function eurfunc()
{
    gbp.val(parseFloat(eur.val()) * 1.43448);
    usd.val(parseFloat(eur.val()) * 0.70641);
    cad.val(parseFloat(eur.val()) * 0.72037);
    aud.val(parseFloat(eur.val()) * 0.62382);
}

function cadfunc()
{
    gbp.val(parseFloat(cad.val()) * 1.99169);
    usd.val(parseFloat(cad.val()) * 0.98054);
    eur.val(parseFloat(cad.val()) * 1.38814);
    aud.val(parseFloat(cad.val()) * 0.86613);
}

function audfunc()
{
    gbp.val(parseFloat(aud.val()) * 2.29964);
    usd.val(parseFloat(aud.val()) * 1.13262);
    eur.val(parseFloat(aud.val()) * 1.60329);
    cad.val(parseFloat(aud.val()) * 0.88297);    
}

function usdfunc()
{
    gbp.val(parseFloat(usd.val()) * 2.03032);
    eur.val(parseFloat(usd.val()) * 1.41544);
    cad.val(parseFloat(usd.val()) * 1.01941);
    aud.val(parseFloat(usd.val()) * 0.88297);
}
