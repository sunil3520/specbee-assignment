import { speakers } from "./data.js";

const speakers_container = document.querySelector('.speakers-container');

const displaySpeakers = (speakers)=>{
    speakers.forEach((speaker)=>{
        let figure = document.createElement('figure');
        figure.classList= 'speakers-container__figure'
        let img = document.createElement('img');
        img.src=speaker.imageUrl
        let figcaption = document.createElement('figcaption');
        figcaption.classList = ''
        let h2 = document.createElement('h2');
        h2.textContent = speaker.name
        let h3 = document.createElement('h3');
        h3.textContent = speaker.role
        let p = document.createElement('p');
        p.textContent = speaker.company
        figcaption.append(h2,h3,p);
        figure.append(img,figcaption)

        speakers_container.append(figure);
        
    })

}

displaySpeakers(speakers)
