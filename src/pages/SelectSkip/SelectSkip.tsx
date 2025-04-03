import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./SelectSkipStyles.css";
import { SkipItem } from "../../types/skipItem";

const SelectSkip = () => {
  const [skipOptions, setSkipOptions] = useState<SkipItem[]>([]);
  const [selectedCard, setSelectedCard] = useState<null | number>(null);

  const handleCardClick = (id: number) => {
    setSelectedCard(id);
  };

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
    <div className="select-skip-page-wrapper">
      <h1 className="select-skip-page-title">Choose Your Skip Size</h1>
      <p className="select-skip-page-description">Select the skip size that best suits your needs</p>
      <div className="select-skip-page-container">
        {skipOptions.map(item => 
          <Card 
            key={item.id} 
            isSelected={item.id === selectedCard}
            onClick={() => handleCardClick(item.id)}
            {...item} 
          />
        )}
      </div>
    </div>
  );
};

export default SelectSkip;
