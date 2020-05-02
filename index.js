const allMovies = document.querySelector('.all-movies')
const movieList = document.getElementById('search-form');

movieList.addEventListener("submit", function (e) {
    e.preventDefault();
    

    function renderMovies(movieData) {
        let movieHtmlArray = movieData.map(function (currentMovie) {
            return ` 
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="card w-100 h-100">
                <img class="card-img-top w-100 p-3 " src="${currentMovie.Poster}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">${currentMovie.Year}</p>
                    <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')" >Add to Favorite</a>
                    <a href='#/' id='trig1'>HOVER</a>
                    <iframe id='ifrm1' name='ifrm1' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src='${currentMovie.Intro}'></iframe>
                </div>    
            </div>
          </div>
          `
        });
        console.log(movieHtmlArray);
        return movieHtmlArray.join('');

    }

    const moviesContainer = document.querySelector('.all-movies')
    // const moviesRow = document.querySelector('.row')
    moviesContainer.innerHTML = renderMovies(movieData);

})

// onmouseover="iframe src="https://days.to/22-january/2017" 



// function saveToWatchlist(imdbID){
//     console.log(imdbID);
//     const movie = movieData.find(function(currentMovie){
//         return currentMovie.imdbID == imdbID;
//     });
//     let watchlistJSON = localStorage.getItem('watchlist');
//     let watchlist = JSON.parse(watchlistJSON);
//     if (watchlistJSON == null) {
//         watchlistJSON = [];
//     }
//     watchlist.push(movie);
//     watchlistJSON = JSON.stringify(watchlist);
//     localStorage.setItem('watchlist',watchlistJSON);
// }

function saveToWatchlist(imdbID) {
    console.log(imdbID);
    const movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == imdbID;
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
        if (watchlistJSON == null) {
        watchlistJSON = [];
        }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}

// const movie = movieData.find();
// function find()

// const movie = movieData.find(function(currentMovie){ 
//     return currentMovie.imdbID == imdbID; 
// })
// Give the find method an anonymous function that takes currentMovie as a parameter
// Have this anonymous function return currentMovie.imdbID == imdbID;
// In the end, you’ll have
// const movie = movieData.find(function(currentMovie){ 
//             return currentMovie.imdbID == imdbID; 
// });



{/* <iframe width="1211" height="681" src="https://www.youtube.com/embed/xLcHPsWK5xg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }


// {/* <a href='#/' id='trig1'></a>
//         <iframe id='ifrm1' name='ifrm1' src='https://days.to/until/christmas'></iframe> */}


// const addFavorite = document.getElementById('.btn');
// addFavorite.addEventListener('click', function(){
//     const newImbd = currentMovie.imbdID 
//     printIt = newImbd; 
//     console.log(printIt);
//     //add imbdID into watchlist 
// });

// function saveToWatchlist(imdbID) {
//     console.log(imdbID);

// }
// Create the variable movie with const movie = 
// Set it equal to movieData.find();
// Give the find method an anonymous function that takes currentMovie as a parameter
// Have this anonymous function return currentMovie.imdbID == imdbID;
// In the end, you’ll have
// const movie = movieData.find(function (currentMovie) {
//     return currentMovie.imdbID == imdbID;
// });


// addFavorite.addEventListener('click', function () {
//     console.log(currentMovie.imdbID)
        // addFavorite.textContent = "Generating Doggo...";

            // .then(function (data) {

            // console.log(currentMovie[2])
                // const img = document.createElement('img');
                // img.setAttribute('src', data.message);


                // const imagesDiv = document.getElementById('images');
                // imagesDiv.innerHTML = '';
                // imagesDiv.appendChild(img);

                // dogButton.textContent = 'Generate Doggo';
            // });
    // });
// })