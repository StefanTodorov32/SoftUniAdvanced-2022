function lockedProfile() {
    let arrayOfButton = document.querySelectorAll('button');
    
    function showHideChoice(e) {
        let profile = e.target.parentElement;
        let btn = profile.querySelector('button');
        let locked = profile.querySelector('div input').checked;
        let more = profile.querySelector('div');
        if (!locked) {
            if (btn.textContent == 'Show more') {
                more.style.display = 'block';
                btn.textContent = 'Hide it';
            }
            else {
                more.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
    for (let button of arrayOfButton) {
        button.addEventListener('click', showHideChoice);
    }
}