import Button from '../Button/Button';
import { SkipItem } from '../../types/skipItem';
import './CardStyles.css';

const Card = (props: SkipItem) => {
  const {size, hire_period_days, transport_cost, price_before_vat, vat, allowed_on_road, allows_heavy_waste } = props;
 
  const totalPrice = Math.ceil(price_before_vat * (1 + vat / 100) * (7 / hire_period_days));

  const transportCostText = transport_cost === null ? "Free delivery included" : "Transport cost applies";
  const roadPlacementText = allowed_on_road ? "Roadside placement allowed" : "Roadside placement not allowed";
  const heavyWasteText = allows_heavy_waste ? "Heavy waste allowed" : "Heavy waste not permitted";
  
  return (
    <div className="card-container">
    <span className="skip-size">{size} Yards</span>

    <div className="pricing-details">
      <div>
        <span className="total-price">£{totalPrice}</span>
        <span className="price-label"> Per Week</span>
      </div>

      <div>
        <p className="skip-info">{transportCostText}</p>
        <p className="skip-info">{roadPlacementText}</p>
        <p className="skip-info">{heavyWasteText}</p>
      </div>
    </div>

    <Button />

  </div>
  )
}

export default Card;
