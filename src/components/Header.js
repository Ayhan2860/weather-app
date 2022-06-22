export default function Header({selectedCity}) {
    return <div className="header">
         <h1>Weather Forecast</h1>
        <h1>{selectedCity.name}</h1>
    </div>
}