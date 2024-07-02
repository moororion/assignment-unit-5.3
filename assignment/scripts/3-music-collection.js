console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let awesomeCollection = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(awesomeCollection)
  return awesomeCollection
}

console.log(addToCollection(myCollection, 'Volver Al Futuro', 'Oscar Maydon', '2024'))
console.log(addToCollection(myCollection, 'Rompe La Dompe', 'Oscar Maydon', '2023'))
console.log(addToCollection(myCollection, 'LADY GAGA', 'Peso Puma', '2023'))
console.log(addToCollection(myCollection, 'Dinero', 'Trinidad Cardon', '2018'))
console.log(addToCollection(myCollection, 'Need it', 'NBA Youngboy', '2020'))
console.log(addToCollection(myCollection, '1004 KM', 'Junior H', '2021'))
console.log(addToCollection(myCollection, 'Y LLORO', 'Junior H', '2021'))
console.log(addToCollection(myCollection, 'Sin yolanda', 'Peso Puma', '2024'))

function showCollection(collection) {
  for (let song of collection) {
    console.log(`${song.title} by ${song.artist}, published in ${song.yearPublished}`);
  }
}

console.log(showCollection(myCollection));

function findByArtist(collection, artist) {
  let matchingSongs = [];

  for (let song of collection) {
    if (song.artist === artist) {
      matchingSongs.push(song);
    }
  }

  return matchingSongs;
}

console.log(findByArtist(myCollection, 'Peso Puma'));
console.log(findByArtist(myCollection, 'Junior H'));
console.log(findByArtist(myCollection, 'Oscar Maydon'));
console.log(findByArtist(myCollection, '21 Savage'));
console.log(findByArtist(myCollection, 'Taylor Swift'));

//Going to try find by year published

function findByYear(collection, yearPublished) {
  let matchingYear = []
  for (let year of collection) {
    if (year.yearPublished === yearPublished) {
      matchingYear.push(year);
    }
  }
  return matchingYear
}

console.log(findByYear(myCollection, '2023'));
console.log(findByYear(myCollection, '2020'));
console.log(findByYear(myCollection, '2021'));
console.log(findByYear(myCollection, '2024'));
console.log(findByYear(myCollection, '2014'));



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
