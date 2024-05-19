document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const movieTitleInput = document.getElementById('movieTitle');
    const movieInfo = document.getElementById('movieInfo');

    searchButton.addEventListener('click', () => {
        const movieTitle = movieTitleInput.value.trim();
        if (movieTitle === '') {
            alert('Lütfen bir film adı girin.');
            return;
        }
        fetchMovieData(movieTitle);
    });

    async function fetchMovieData(title) {
        const apiKey = '1CkGcEXxj7MvxFwowfWNGA:6x1qDbuPYK6k2oAFj1V6Mp'; 
        const url = `https://api.collectapi.com/imdb/imdbSearchByName?query=${encodeURIComponent(title)}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'authorization': `apikey ${apiKey}`,
                    'content-type': 'application/json'
                }
            });
            const data = await response.json();

            console.log(data); // API yanıtını kontrol edin

            if (data.success) {
                displayMovieData(data.result);
            } else {
                alert('Film bulunamadı.');
            }
        } catch (error) {
            console.error('Hata:', error);
            alert('Film bilgilerini alırken bir hata oluştu.');
        }
    }

    function displayMovieData(movies) {
        movieInfo.innerHTML = ''; 
    
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie'); 
    
            movieElement.innerHTML = `
                <h2>${movie.Title}</h2>
                <p><strong>Yıl:</strong> ${movie.Year}</p>
                <p><strong>Tür:</strong> ${movie.Type}</p>
                <img src="${movie.Poster}" alt="${movie.Title} Poster">
            `;
    
            movieInfo.appendChild(movieElement);
        });
    }
   
});
