$(document).ready(function() {

   // Ukryć tłumaczenie jeśli nie jest jeszcze dostępne
   $('#wynik-kontener').hide()

   function tlumaczRzeczownik(event) {
      event.preventDefault()
      const rzeczownik = event.target.rzeczownik.value

      // Wysylanie zapytania do serwera
      // Otrzymujemy tlumaczenie

      // Wyswietlamy je na stronie
      // Symulujemy odpowiedz serwera
      const rezultat = {
         rzeczownik: rzeczownik,
         tlumaczenie: 'chien',
         rodzajnik: 'le',
         tag: 'rodzaj męski (masculin)'
      }

      // Wyświetlić cały kontener z tłumaczeniem
      $('#wynik-kontener').show()

      // Przypisz rzeczownik do "#do-tlumaczenia"
      $('#do-tlumaczenia').text(rezultat.rzeczownik)

      // Przypisz tlumaczenie do "#wynik"
      $('#wynik').text(rezultat.tlumaczenie)

      // Przypisz rodzajnik do "#rodzajnik"
      $('#rodzajnik').text(rezultat.rodzajnik)

      // Przypisz tag do "#tag"
      $('#tag').text(rezultat.tag)

   }

   $("#form-tlumaczenie").submit(tlumaczRzeczownik)

})