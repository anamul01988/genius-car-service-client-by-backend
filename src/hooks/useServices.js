import {useState, useEffect} from 'react';
const useServices=()=>{
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        // fetch('services.json')
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return [services,setServices]
}
export default useServices;