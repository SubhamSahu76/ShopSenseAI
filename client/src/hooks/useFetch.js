import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

function useFetch(endpoint) {
    const [data, setData] = useState(); // Initialize data state

    useEffect(() => {
        // This effect runs whenever the 'endpoint' prop changes
        const makeApiCall = async () => {
            try {
                const res = await fetchDataFromApi(endpoint);
                setData(res); // Update the 'data' state with the fetched data
            } catch (error) {
                // Handle any errors that occur during the API call
                console.error("Error fetching data:", error);
            }
        };

        makeApiCall(); // Call the API when the component mounts or when 'endpoint' changes
    }, [endpoint]); // Only re-run the effect when 'endpoint' changes

    return { data }; // Return the data as an object
}

export default useFetch;
