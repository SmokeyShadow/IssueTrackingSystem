$(document).ready(function(){
    // convert selects already on the page at dom load
    $('select.form-control').combobox();

    $('#it').click(function(e){
        $('ul.dropdown-menu').toggle();
    });

//  $('input').focus(function(e){
//    $('ul.dropdown-menu').toggle();
//  });

});
