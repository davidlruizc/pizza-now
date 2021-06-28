import * as React from 'react';
import { Container } from 'reactstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import StepWizard from 'react-step-wizard';

const CreatePizzaForm: React.FC = () => {
  const [wizardInstance, setWizardInstance] = React.useState<any>();

  const setNextStep = () => {
    if (wizardInstance) {
      wizardInstance.nextStep();
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (wizardInstance) {
      wizardInstance.previousStep();
    }
  };

  return (
    <Container>
      <StepWizard instance={setWizardInstance}>
        <Step1 onNextStep={setNextStep} />
        <Step2 onPrevStep={prevStep} />
      </StepWizard>
    </Container>
  );
};

export default CreatePizzaForm;
