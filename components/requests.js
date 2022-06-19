const API_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
// all our axious calls will be made to these endpoints grabbing our weather data
const requests = [
  `weather?lat=25.761681&lon=-80.191788&appid=${API_KEY}`,
  `weather?lat=35.6&lon=139.8&appid=${API_KEY}`,
  `weather?lat=23.113592&lon=-82.366592&appid=${API_KEY}`,
  `weather?lat=41.9&lon=12.4&appid=${API_KEY}`,
];
export default requests;
