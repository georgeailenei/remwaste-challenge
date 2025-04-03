import "./ProgressIndicatorStyles.css";

interface ProgressIndicatorProps {
  currentStep: number;
}

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
