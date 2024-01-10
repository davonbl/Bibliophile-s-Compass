import { yelpApi } from "./yelp-api.js";

export function pageButtons(numOfSpots, olContainer){
    let parentContainer = document.querySelector('#parentContainer');

    let ul = document.createElement('ul');
    ul.setAttribute('id', 'numOfPages')
    ul.classList.add('pages-list')

    console.log('testing on pageButtons section');

    let actualPages = Math.floor(numOfSpots / 10);
    console.log(actualPages)
    console.log('actual number: ', numOfSpots / 10)

    let allPages = actualPages + 2;

    for(let i = 1; i <= allPages; i++){
        if(i === 1){
            console.log('first page: prev');
            let li = document.createElement('li');
            li.setAttribute('id', 'prevBtn');
            li.classList.add('nav-buttons');

            li.innerText = 'Prev'

            li.addEventListener('click', () => {
                console.log('clicking on the Prev button')
            })
            ul.append(li)
            olContainer.append(ul)
            parentContainer.append(olContainer)
            continue;
        }

        if(i === allPages){
            console.log('last page: next')
            console.log('first page: prev');
            let li = document.createElement('li');
            li.setAttribute('id', 'nextBtn');
            li.classList.add('nav-buttons');

            li.innerText = 'Next'

            li.addEventListener('click', () => {
                console.log('clicking on the Next button')
            })
            ul.append(li)
            olContainer.append(ul)
            parentContainer.append(olContainer)
            continue; 
        }

        console.log('number of page: ', i - 1)
        let numOfPage = i - 1;
        let postPerPage = 10
        let offsetNum = postPerPage * (numOfPage - 1)

        let li = document.createElement('li');
        // li.setAttribute('id', 'prevBtn');
        // li.classList.add('nav-buttons');

        li.innerText = i - 1

        li.addEventListener('click', () => {
            console.log(`clicking on the ${i - 1} button`);
            let comparePerviousInput = JSON.parse(localStorage.getItem('inputLocation'))
            console.log(typeof comparePerviousInput, '. Here is the input: ',comparePerviousInput)
        })
        ul.append(li)
        olContainer.append(ul)
        parentContainer.append(olContainer)


    }
}