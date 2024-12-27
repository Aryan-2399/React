import { useEffect } from "react";
import { RESTAURANT_API } from "./constants";

const useResMenuInfo = (resId) => {
    const [menuInfo, setMenuInfo] = useState(null);
    useEffect(() => {
        fetchMenuData();
    },[])
    fetchMenuData = async () => {
        // fetch menu data from API
        const info = await fetch(RESTAURANT_API+ resId);
        const data = await info.json();
        console.log(data);
        setMenuInfo(data);
    }
    return menuInfo;
}
export default useResMenuInfo;