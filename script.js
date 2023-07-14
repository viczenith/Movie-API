const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b13b7710d69130b43a1a13742a2b60e&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=2b13b7710d69130b43a1a13742a2b60e&query=';

const formElement = document.getElementById('form');
const sectionElement = document.getElementById('section');
const inputElement = document.getElementById('input');



muviePro(APILINK);
function muviePro(url){
        fetch(url).then(res=>res.json())
        .then(function(data){
            console.log(data.results);

        data.results.forEach(element => {
            const div_card = document.createElement('div');
			div_card.setAttribute('class', 'card');

			const div_row = document.createElement('div');
			div_row.setAttribute('class', 'row');
			
			const div_column = document.createElement('div');
			div_column.setAttribute('class', 'column');

			const image = document.createElement('img');
			image.setAttribute('class', 'thumbnail');
			image.setAttribute('id', 'image');

			const title = document.createElement('h3');
			title.setAttribute('id', 'title');

            title.innerHTML = `${element.title}`;
			image.src = IMG_PATH + element.poster_path;



			div_card.appendChild(image);
			div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            sectionElement.appendChild(div_row);
        });

    });
};

formElement.addEventListener("submit", (e)=>{
	e.preventDefault();
	sectionElement.innerHTML = '';

	const searchItem = inputElement.value;

	if(searchItem){
		muviePro(SEARCHAPI + searchItem);
		inputElement.value = "";
	}
});
