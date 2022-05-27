const panels = document.querySelectorAll('.panel')
    // querySelectorAll let us select anything and to make some diffrences
    // here we choose .panel becase thats what we actually care about in this project

panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
        })
    })
    // the whole above lines from 5 to 10 means when i chlick on a card run a function

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
// this function will remove the active mode of the previous panel which had been seen 
// so that we have an expanded card at a time and only one card no More...