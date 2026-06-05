export const handler = async (event) => {
  let wynik
  let statusCode = 200

  // Pobierz słowo do tłumaczenia
  const rzeczownik = event.queryStringParameters?.rzeczownik;
  console.log(rzeczownik)

  if (rzeczownik) {
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
   if (rezultat) {
    wynik = rezultat
   } else {
    // Brak tlumaczenia w slowniku
    statusCode = 404
   }
  } else {
    // Brak słowa do przetłumaczenia w parametrze requestu
    statusCode = 400
  }

  // Wyślij odpowiedź do strony www
  const response = {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    },
    body: wynik
  }

  // Wysyłanie
  return response;
}
