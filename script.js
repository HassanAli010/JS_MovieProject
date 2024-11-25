const movies = [
    {
        id: 1,
        title: "Tiger",
        release_date: "2024-07-10",
        posterPath: 'https://img.freepik.com/premium-photo/wild-animal-nature_1048944-24867667.jpg?ga=GA1.1.1000645756.1703662371',
        category: 'Action'
    },
    {
        id: 2,
        title: "Dream",
        release_date: "2024-07-10",
        posterPath: 'https://cdn-cm.freepik.com/resources/a4c0f4f4-6057-49e1-9698-f78b7ce4735d.jpg?token=exp=1732520540~hmac=519f4528d22ff6f94ed62121c29484ed5c6a4aeca760eec241bf3cc457f8dea5',
        category: 'Action'
    },
    {
        id: 3,
        title: "Animal Pet",
        release_date: "2024-07-10",
        posterPath: 'https://img.freepik.com/premium-photo/close-up-squirrel-eating-food_1048944-5302226.jpg?ga=GA1.1.1000645756.1703662371',
        category: 'Thriller'
    },
    {
        id: 4,
        title: "Enjoyment",
        release_date: "2024-07-10",
        posterPath: 'https://img.freepik.com/free-photo/people-drinking-cocktails_23-2150168844.jpg?ga=GA1.1.1000645756.1703662371',
        category: 'Animation'
    },
    {
        id: 5,
        title: "Eating",
        release_date: "2024-07-10",
        posterPath: 'https://img.freepik.com/free-photo/view-people-learning-how-make-traditional-sushi-dish_23-2151186458.jpg?t=st=1732518766~exp=1732522366~hmac=09dcb6f6e79bca76af61a1c00870aaf72d5358b7a5b50a8a6cd3cde492248c89&w=360',
        category: 'Horror'
    },
    {
        id: 6,
        title: "Happy Life",
        release_date: "2024-07-10",
        posterPath: 'https://img.freepik.com/free-photo/mom-spending-time-with-kid-beach_23-2150924958.jpg?t=st=1732518825~exp=1732522425~hmac=466ee7d07d0453b23edbc9e0ac1250301a59b1fa57215bafd2be808110208562&w=360',
        category: 'Drama'
    },
    {
        id: 7,
        title: "Sunset",
        release_date: "2024-07-10",
        posterPath: 'https://cdn-cm.freepik.com/resources/f80de537-5825-4333-8f44-26f649d29fc4.jpg?token=exp=1732520613~hmac=8f2f05a00aa6f2c4dabd950c9472a3ca5e1c3918a975aacf75536d75ca881c26',
        category: 'Drama'
    },
    {
        id: 8,
        title: "Rain",
        release_date: "2024-07-10",
        posterPath: 'https://cdn-cm.freepik.com/resources/628570c3-9a32-4b57-a647-580669aa5876.jpg?token=exp=1732520094~hmac=d309e65b7d50911f6646013aabcbaeca73ada97852ca223a9ecc5f157b477227',
        category: 'Sci-Fi'
    },
    {
        id: 9,
        title: "evil",
        release_date: "2024-07-10",
        posterPath: 'https://cdn-cm.freepik.com/resources/72f03f8c-ac0c-4736-a85b-13435eb0c557.jpg?token=exp=1732520370~hmac=ab071dd1857c2af5b783671224ca0115847672d80b5ed2361693aa19b872503c',
        category: 'Sci-Fi'
    },
];

let dom_container = document.querySelector('.dom_container');
let all = document.querySelector('#all');
let action = document.querySelector('#action');
let thriller = document.querySelector('#thriller');
let animation = document.querySelector('#animation');
let  horror = document.querySelector('#horror');
let  drama = document.querySelector('#drama');
let  sci_fi = document.querySelector('#sci_fi');

// function
let showData = (movies)=>{
    // Render Movies to DOM
    dom_container.innerHTML = movies.map(
        (movie) => `
    <div style="padding:20px;  max-width:980px text-align:center" class="movie">
        <div style="padding:10px;" class ="hover_effect">
            <img src="${movie.posterPath}" alt="${movie.title}" style="border-radius:20px; width: 200px; height: 300px; border:1px solid yellow;"/>
        </div>
        <h5 style="text-align:center; padding-top:10px;">${movie.title}</h5>
        <p style="text-align:center; padding-top:5px;">${movie.release_date}</p>
    </div>
    `).join("");

}
showData(movies)

// event listener
action.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie)=>movie.category ==='Action')
    showData(newMovie)
})
thriller.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie)=>movie.category ==='Thriller')
    showData(newMovie)
})
horror.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie)=>movie.category ==='Horror')
    showData(newMovie)
})
drama.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie)=>movie.category ==='Drama')
    showData(newMovie)
})
animation.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie)=>movie.category ==='Animation')
    showData(newMovie)
})
sci_fi.addEventListener('click', ()=>{
    let newMovie = movies.filter((movie)=>movie.category ==='Sci-Fi')
    showData(newMovie)
})
all.addEventListener('click', ()=>{
    showData(movies)
})



