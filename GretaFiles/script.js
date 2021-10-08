        async function fetchJoke(){
            try {
            let response = await fetch('https://v2.jokeapi.dev/joke/Programming');
            let {setup,delivery,joke} = await response.json();
            if(joke){
                return joke;
            } else if (setup && delivery) {
                return `${setup} ${delivery}`;
            } else{
                photo.src = 'https://i.postimg.cc/7LPmMMzF/loki.jpg';
                return new FetchError();
            }
            } catch (e) {
                photo.src = 'https://i.postimg.cc/7LPmMMzF/loki.jpg';
                return new FetchError();
            }
        }
        
        const card = document.querySelector('#card');
        const paragraph = document.createElement('p');
        const photo = document.createElement('img');
        const flexContainer = document.querySelector('#flexContainer')
        
        window.addEventListener('DOMContentLoaded', ()=>{
        photo.src = 'https://i.postimg.cc/05p1VHvJ/foto.jpg';
        flexContainer.prepend(photo);
        });
        
        document.querySelector('button').addEventListener('click',() => {
            paragraph.textContent = "Let me think...";
            card.appendChild(paragraph);
            photo.src = 'https://i.postimg.cc/05p1VHvJ/foto.jpg';
            setTimeout(async() => {paragraph.textContent = await fetchJoke()},1500);
        });

        class FetchError extends Error{
            constructor() {
                super();
                this.name = "Fetch Failed";
                this.message = "I'll go play with Loki..."
            }
        }