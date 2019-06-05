$(document).ready(() => {
    
    $('.close-alert').click(() => {
        $('.alert').alert('close')
    })

    $('.alert').on('close.bs.alert', ()=>{
        console.log('alerts closed --- ')
    })

})