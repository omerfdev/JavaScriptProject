const imgPATH = "https://image.tmdb.org/t/p/w1280";
const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(apiURL);


async function getMovies(url) {
	const response = await fetch(url);
	const responseData = await response.json();
	showMovies(responseData.results);	
}

function showMovies(movies) {
	
	movies.forEach((movie) => {
		const { poster_path, title, vote_average,overview } = movie;
		const movieEl = document.createElement("div");
		movieEl.classList.add("main");
		movieEl.innerHTML = `
		   <img 
		   src="${imgPATH + poster_path}" 
		   alt="${title}" 
		   />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}" >${vote_average}</span>
			</div>
			<div class="overview" style="color:white"> ${overview}</div>
			 `;

		main.appendChild(movieEl);
	});
	
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	}
	else if (vote >= 5) { return 'orange'; }
	else {
		return 'red';
	}
}


form.addEventListener("submit", (e) => {
	e.preventDefault();

	const searchTerm = search.Value;
	if (searchTerm) {
		getMovies(searchAPI+searchTerm);
		search.Value = "";
	}

});



