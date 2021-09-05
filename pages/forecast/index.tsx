import { useState, SyntheticEvent, useEffect } from "react";
import styles from '../../styles/Forecast.module.css';
import ForecastTable from "./components/ForecastTable/ForecastTable";
import { useRouter } from "next/router";

export default function Index() {

const router = useRouter();
useEffect(() => {
    const loggedUser = localStorage.getItem('username') ?? '';
    
    if (loggedUser == '') {
        router.push('/');
    }
})

const [city, setCity] = useState("London");
const [forecast, setForecast] = useState({ cod: 200 });

function getForecast(city: string) {
    let key = 'beb25e3146ad9e08f6ef98967c42034f';
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + key;
    fetch(url)
        .then(response => response.json())
        .then(response => setForecast(response))
        .catch(() => { setForecast({ cod: 404 }); });
}

const updateCity = (event: SyntheticEvent) => {
    setCity((event.target as HTMLInputElement).value);
}


return (
    <div className={styles.forecast_container}>

        <form className={styles.chooseCity}>

            <label htmlFor="city">Print your city</label>
            <input type="text" className={styles.city} name="city" placeholder={city} onChange={updateCity} />
            <button id="show-forecast-button" onClick={(event: SyntheticEvent) => {

                event.preventDefault();
                getForecast(city);

            }}>Show forecast</button>

        </form>

        <div id="forecast-table-container">
            <ForecastTable forecast={forecast} />
        </div>

        <div id="logout-container">
            <button onClick={() => {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                window.location.reload();
            }}>Logut</button>
        </div>

    </div>
);

}