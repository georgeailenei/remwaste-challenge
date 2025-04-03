import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./SelectSkipStyles.css";
import { SkipItem } from "../../types/skipItem";

const SelectSkip = () => {
  const [skipOptions, setSkipOptions] = useState<SkipItem[]>([]);

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

  return (
    <div className="select-skip-page-container">
      {skipOptions.map(item => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default SelectSkip;
