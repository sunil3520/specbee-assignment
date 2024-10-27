import { speakers } from "./data.js";

const speakers_container = document.querySelector('.speakers-container');
const speakerDetails_container = document.querySelector('.speaker-details');

const displaySpeakerDetails = (speaker) => {
    speakerDetails_container.innerHTML = null;
    speakerDetails_container.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    speakerDetails_container.style.padding = '36px 30px'
    speakerDetails_container.style.marginBottom = '20px'
    console.log(speaker)
    let figure = document.createElement('figure');
    figure.classList = 'speaker-details__figure'
    let img = document.createElement('img');
    img.src = speaker.imageUrl
    let figcaption = document.createElement('figcaption');
    let h2 = document.createElement('h2');
    h2.textContent = speaker.name
    let h3 = document.createElement('h3');
    h3.textContent = speaker.role
    let p = document.createElement('p');
    p.textContent = speaker.company
    figcaption.append(h2, h3, p);
    figure.append(img, figcaption)
    let div = document.createElement('div');
    div.classList = 'speaker-details__seprator';
    let article = document.createElement('article');
    article.textContent = speaker.summary

    const SVG_NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("fill", "#000000");
    svg.setAttribute("height", "9px");
    svg.setAttribute("width", "9px");
    svg.setAttribute("viewBox", "-78.4 -78.4 646.80 646.80");
    svg.setAttribute("xmlns", SVG_NS);
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute("stroke", "#000000");
    svg.setAttribute("stroke-width", "0.0049");

    const polygon = document.createElementNS(SVG_NS, "polygon");
    polygon.setAttribute("points", "456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337");

    svg.appendChild(polygon);
    svg.addEventListener('click', () => {
        speakerDetails_container.classList = 'speaker-details--remove'
    })
    console.log(svg);
    speakerDetails_container.append(figure, div, article, svg);


}



const displaySpeakers = (speakers) => {
    let leftArrow = document.createElement('div');
    let RightArrow = document.createElement('div');

    leftArrow.textContent = '<';
    RightArrow.textContent = '>'
    leftArrow.classList = 'left-arrow'
    RightArrow.classList = 'right-arrow'
    let i =0
   

    

    const speakersContainer = document.querySelector('.speakers-container-parent');
    speakersContainer.append(leftArrow, RightArrow);

    const getVisibility = () =>{
        if(window.innerWidth <=480) return 1;
        if(window.innerWidth <=768) return 2;
        if(window.innerWidth <=1024) return 3;
        return 4;
    }

    

    const updateSpeakers = () =>{
        speakersContainer.querySelectorAll('.speakers-container__figure').forEach(figure => figure.remove());
        speakers.slice(i,i+getVisibility()).forEach((speaker) => {
            let figure = document.createElement('figure');
            figure.addEventListener('click', () => {
                displaySpeakerDetails(speaker)
                speakerDetails_container.classList = 'speaker-details'
                console.log(speakerDetails_container)
            })
            figure.classList = 'speakers-container__figure'
            let img = document.createElement('img');
            img.src = speaker.imageUrl
            let figcaption = document.createElement('figcaption');
            let h2 = document.createElement('h2');
            h2.textContent = speaker.name
            let h3 = document.createElement('h3');
            h3.textContent = speaker.role
            let p = document.createElement('p');
            p.textContent = speaker.company
            figcaption.append(h2, h3, p);
            figure.append(img, figcaption)
    
            speakers_container.append(figure);
    
        })

    }

    updateSpeakers();


    RightArrow.addEventListener('click',()=>{
       if(i+getVisibility()<speakers.length){
        i+=getVisibility();
        updateSpeakers();
       }else{
        // i=0
       }
       console.log(i);
        
    })

    leftArrow.addEventListener('click',()=>{
        if(i>0){
            i-=getVisibility();
          updateSpeakers()
        }else{
            // i =speakers.length-1
        }
        console.log(i);
    })


}

window.addEventListener('resize',()=>{
    displaySpeakers(speakers);
})

displaySpeakers(speakers)
