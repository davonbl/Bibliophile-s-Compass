import { yelpApi } from "./yelp-api.js";

export function pageButtons(numOfSpots, olContainer){
    let parentContainer = document.querySelector('#parentContainer');

    let ul = document.createElement('ul');
    ul.setAttribute('id', 'numOfPages')
    ul.classList.add('pages-list')
//HERE ARE THE LAST CONSOLE LOGS I COMMENTED OUT
    // console.log('testing on pageButtons section');

    let actualPages = Math.floor(numOfSpots / 10);
//HERE ARE THE LAST CONSOLE LOGS I COMMENTED OUT
    // console.log(actualPages)
    // console.log('actual number: ', numOfSpots / 10)

    let allPages = actualPages + 2;

    for(let i = 1; i <= allPages; i++){
        if(i === 1){
//HERE ARE THE LAST CONSOLE LOGS I COMMENTED OUT
            // console.log('first page: prev');
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
    //HERE ARE THE LAST CONSOLE LOGS I COMMENTED OUT
            // console.log('last page: next')
            // console.log('first page: prev');
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
        //HERE ARE THE LAST CONSOLE LOGS I COMMENTED OUT
        // console.log('number of page: ', i - 1)
        let numOfPage = i - 1;
        let postPerPage = 10
        let offsetNum = postPerPage * (numOfPage - 1)

        let li = document.createElement('li');
        // li.setAttribute('id', 'prevBtn');
        // li.classList.add('nav-buttons');

        li.innerText = i - 1

        li.addEventListener('click', () => {
            // console.log(`clicking on the ${i - 1} button`);
            let comparePerviousInput = JSON.parse(localStorage.getItem('inputLocation'))
                    //HERE ARE THE LAST CONSOLE LOGS I COMMENTED OUT
            // console.log(typeof comparePerviousInput, '. Here is the input: ',comparePerviousInput)

            //this is where I can place the localStorage value at
            //then I can reference the localStorage to the buttons 
            if(localStorage.getItem('offsetNum')){
                let initalOffsetNum = localStorage.getItem('offsetNum')
                if(offsetNum !== initalOffsetNum){
                    localStorage.removeItem('offsetNum')
                    localStorage.setItem('offsetNum', offsetNum)
                }
            }
            yelpApi(comparePerviousInput, offsetNum)
        })
        ul.append(li)
        olContainer.append(ul)
        parentContainer.append(olContainer)


    }
}