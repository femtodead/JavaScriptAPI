// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

function numberRandom(max) {
    if (max <= 1){
        console.log('enter a number greater than 1');
    }
    else{
        let flag = 1;
        let number = Math.random();
        let temp = max;
        while (temp > 1){
            flag = flag * 10;
            temp = temp * 0.1;
        }
        number = (number*flag);
        
        while (number >= max+1){
            number = number - max;
        }
        return Math.floor(number);
    }
}
async function photoFetch() {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos?page=${numberRandom(9)}&per_page=9&client_id=eHJsSi_j9zvX7aVlRK2opdBoGaz7tnIO0-1IKAvBR3U`)
        console.log(response);
        const photos =  await response.json();
        console.log(photos);
        return photos;
    } catch (error) {
        console.error('Ошибка при загрузке фотографии', error);
        return [];
    }
}

async function addPoto() {
    const index = numberRandom(9);
    const photos = await photoFetch();
    document.querySelector('.photo').src = photos[index].urls.small;
    document.querySelector('.photo').alt = photos[index].alt_description;
    const text = `artist name: ${photos[index].user.name}`;
    document.querySelector('.photoDis').textContent = text ;
    document.querySelector('.likes__count').textContent = ` likes: ${photos[index].likes}`;
    document.querySelector(".likes__button").addEventListener('click', function (e) {
        if(localStorage.getItem(photos[index].id))
            { 
                document.querySelector('.likes__count').textContent = ` likes: ${photos[index].likes}`; 
                localStorage.removeItem(photos[index].id)
            } 
        else{ 
            localStorage.setItem(photos[index].id , true) 
            document.querySelector('.likes__count').textContent = ` likes: ${photos[index].likes + 1}`; 
        }
    });
}

addPoto();  