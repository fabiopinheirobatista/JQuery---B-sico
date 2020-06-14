$(function(){
    $('#l1').click(function(){
        $('#i1').show().css("height", "20em")
        $('#i2').hide()
        $('#i3').hide()
        $('#i4').hide()
    })
    $('#l2').click(function(){
        $('#i1').hide()
        $('#i2').show().css("height", "20em")
        $('#i3').hide()
        $('#i4').hide()
    })
    $('#l3').click(function(){
        $('#i1').hide()
        $('#i2').hide()
        $('#i3').show().css("height", "20em")
        $('#i4').hide()
    })
    $('#l4').click(function(){
        $('#i1').hide()
        $('#i2').hide()
        $('#i3').hide()
        $('#i4').show().css("height", "20em")
    })
})