const API_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

const requests = [
  `weather?lat=59.9&lon=30.3&appid=${API_KEY}`,
  `weather?lat=39.7&lon=104.9&appid=${API_KEY}`,
  `weather?lat=41.9&lon=12.4&appid=${API_KEY}`,
  `weather?lat=60.4&lon=8.4&appid=${API_KEY}`,
];
export default requests;
