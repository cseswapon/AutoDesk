import { useState } from 'react';
import { useEffect } from 'react';
const useService = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('/details.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return [services];
}
export default useService;