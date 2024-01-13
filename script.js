const back = document.querySelector('#back');
const next = document.querySelector('#next');
const container = document.querySelector('#container');
const garanties = document.querySelector('.garanties');
const photos = ['certificateOne.jpg', 'cerfificateThree.png', 'cerfificateTwo.jpg', 'certificateFive.jpg'];
let i = 0;
next.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1){
        i=0;
    }
    document.querySelector('#pictures').src = photos[i];
    
})
back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i=photos.length - 1;
    }
    document.querySelector('#pictures').src = photos[i];
})

const garantiesBlockImg = document.querySelector('.garanties_block_img');
const garantiesBlockTextOne = document.querySelector('.garanties_block_textOne');
const garantiesBlockTextTwo = document.querySelector('.garanties_block_textTwo');
const garantiesBlockTextThree = document.querySelector('.garanties_block_textThree');
const garantiesBtn = document.querySelector('.garanties_btn');

garantiesBtn.addEventListener('click', garantiesBlockTwo);
function garantiesBlockTwo () {
    garantiesBlockImg.setAttribute('src', 'coverTwo.JPEG');
    garantiesBlockTextOne.innerHTML = 'Контроль над своими эмоциями:';
    garantiesBlockTextTwo.innerHTML = 'Вы станете эквилибристом в осознанном управлении своими эмоциями, научитесь не позволять им влиять на ваши решения';
    garantiesBlockTextThree.innerHTML = 'Вы научитесь преодолевать стресс, а также развивать эмоциональную стабильность и уравновешенность';
    garantiesBtn.addEventListener('click', garantiesBlockThree);
}
function garantiesBlockThree() {
    garantiesBlockImg.setAttribute('src', 'CoverThree.JPEG');
    garantiesBlockTextOne.innerHTML= 'Уверенность в себе и самооценка:';
    garantiesBlockTextTwo.innerHTML = 'Мы вместе откроем подходящую для вас жизненную стратегию, вы станете более уверенным в себе, что поможет вам преодолевать страхи и сомнения';
    garantiesBlockTextThree.innerHTML = 'Вы научитесь полностью доверять своим способностям и достичь желаемого успеха в карьере и личной жизни';
    garantiesBtn.addEventListener('click', garantiesBlockFour);
}
function garantiesBlockFour () {
    garantiesBlockImg.setAttribute('src', 'garanties_three.jpg');
    garantiesBlockTextOne.innerHTML = 'Изменение негативных программирований:';
    garantiesBlockTextTwo.innerHTML = 'Вы сможете избавиться от негативных установок и программирований, которые мешают вам развиваться и достичь своих целей';
    garantiesBlockTextThree.innerHTML = 'Вы научитесь заменять их на позитивные мотивирующие программы, которые будут подталкивать вас к успеху';
    garantiesBtn.addEventListener('click', garantiesBlockFive);
}

function garantiesBlockFive () {
    garantiesBlockImg.setAttribute('src', 'garanties_five.jpg');
    garantiesBlockTextOne.innerHTML = 'Растущая мотивация и целеустремленность:';
    garantiesBlockTextTwo.innerHTML = 'Вы научитесь ставить и достигать амбициозные цели';
    garantiesBlockTextThree.innerHTML = 'Мои сеансы помогут вам найти источники мотивации, а также развить дисциплину и целеустремленность для успешной реализации ваших планов';
    garantiesBtn.addEventListener('click', garantiesBlockSix);
}

function garantiesBlockSix () {

    Swal.fire(
        'Не упустите возможность изменить свою жизнь к лучшему с помощью методики PSY2.0 на моих сеансах',
        'Запишитесь прямо сейчас и откройте новые горизонты возможностей!',
        'question'
      )
}

const price_box_btn_one = document.querySelector('.price_box_btn_one');

price_box_btn_one.addEventListener('mouseover', () => {
    price_box_btn_one.textContent = "ПРИОБРЕСТИ";
})

const price_box_btn_two = document.querySelector('.price_box_btn_two');

price_box_btn_two.addEventListener('mouseover', () => {
    price_box_btn_two.textContent = "ПРИОБРЕСТИ";
})

const price_box_btn_three = document.querySelector('.price_box_btn_three');

price_box_btn_three.addEventListener('mouseover', () => {
    price_box_btn_three.textContent = "ПРИОБРЕСТИ";
})

const price_box_btn_four = document.querySelector('.price_box_btn_four');

price_box_btn_four.addEventListener('mouseover', () => {
    price_box_btn_four.textContent = "ПРИОБРЕСТИ";
})

price_box_btn_one.addEventListener('click', () => {
    window.open('https://instagram.com/dengyixia2019?igshid=MzRlODBiNWFlZA==', '_blank')
})
price_box_btn_two.addEventListener('click', () => {
    window.open('https://instagram.com/dengyixia2019?igshid=MzRlODBiNWFlZA==', '_blank')
})

price_box_btn_three.addEventListener('click', () => {
    window.open('https://instagram.com/dengyixia2019?igshid=MzRlODBiNWFlZA==', '_blank')
})

price_box_btn_four.addEventListener('click', () => {
    window.open('https://instagram.com/dengyixia2019?igshid=MzRlODBiNWFlZA==', '_blank')
})

const creator = document.querySelector('.creator');
creator.addEventListener('click', () => {
    window.open('https://mitrofanovaelena.glitch.me', '_blank');
})

AOS.init({
    delay:400,
    duration:1000
})