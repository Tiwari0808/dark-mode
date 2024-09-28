document.addEventListener('DOMContentLoaded', () => {

    let modeIcon = document.querySelector('#mode-icon');
    const body = document.body;


    modeIcon.addEventListener('click', mode);

    function mode() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        } else {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        }
    }

})
