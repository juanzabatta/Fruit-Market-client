let urlBaseApi;

if (document.domain === "fruit-market-mevn.herokuapp.com") {
  urlBaseApi = "https://fruit-market-mevn.herokuapp.com/";
} else {
  // urlBaseApi = document.domain + ':3000';
  urlBaseApi = "http://localhost:3000/";
}

export default urlBaseApi;
