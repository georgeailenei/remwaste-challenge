import './ProgressIndicatorStyles.css';

interface ProgressIndicatorProps {
  currentStep: number; 
}

// For visual purposes only, I would not advice to use index as key or to create empty arrays.
// As it could cause problems in a bigger project.
const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps) => {
  const totalSteps = 6;
  return (
    <div className="step-indicator">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`step-block ${index < currentStep ? "filled" : ""}`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;
