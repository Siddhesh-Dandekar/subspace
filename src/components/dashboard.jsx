import MediaCard from "./article";
import { useState, useEffect } from "react";
import PreferenceBar from "./preferenceBar";

const defaultPreferences = {
    agricultural: true,
    technology: true,
    business: true,
    crime: true,
};

function Dashborad() {
    const [agriculturalNews, setAgriculturalNews] = useState([]);
    const [businessNews, setBusinessNews] = useState([]);
    const [crimeNews, setCrimeNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);

    const [preferences, setPreferences] = useState(() => {
        const storedPrefs = localStorage.getItem('newsPreferences');
        return storedPrefs ? JSON.parse(storedPrefs) : defaultPreferences;
    });


    useEffect(() => {
        localStorage.setItem('newsPreferences', JSON.stringify(preferences));
    }, [preferences]);

    useEffect(() => {
        const fetchnews = async () => {
            try {
                const response = await fetch('https://voopvhechjrgqrsprlar.hasura.ap-south-1.nhost.run/api/rest/raw_news_articles', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "x-hasura-admin-secret": "KuFw0=8d2C7NzD5B+9A5t*juM0Z6s93O"
                    }
                }).then(resp => resp.json());
                setAgriculturalNews(response.raw_news_articles[0].agricultural);
                setBusinessNews(response.raw_news_articles[0].business);
                setTechnologyNews(response.raw_news_articles[0].technology);
                setCrimeNews(response.raw_news_articles[0].crime)
            }
            catch (err) {
                console.log(err.message)
            }
        }
        fetchnews();
    }, [])
    return (<>
        <div className="flex flex-col ">
            <div className="py-2">
                <div>
                    <PreferenceBar preferences={preferences} onChange={setPreferences} />
                </div>


            </div>
            <div className="lg:grid-cols-3 px-4 lg:px-10 grid gap-4 justify-center">
                {preferences.agricultural ? agriculturalNews.map((x, i) => {
                    return (<MediaCard key={x.output.title} data={x.output} />)
                }) : ''}
                {preferences.technology ? technologyNews.map((x, i) => {
                    return (<MediaCard key={x.output.title} data={x.output} />)
                }) : ''}
                {preferences.crime ? crimeNews.map((x, i) => {
                    return (<MediaCard key={x.output.title} data={x.output} />)
                }) : ''}
                {preferences.business ? businessNews.map((x, i) => {
                    return (<MediaCard key={x.output.title} data={x.output} />)
                }) : ''}
            </div>
        </div>


    </>)
}

export default Dashborad;