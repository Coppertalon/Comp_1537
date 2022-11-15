setup = function () {
    $.ajax({
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=749fd9ec1724adbbd9cfe5563fade508&language=en-US&page=1",
        type: "GET",
        success: function (data) {
            console.log(data["results"][0].title)
            data.results.forEach(function (movie) {

                $("main").append(`<div>
                    ${movie.title}
                    <p>
                        ${movie.overview}
                    </p>
                    <img src = "https://image.tmdb.org/t/p/w500/${movie.poster_path}" </img>
                    <button backdropPath = "${movie.backdrop_path}" class = "img_but" >Get Image</button>
                    <hr>
                    </div>`
                );
            });
        }
    })
    $("body").on("click", ".img_but", function () {
        $("aside").html(
            `<img src ="https://image.tmdb.org/t/p/w500/${$(this).attr("backdropPath")}">`
        )
    })
}
$(document).ready(setup)
