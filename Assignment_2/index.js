var currentPage = 1;
var pageSize = 3;

var movie_name = "avengers";
var num_pages = null

const display = function () {

    $("#movies").empty();
    $("#page_numbers").empty();
    $("#page_title").html(`<h2 id = "page_num_display"> ${currentPage} </h2>`);

    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=749fd9ec1724adbbd9cfe5563fade508&language=en-US&page=1&include_adult=false&query=${movie_name}`,
        type: "GET",
        success: function (data) {

            const startIndex = (currentPage - 1) * pageSize
            const stopIndex = startIndex + pageSize
            num_pages = Math.ceil(data.results.length / pageSize)

            for (i = startIndex; i < stopIndex; i++) {
                if (i < data.results.length) {
                    $("#movies").append(`<div>
                        ${data.results[i].title}

                        <p>
                            ${data.results[i].overview}
                        </p>

                        <img src = "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" </img>
                        <button backdropPath = "${data.results[i].backdrop_path}" class = "img_but" >Get Image</button>
                        <hr>

                    </div>`);
                }
            };

            for (j = 1; j <= pages; j++) {
                $("#page_numbers").append(`<button id="${j}" class="num_page_btn">${j}</button>`);
            };

        }
    });
}


function get_movie() {
    movie_name = $("#search_term").val()
    currentPage = 1
    display();
}

function set_page_num() {

    $("#previous").html(`<button id="previous" class="rel_page_btn">Prev.</button>`)
    $("#next").html(`<button id="next" class="rel_page_btn">Next</button>`)

    currentPage = $(this).attr('id')
    display();
}

function set_page_rel() {

    $("#previous").html(`<button id="previous" class="rel_page_btn">Prev.</button>`)
    $("#next").html(`<button id="next" class="rel_page_btn">Next</button>`)

    let set_page = $(this).attr('id')

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

    $("body").on("click", ".img_but", function () {
        $("aside").html(`<img src ="https://image.tmdb.org/t/p/w500/${$(this).attr("backdropPath")}">`)
    })

    display();

    $("#search_btn").click(get_movie);

    $("#page_numbers").on("click", ".num_page_btn", set_page_num)
    $("#buttons").on("click", ".rel_page_btn", set_page_rel)
}
$(document).ready(setup)