let searchQuery = 'batman';
const API_KEY = `d40f20c56ea743ed651366d348211e5b`;

getMovies = _ =>{
const MOVIE_ENDPOINT = 'https://api.themoviedb.org';
const movieURL = `${MOVIE_ENDPOINT}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}`;

return fetch(movieURL)
    .then(res => res.json())
    .then(data => {
        const movies = [];
        data.results.forEach(movie => {
            let imagePath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

            let obj = {
            
            title: movie.title,
            image: imagePath
            }
            movies.push(obj);
        })
        return movies;
    })

}

const render = movies =>{
    let markup = '';
    movies.forEach(movie =>{
        markup += `
          <div class="movies__item">
               <img src="${movie.image}" alt="" class="movies__image">
                 <p class="movies__title">${movie.title}</p>
         </div>
        `;
    })
    document.querySelector('.movies').innerHTML = markup;
}

getMovies()
    .then(data =>{
        render(data);
    })