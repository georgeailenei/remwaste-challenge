import Button from '../Button/Button';
import './CardStyles.css';

interface CardProps {
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const Card = ({
  size,
  hire_period_days,
  transport_cost,
  price_before_vat,
  vat,
  allowed_on_road,
  allows_heavy_waste,
  isSelected,
  onClick,
}: CardProps) => {
  const totalPrice = Math.ceil(price_before_vat * (1 + vat / 100) * (7 / hire_period_days));

  const conditionTexts = [
    {
      text: transport_cost === null ? "Free delivery included" : "Transport cost applies",
      isAvailable: transport_cost === null,
    },
    {
      text: allowed_on_road ? "Roadside placement allowed" : "Roadside placement not allowed",
      isAvailable: allowed_on_road,
    },
    {
      text: allows_heavy_waste ? "Heavy waste allowed" : "Heavy waste not permitted",
      isAvailable: allows_heavy_waste,
    },
  ];
  
  const benefits = conditionTexts.filter(condition => condition.isAvailable);
  const limitations = conditionTexts.filter(condition => !condition.isAvailable);
  
  return (
    <div className={`card-container ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <span className="skip-size">{size} Yards</span>

      <div className="pricing-details">
        <div>
          <span className="total-price">£{totalPrice}</span>
          <span className="price-label"> Per Week</span>
        </div>

        <div>
          <div className={`skip-info-details ${isSelected ? 'selected' : ''}`}>
            {benefits.map(info => <p className='skip-info'>{info.text}</p>)}
          </div>

          <div className={`skip-info-details ${isSelected ? 'selected' : ''}`}>
            {limitations.map(info => <p className='skip-info-warning'>{info.text}</p>)}
          </div>
        </div>
      </div>

      <Button isSelected={isSelected} />

  </div>
  )
}

export default Card; 
