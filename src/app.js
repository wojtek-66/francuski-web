function tlumacz(rzeczownik) {
   const slownik = [
      {
         rzeczownik: 'pies',
         tlumaczenie: 'chien',
         rodzajnik: 'le',
         tag: 'rodzaj męski (masculin)'
      },
      {
         rzeczownik: 'kot',
         tlumaczenie: 'chat',
         rodzajnik: 'le',
         tag: 'rodzaj męski (masculin)'
      },
      {
         rzeczownik: 'dom',
         tlumaczenie: 'maison',
         rodzajnik: 'la',
         tag: 'rodzaj żeński (féminin)'
      },
      {
         rzeczownik: 'samochód',
         tlumaczenie: 'voiture',
         rodzajnik: 'la',
         tag: 'rodzaj żeński (féminin)'
      },
      {
         rzeczownik: 'drzewo',
         tlumaczenie: 'arbre',
         rodzajnik: 'le',
         tag: 'rodzaj męski (masculin)'
      }
   ]

   return slownik.find(wpis => wpis.rzeczownik === rzeczownik)
}

const rzeczowniki = [
   'pies',
   'kot',
   'dom',
   'samochód',
   'drzewo'
]

$(document).ready(function() {

   // Ukryć tłumaczenie jeśli nie jest jeszcze dostępne
   $('#wynik-kontener').hide()

   // Dodać rzeczowniki do selecta
   rzeczowniki.forEach(slowo => {
      $('#rzeczownik').append(new Option(slowo, slowo))
   })

   function tlumaczRzeczownik(event) {
      event.preventDefault()
      // Wybrana opcja z selecta
      const rzeczownik = event.target.rzeczownik.value

      // Wysylanie zapytania do serwera
      // Otrzymujemy tlumaczenie

      // Wyswietlamy je na stronie
      // Symulujemy odpowiedz serwera
      const rezultat = tlumacz(rzeczownik)

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