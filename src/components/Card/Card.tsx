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

  const transportCostText = transport_cost === null ? "Free delivery included" : "Transport cost applies";
  const roadPlacementText = allowed_on_road ? "Roadside placement allowed" : "Roadside placement not allowed";
  const heavyWasteText = allows_heavy_waste ? "Heavy waste allowed" : "Heavy waste not permitted";
  
  return (
    <div className={`card-container ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <span className="skip-size">{size} Yards</span>

      <div className="pricing-details">
        <div>
          <span className="total-price">£{totalPrice}</span>
          <span className="price-label"> Per Week</span>
        </div>

        <div className={`skip-info-details ${isSelected ? 'selected' : ''}`}>
          <p className="skip-info">{transportCostText}</p>
          <p className="skip-info">{roadPlacementText}</p>
          <p className="skip-info">{heavyWasteText}</p>
        </div>
      </div>

      <Button isSelected={isSelected} />

  </div>
  )
}

export default Card; 
