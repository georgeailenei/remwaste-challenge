import { SkipItem } from '../../types/skipItem';
import { calculateTotalPrice } from '../../lib/math';
import Button from '../Button/Button';
import './DrawerStyles.css';

const Drawer = (props: SkipItem) => {
  const {size, price_before_vat, vat, hire_period_days} = props;
  const totalPrice = calculateTotalPrice(price_before_vat, vat, hire_period_days);

  return (
    <div className="product-summary-wrapper">
      <div className='product-summary-container-wrapper'>
        <div className="product-summary-container">
          <div className="product-summary-content">
            <h2>Selected Size: {size} yards</h2>
            <p>Rental Period: 7 days </p>
            <span>Price: £{totalPrice}</span>
          </div>

          <div className="product-summary-buttons">
            <Button variant='back'>Back</Button>
            <Button variant='drawer'>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer;
