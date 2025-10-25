const div3 = document.querySelector(".div3");
const para2 = document.querySelector(".para2");
const div4 = document.querySelector(".div4");
const icon = document.querySelector("#icon");
const icon1 = document.querySelector(".icon1");
const hide = document.querySelector("#hide");
const para3 = document.querySelector(".para3");
const para4 = document.querySelector(".para4");
const para6 = document.querySelector(".para6")
const para7 = document.querySelector("#para7")
let API_KEY = `1af2d8fbf00e7f266c054f94ea253cc2`;
let city = "mumbai";
icon.addEventListener("click", () => {
   showcontant()
   hide1()

})

let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
const getdata = async () => {
   let response = await fetch(URL);
   let data = await response.json();
   let time = (data.dt + data.timezone);
   let date = new Date(time * 1000);
   para3.innerText = `${data?.name}  \n \t${data?.weather[0].main} ${Math.floor(data?.main.temp_max - 273)}  ~  ${Math.floor(data?.main.temp_min - 273)}°C `;
   para4.innerText = `${Math.floor(data?.main.temp - 273)}°C`;
   para7.innerText = `${data?.name}  `;
   para2.innerText = `${Math.floor(data?.main.temp - 273)}°C  `;
   para6.innerText = `  feelLike   ~  ${Math.floor(data?.main.feels_like - 273)}\n👇\n💨 wind-speed= ${data?.wind.speed}m/s\n\n   ☁️clouds= ${data?.clouds.all}%\n\n ${date}`;
}
getdata();
const showcontant = () => {
   para2.classList.toggle("para2");
   div4.classList.toggle("div4");
   div3.classList.toggle("hide");
}
const hide1 = () => {
   div3.style.display = ""
}
icon1.addEventListener("click", () => {
   showcontant()
   hide1()

})