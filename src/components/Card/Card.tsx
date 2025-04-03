import Button from '../Button/Button';
import './CardStyles.css';

const Card = () => {
  const item = {
    id: 11554,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 311,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2021-04-06T17:04:42",
    updated_at: "2024-04-02T09:22:38",
    allowed_on_road: true,
    allows_heavy_waste: true
  };

  const totalPrice = Math.ceil(item.price_before_vat * (1 + item.vat / 100) * (7 / item.hire_period_days));

  const transportCostText = item.transport_cost === null ? "Free delivery included" : "Transport cost applies";
  const roadPlacementText = item.allowed_on_road ? "Roadside placement allowed" : "Roadside placement not allowed";
  const heavyWasteText = item.allows_heavy_waste ? "Heavy waste allowed" : "Heavy waste not permitted";
  
  return (
    <div className="card-container">
    <span className="skip-size">{item.size} Yards</span>

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
