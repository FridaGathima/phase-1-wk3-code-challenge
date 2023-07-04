
const movielistcontainer = document.getElementById('films')
const firstMovieCont = document.getElementById('firstmoviecontainer')
const movieitemdetails = document.getElementById('singlemovdiv')



function displayFirstMovie() {
    fetch("http://localhost:3000/films/1")
        .then(res => res.json())
        .then((data) => {
            console.log(data)


            const movieHead = document.querySelector('h4')
            movieHead.innerText = data.title
            firstMovieCont.appendChild(movieHead)

            const moviePoster = document.getElementById('poster')
            moviePoster.innerHTML = `<img src = "${data.poster}" alt= "The Giant Gila Monster" class = "firstp">`
            firstMovieCont.appendChild(moviePoster)

            const runtimetext = document.createElement('p')
            runtimetext.innerText = "Runtime   " + ": " + data.runtime + " minutes"
            firstMovieCont.append(runtimetext)

            const availabletiks = document.createElement('p')
            availabletiks.id = "availablefirsttickets"
            availabletiks.innerText = "Availabletickets " + "= " + (data.capacity - data.tickets_sold)
            firstMovieCont.append(availabletiks)

            const availablefirsttikButton = document.createElement('button')
            availablefirsttikButton.innerText = "Buy ticket"

            firstMovieCont.append(availablefirsttikButton)
            availablefirsttikButton.addEventListener('click', () => {

                const availablefirsttikss = document.getElementById('availablefirsttickets')
                availablefirsttikss.innerText = "Available tickets = " + (data.capacity)--


            })
        })
    }
displayFirstMovie()

function showallmovielist() {
                fetch("http://localhost:3000/films")
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data)
                        data.forEach(dataitem => {

                            const movielistitem = document.createElement('li')
                            movielistitem.innerText = dataitem.title
                            movielistcontainer.append(movielistitem)

                            movielistitem.addEventListener('click', () => {
                                displayMovieItemFun(dataitem)
                            })

                        });
                    })
            }
showallmovielist()

function displayMovieItemFun(dataitem) {
                movieitemdetails.innerHTML = ""

                const movieitemtitle = document.createElement('p')
                movieitemtitle.innerText = dataitem.title
                movieitemdetails.append(movieitemtitle)

                const movieitemposter = document.createElement('img')
                movieitemposter.src = dataitem.poster
                movieitemdetails.append(movieitemposter)

                const movieitemruntime = document.createElement('p')
                movieitemruntime.innerText = "Runtime: " + dataitem.runtime + " minutes"
                movieitemdetails.append(movieitemruntime)

                const movieitemshowtime = document.createElement('p')
                movieitemshowtime.innerText = "Showtime: " + dataitem.showtime
                movieitemdetails.append(movieitemshowtime)

                const movieitemavailabletic = document.createElement('p')
                movieitemavailabletic.id = 'availabletickss'
                movieitemavailabletic.innerText = "Available tickets " + "= " + (dataitem.capacity - dataitem.tickets_sold)
                movieitemdetails.append(movieitemavailabletic)

                const availableticsButton = document.createElement('button')
                availableticsButton.innerText = "Buy ticket"

                movieitemdetails.append(availableticsButton)
                availableticsButton.addEventListener('click', () => {

                    const availabletiks = document.getElementById('availabletickss')
                    availabletiks.innerText = "Available tickets = " + (dataitem.capacity)--


                })
            }