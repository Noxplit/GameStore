
export const mathRandom = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min}

  export const API_KEY = '6a7a414be893489e8c8f0b4264e0d1d2' // Обновлять раз в месяц

export const FETCH_URL = {
  BANNER:`https://www.freetogame.com/api`
}

export const GAME_LIST = [
  {title:'More Sales', number: 20, height:'100px', quantity:3},
  {title:'Special Offers -20%', number: 30, height:'100px', quantity:3},
]

