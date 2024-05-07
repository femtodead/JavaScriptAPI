


const schedule = [{
    "name":"Pilates",
    "time":"14:10",
    "maximum": 10,
    "currentNumber": 2
},{
    "name":"F-training",
    "time":"15:10",
    "maximum": 11,
    "currentNumber": 3
},{
    "name":"Body Training",
    "time":"16:10",
    "maximum": 12,
    "currentNumber": 12
},{
    "name":"Dance step",
    "time":"17:10",
    "maximum": 13,
    "currentNumber": 12
}]

function scheduling(schedule) {
    const h1 = document.querySelector('.globalName');
    const list = document.createElement('ul');
    list.classList.add('listSchedule');
    h1.after(list);
    schedule.forEach(element => {
        const listElement = document.createElement('li');
        list.classList.add('listSchedule__element');
        const listElementButton = document.createElement('button');
        listElementButton.classList.add('listSchedule__button');
        listElement.classList.add('list-group-item')
        if (localStorage.getItem(element.name)){
            listElementButton.append('Отменить запись');
            const text = document.createTextNode(`Занятие: ${element.name} Время проведения: ${element.time} Всего мест: ${element.maximum} Уоличество участников: ${element.currentNumber+1} `)
            listElement.append(text);
        }
        else{
            listElementButton.append('Записаться');
            const text = document.createTextNode(`Занятие: ${element.name} Время проведения: ${element.time} Всего мест: ${element.maximum} Уоличество участников: ${element.currentNumber} `)
            listElement.append(text);
        }
     
        
        if (element.maximum == element.currentNumber){
            listElementButton.setAttribute('disabled', '')
        }
        listElementButton.addEventListener('click', function (e) {
        if (localStorage.getItem(element.name)){
            
                element.currentNumber = element.currentNumber - 1;
                console.log(listElement.childNodes[0].data);
                console.log(localStorage.getItem(element.name));
                listElement.childNodes[0].data = `Занятие: ${element.name} Время проведения: ${element.time} Всего мест: ${element.maximum} Уоличество участников: ${Number(localStorage.getItem(element.name))-1 } `
                listElementButton.childNodes[0].data = 'Записаться'
                localStorage.removeItem(`${element.name}`)
            
        }
        else{

                element.currentNumber = element.currentNumber + 1;
                console.log(listElement.childNodes[0].data);
                listElement.childNodes[0].data = `Занятие: ${element.name} Время проведения: ${element.time} Всего мест: ${element.maximum} Уоличество участников: ${element.currentNumber} `
                listElementButton.childNodes[0].data = 'Отменить запись'
                localStorage.setItem(`${element.name}`,Number(element.currentNumber) )     
                console.log(localStorage.getItem(element.name));

        }
     });
        listElement.append(listElementButton)
        list.append(listElement);
    });
}

scheduling(schedule);


const styleAdd = document.querySelector('.listSchedule');
styleAdd.classList.add('d-flex')
styleAdd.classList.add('flex-column-reverse')
styleAdd.classList.add('align-items-center')
styleAdd.classList.add('mt-5')
styleAdd.classList.add('list-group')
document.querySelector('.globalName').classList.add('d-flex');
document.querySelector('.globalName').classList.add('justify-content-center');  

