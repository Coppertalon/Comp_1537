var pageSize = 3;
var currentPage = 2;

setup = function () {
    $.ajax({
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=749fd9ec1724adbbd9cfe5563fade508&language=en-US&page=1",
        type: "GET",
        success: function (data) {
            const startIndex = (currentPage - 1) * pageSize
            const stopIndex = startIndex + pageSize
            for (i = startIndex; i < stopIndex; i++) {

                $("main").append(
                    `
                    <div>
                        ${data.results[i].title}
                        <p>
                            ${data.results[i].overview}
                        </p>
                        <img src = "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" </img>
                        <button backdropPath = "${data.results[i].backdrop_path}" class = "img_but" >Get Image</button>
                        <hr>
                    </div>
                    `
                );

            };
        }
    });
    $("body").on("click", ".img_but", function () {
        $("aside").html(
            `<img src ="https://image.tmdb.org/t/p/w500/${$(this).attr("backdropPath")}">`
        )
    })
}


$(document).ready(setup)