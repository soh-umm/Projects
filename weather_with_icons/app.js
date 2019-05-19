window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription= document.querySelector(".temperature-description");
    let temperatureDegree=document.querySelector(".temperature-degree");
    let locationTimezone=document.querySelector(".location-timezone");
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position => {
            long= position.coords.longitude;
            lat= position.coords.latitude;
            const proxy= `http://cors-anywhere.herokuapp.com/`;
            const api=`${proxy}https://api.darksky.net/forecast/702863e68503d74a6b82973552a4e497/${lat},${long}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {temperature,summary,icon}= data.currently;

                temperatureDegree.textContent=ftoc(temperature);
                temperatureDescription.textContent=summary;
                locationTimezone.textContent= data.timezone;
                setIcons(icon,document.querySelector('.icon'));
            });
        });
       
    }
    function ftoc(temp)
    {
        return Math.round(((temp-32)*5)/9);
    }
    function setIcons(icon,iconID)
    {
        const skycons= new Skycons({color: "white"});
        const currentIcon=icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }
    
});