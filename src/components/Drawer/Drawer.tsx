import { calculateTotalPrice, calculatePrice } from "../../lib/math";
import Button from "../Button/Button";

import "./DrawerStyles.css";

interface DrawerProps {
  id: number;
  size: number;
  priceBeforeVat: number;
  vat: number;
  hirePeriodDays: number;
  perTonneCost: number | null;
  onBack: () => void;
  onContinue: () => void;
}

const Drawer = ({
  id,
  size,
  priceBeforeVat,
  perTonneCost,
  vat,
  hirePeriodDays,
  onBack,
  onContinue,
}: DrawerProps) => {
  const price = calculatePrice(id, size, priceBeforeVat, perTonneCost);
  const totalPrice = calculateTotalPrice(price, vat, hirePeriodDays);

  return (
    <div className="product-summary-wrapper">
      <div className="product-summary-container-wrapper">
        <div className="product-summary-container">
          <div className="product-summary-content">
            <h2>Selected Size: {size} yards</h2>
            <p>Rental Period: 7 days </p>
            <span>Price: £{totalPrice}</span>
          </div>

          <div className="product-summary-buttons">
            <Button variant="back" onClick={onBack}>
              Back
            </Button>
            <Button variant="drawer" onClick={onContinue}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
