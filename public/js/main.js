const submitbtn = document.getElementById('submitbtn');

// const getInfo = () => {
//     alert('hiiiii');
// }

// submitbtn.addEventListener('click', getInfo);
const cityname = document.getElementById('cityname');

const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event) => {
    event.preventDefault();
    // Whatever user wrote in cityname...we'll get here in cityval
    let cityval = cityname.value; 


    if (cityval == "") {
        city_name.innerText = `Please write the name before searching`;
        datahide.classList.add('data_hide');
    } else {
        // we are writing else oart in try catch..bcoz of if error comes it can catch the error
        try {
            // &units=metric---->Bcoz of this we see temp in celcius
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=0b34158d1200e583be81ecd471231743`;
            const response = await fetch(url);
            // object me convert hogya
            const data = await response.json();
            // now data ko array me convert kia..so that we can easily get it..now it is "array of an object"
            const arrdata = [data];
              //api ke andr se laa rhe hai ye ... .name and .country and all 
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            // in api this path tells temperature mood..sunny or cloudy
            const tempmood = arrdata[0].weather[0].main;

            // condition to check sunny or cloudy
            if (tempmood == "Clear") {
                temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempmood == "Clouds") {
                temp_status.innerHTML = "<i class= 'fas fa-cloud' style='color: #6495ED;'></i>";
            } else if (tempmood == "Rain") {
                temp_status.innerHTML = "<i class= 'fas fa-cloud-rain' style='color: #73889d;'></i>";
            } else {
                temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
            }
        //   if everything's fine..then don't hide the data
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `Please enter the city name properly`;
            // if there comes an error then hide the data
            datahide.classList.add('data_hide');
        }
    }
}

submitbtn.addEventListener('click', getInfo);