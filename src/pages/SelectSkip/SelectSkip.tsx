import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./SelectSkipStyles.css";

const SelectSkip = () => {
  const [skipOptions, setSkipOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        setSkipOptions(response.data);
      } catch (error) {
        throw new Error(`${error}`);
      }
    };

    fetchData();
  }, []);

  console.log(skipOptions);

  return (
    <div>
        <Card />
    </div>
  );
};

export default SelectSkip;
