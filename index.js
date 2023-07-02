
const movies = document.getElementById('films')
fetch("http://localhost:3000/films")
    .then(response => response.json())
    .then(data => {
        data.forEach(films => {
            console.log(films)

            const moviesHeading = document.createElement('p')
            moviesHeading.innerText = films.title
            movies.appendChild(moviesHeading)

            const moviesImage = document.createElement('p')
            moviesImage.innerHTML = `<img src = "${films.poster}" alt= "The Giant Gila Monster">`
            movies.appendChild(moviesImage)

            const moviesRuntime = document.createElement('p')
            moviesRuntime.innerText = films.runtime
            movies.appendChild(moviesRuntime)

            const moviesShowtime = document.createElement('p')
            moviesShowtime.innerText = films.showtime
            movies.appendChild(moviesShowtime)

            const availableTicketsButton = document.createElement('button')
            availableTicketsButton.id = 'availableticketss'
            availableTicketsButton.innerText = 'available tickets'
            movies.appendChild(availableTicketsButton)
            // availableTicketsButton.addEventListener('click', ()=>{
                
            // } )

        }
        )
    })


function displayFirstMovie() {
    fetch('http://localhost:3000/films/1')
        .then(res => res.json())
        .then((data) => {
            console.log(data)

            const firstMovieCont = document.getElementById('firstmoviecontainer')

            const movieHead = document.querySelector('h4')
            movieHead.innerText = data.title
            firstMovieCont.appendChild(movieHead)

            const moviePoster = document.getElementById('poster')
            moviePoster.innerHTML = `<img src = "${data.poster}" alt= "The Giant Gila Monster">`
            firstMovieCont.appendChild(moviePoster)

            const movieRuntime = document.getElementById('runtime')
            movieRuntime.innerText = 'The runtime for this movie is ' + '' + data.runtime + '' + ' minutes'
            firstMovieCont.appendChild(movieRuntime)

            const movieShowtime = document.getElementById('showtime')
            movieShowtime.innerText = 'This movie starts at ' + '' + data.showtime
            firstMovieCont.appendChild(movieShowtime)

            const ticketbutton = document.createElement('button')
            ticketbutton.id = 'availableticketss'
            ticketbutton.innerText = 'AVAILABLE TICKETS'
            firstMovieCont.appendChild(ticketbutton)

            const tickets = document.getElementById('availabletickets')
            tickets.innerText = 'available_tickets'
            firstMovieCont.appendChild(tickets)

            const ticketting = document.getElementById('availabletickets')
            ticketting.addEventListener('click', availableTickets(ticketssold, theatrecapacity))


            // tickets.addEventListener('click', function availableTickets(ticketssold, theatrecapacity) {
            //     if (ticketssold <= theatrecapacity) {
            //         if (ticketssold === theatrecapacity) {
            //             return 'no available tickets'
            //         } else {
            //             if (ticketssold < theatrecapacity) {
            //                 return (theatrecapacity - ticketssold)
            //             }
            //         }
            //     }
            // })

            //tickets.innerText = availableTickets (ticketssold, theatrecapacity)
            //const availabletickets = availableTickets (ticketssold, theatrecapacity)


        })
}
displayFirstMovie()

function availableTickets(ticketssold, theatrecapacity) {
    if (ticketssold <= theatrecapacity) {
        if (ticketssold === theatrecapacity) {
            return 'no available tickets'
        } else {
            if (ticketssold < theatrecapacity) {
                return (theatrecapacity - ticketssold)
            }
        }
    }
}
console.log(availableTickets(1, 3))





// movieHead.addEventListener ('click', ()=> {
//     availableTickets(ticketssold, theatrecapacity)      
// })


//     const firstMovie = document.createElement('div')
//     firstMovie.innerHTML = `
//     ${data.title}
//     <img src = "${data.poster}" alt= "The Giant Gila Monster">
//     ${data.runtime}
//     ${data.showtime}
//     available tickets
//     `

// firstMovieCont.appendChild (firstMovie)

//     console.log (firstMovieCont)
// })

//

//


// moviesHead.addEventListener('click', () => {
//     displayMovieDetails(films)
// })

// moviesHead.addEventListener('click', () => {
//     displayMovieDetails(films)
//      })

//displayMovieDetails(films)

// movieTitle.addEventListener('click', ()

// function movieWhenClicked (moviesDetails, films) {
//     moviesDetails.addEventListener ('click', ()=> {
//         displayMovieDetails(films)
//     })
// }
// movieWhenClicked(moviesDetails, films)
// displayMovieDetails(films)
// moviesDetails.addEventListener('click', () => {
//     displayMovieDetails(films)
// })
// // function displayMovieDetails(films) {
//     movies.innerHTML = ''

//     const moviesPoster = document.createElement('movieposter')
//     moviesPoster.src = films.poster
//     movies.appendChild(moviesPoster)

//     const moviesHead = document.createElement('p')
//     moviesHead.innerText = films.title
//     movies.appendChild(moviesHead)

//     const moviesRuntime = document.createElement('p')
//     moviesRuntime.innerText = films.runtime
//     movies.appendChild(moviesRuntime)

//     const moviesShowtime = document.createElement('p')
//     moviesShowtime.innerText = films.showtime
//     movies.appendChild(moviesShowtime)

//     const availableTicketsButton = document.createElement('button')
//     availableTicketsButton.id = 'availableticketss'
//     availableTicketsButton.innerText = 'availableetickets'
//     movies.appendChild(availableTicketsButton)

//     moviesHead.addEventListener('click', () => {
//         displayMovieDetails(films)
//     })
// }
// displayMovieDetails(films)




