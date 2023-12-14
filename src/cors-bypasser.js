
export function enabledCors(){
    /*Should a conditional to keep track if the remote server be created? */
   const corsModual = document.querySelector('#corsModual');
   corsModual.showModal();

}


const cancelBtn = document.querySelector('#cancelBtn')
cancelBtn.addEventListener('click', () => {
        const corsModual = document.querySelector('#corsModual');
        corsModual.close(); 
    })

const newTabWindow = document.querySelector('#enableBtn')
newTabWindow.addEventListener('click', () => {
    window.open(
        'https://cors-anywhere.herokuapp.com/corsdemo',
        '_blank' // <- This is what makes it open in a new window.
      );
    corsModual.close(); 
})
