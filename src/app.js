$(document).ready(function() {

   $("#form-tlumaczenie").submit(function(event) {
      event.preventDefault()
      console.log(event.target.rzeczownik.value)
   })

})