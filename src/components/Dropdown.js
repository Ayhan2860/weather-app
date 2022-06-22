import Header from "./Header";

export default function Dropdown({selectedCity, setSelectedCity, cities}) {

    const selectCity = (e) =>{
        var result = cities.filter((item) => item.name === e.target.value);
        setSelectedCity(result[0])
    }

    return <>
     <div className="header-dropdown" style={{backgroundImage:`url(${selectedCity.img})`}}>
     <Header selectedCity={selectedCity}/>
        <select value={selectedCity.name} onChange={selectCity} id="dropdownMenu">
            {
                cities.map((item, index) => (
                    <option key={index} value={item.name}>{item.name}</option>
                ))
            }
            
        </select>
     </div>
    </>
}