var pageSize = 3;
var currentPage = 1;
var movie_name = "up";

const display = function () {
    $("#movies").empty();
    $("#page_title").html(`<h2 id = "page_num_display"> ${currentPage} </h2>`);
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=749fd9ec1724adbbd9cfe5563fade508&language=en-US&page=1&include_adult=false&query=${movie_name}`,
        type: "GET",
        success: function (data) {
            const startIndex = (currentPage - 1) * pageSize
            const stopIndex = startIndex + pageSize
            for (i = startIndex; i < stopIndex; i++) {

                $("#movies").append(
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
}


function get_movie() {
    movie_name = $("#search_term").val()
    console.log(movie_name)
    currentPage = 1
    display();
}

function set_page_num() {
    currentPage = $(this).attr('id')
    console.log(movie_name)
    display();
}

function set_page_rel() {
    let set_page = $(this).attr('id')
    console.log(set_page)
    if (set_page == "first") {
        currentPage = 1
    }
    if (set_page == "last") {
        currentPage = 7
    }
    if (set_page == "next") {
        currentPage += 1
        if (currentPage > 7) {
            currentPage = 7
        }
    }
    if (set_page == "previous") {
        currentPage -= 1
        if (currentPage < 1) {
            currentPage = 1
        }
    }
    display();
}


setup = function () {

    $("select").change(() => {
        pageSize = Number($("select option:selected").val())
        display();
    })
    display();

    $("body").on("click", ".img_but", function () {
        $("aside").html(
            `<img src ="https://image.tmdb.org/t/p/w500/${$(this).attr("backdropPath")}">`
        )
    })

    $("#page_numbers").on("click", ".num_page_btn", set_page_num)
    $("#search_btn").click(get_movie);
    $("#buttons").on("click", ".rel_page_btn", set_page_rel)
}


$(document).ready(setup)