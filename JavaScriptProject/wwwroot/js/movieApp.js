﻿const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

async function getMovies() {
	const response = await fetch(APIURL);
	const responseData = await response.json();
	responseData.results.forEach((movie) => {
		const { poster_path, title, vote_average } = movie;
		const movieEl = document.createElement("div");
		movieEl.classList.add("movie");
		movieEl.innerHTML = `
		   <img 
		   src="${IMGPATH+poster_path}" 
		   alt="${title}" 
		   />
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${vote_average}</span>
			</div>
			 `;
			
		document.body.appendChild(movieEl);
	});
	return responseData;
}
getMovies();