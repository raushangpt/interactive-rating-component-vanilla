const ratingBtns = document.querySelectorAll('.ratingBtn');
ratingBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        ratingBtns.forEach((btn) => {
            btn.classList.remove('active');
        });

        btn.classList.add('active');

        localStorage.setItem('activeBtnId', btn.id);
        localStorage.setItem('rating', btn.innerText);
    });
});

const activeBtnId = localStorage.getItem('activeBtnId');
if (activeBtnId) {
    const activeBtn = document.getElementById(activeBtnId);
    activeBtn.classList.add('active');
}

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    const ratingState = document.querySelector('#ratingState');
    ratingState.classList.add('hidden');

    const thankYouState = document.querySelector('#thankYouState');
    thankYouState.classList.remove('hidden');

    const rating = document.querySelector('div > span');
    rating.innerText = localStorage.getItem('rating') ?? 0;
});
