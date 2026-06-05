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

   const rezultat = slownik.find(wpis => wpis.rzeczownik === rzeczownik)
   return rezultat
}

function tlumaczSerwer(rzeczownik) {
   // Pobieranie tlumaczenia z serwera
   $.ajax({
      url: 'https://jlcs44f6sj3xmrvsr4qjqqcrjm0rffyt.lambda-url.eu-west-1.on.aws',
      method: 'GET',
      data: {
         rzeczownik: rzeczownik
      },
      success: function(rezultat) {
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
      },
      error: function(error) {
         console.error('Błąd podczas tłumaczenia:', error)
         $('#wynik-kontener').hide()
         $('#error').show()
      }
   })
}

const rzeczowniki = [
   'pies',
   'kot',
   'dom',
   'samochód',
   'drzewo',
   'kwiat'
]

$(document).ready(function() {

   // Ukryć tłumaczenie jeśli nie jest jeszcze dostępne
   $('#wynik-kontener').hide()
   $('#error').hide()

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
      tlumaczSerwer(rzeczownik)

   }

   $("#form-tlumaczenie").submit(tlumaczRzeczownik)

})