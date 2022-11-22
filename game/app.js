document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'bug1',
      img: 'images/bug1.png'
    },
    {
      name: 'bug2',
      img: 'images/bug2.png'
    },
    {
      name: 'bug3',
      img: 'images/bug3.png'
    },
    {
      name: 'bug4',
      img: 'images/bug4.png'
    },
    {
      name: 'bug5',
      img: 'images/bug5.png'
    },
    {
      name: 'bug6',
      img: 'images/bug6.png'
    },
    {
      name: 'bug1',
      img: 'images/bug1.png'
    },
    {
      name: 'bug2',
      img: 'images/bug2.png'
    },
    {
      name: 'bug3',
      img: 'images/bug3.png'
    },
    {
      name: 'bug4',
      img: 'images/bug4.png'
    },
    {
      name: 'bug5',
      img: 'images/bug5.png'
    },
    {
      name: 'bug6',
      img: 'images/bug6.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Ты только что нажал сюда:(')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Ты нашел пару!')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Попробуй еще:)')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Поздравляю! Хоть и исчерпывающее тестирование невозможно, ты поймал все баги!'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
