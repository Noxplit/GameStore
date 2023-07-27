
export const mathRandom = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min}

  export const API_KEY = '6a7a414be893489e8c8f0b4264e0d1d2' // Обновлять раз в месяц

export const FETCH_URL = {
  BANNER:`https://www.freetogame.com/api`
}


export const image = [
  {
    id:1,
    image:
      'https://images.ladbible.com/resize?type=jpeg&quality=70&width=720&fit=contain&gravity=null&url=https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt21c4a27a0e4503b0/62de8369ac437b3b425d8556/straythumb.jpg',
  },
  {
    id:2,
    image: 'https://img.championat.com/i/c/s/1658147621919398012.jpg',
  },
  {
    id:3,
    image: 'https://ixbt.online/live/images/original/28/42/04/2022/07/27/e51fe5eb60.jpg',
  },
  {
    id:4,
    image:
      'https://images.immediate.co.uk/production/volatile/sites/3/2022/07/Stray-collectables-guide-5007e0a.jpg?quality=90&resize=980,654',
  },
]
export const genres = [
  { genres: 'Adventure' },
  { genres: 'Triller' },
  { genres: 'RPG' },
  { genres: 'Cats' },
  { genres: 'Cyberpunk' },
  { genres: 'Atmospheric' },
]

