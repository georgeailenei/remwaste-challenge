import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import Drawer from "../../components/Drawer/Drawer";
import ProgressIndicator from "../../components/ProgressIndicator/ProgressIndicator";
import "./SelectSkipStyles.css";
import { SkipItem } from "../../types/skipItem";

const SelectSkip = () => {
  const [skipOptions, setSkipOptions] = useState<SkipItem[]>([]);
  const [selectedCard, setSelectedCard] = useState<null | number>(null);
  const [skip, setSkip] = useState<SkipItem | null>(null);
  const [step, setStep] = useState(3);
  const [loading, setLoading] = useState(true);
  const firstItem = 0;

  const handleBackClick = () => {
    setStep(prevStep => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const handleContinueClick = () => {
    setStep(prevStep => (prevStep < 6 ? prevStep + 1 : prevStep));
  };

  const handleCardClick = (id: number) => {
    const selectedSkip = skipOptions.find((item) => item.id === id); 

    if (selectedSkip) {
      setSkip(selectedSkip); 
      setSelectedCard(id); 
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        setSkipOptions(response.data);

        if (response.data.length > 0) {
          setSelectedCard(response.data[firstItem].id); 
          setSkip(response.data[firstItem ]); 
        }

      } catch (error) {
        throw new Error(`${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="select-skip-page-wrapper">
      <ProgressIndicator currentStep={step} />
      <h1 className="select-skip-page-title">Choose Your Skip Size</h1>
      <p className="select-skip-page-description">Select the skip size that best suits your needs</p>

      {loading ? (
        <div className="loading-message">Loading...</div>) : (
        <div className="select-skip-page-container">
        {skipOptions.map(item => 
          <Card 
            key={item.id} 
            isSelected={item.id === selectedCard}
            onClick={() => handleCardClick(item.id)}
            {...item} 
          />
        )}
      </div>)}

      {skip && 
        <Drawer
          size={skip.size} 
          priceBeforeVat={skip.price_before_vat} 
          hirePeriodDays={skip.hire_period_days}
          vat={skip.vat}
          onBack={handleBackClick} 
          onContinue={handleContinueClick} 
        />
      }
    </div>
  );
};

export default SelectSkip;
