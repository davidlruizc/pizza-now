import * as React from 'react';
import { Container } from 'reactstrap';
import Step1 from './Step1';
import Step2 from './Step2';

const CreatePizzaForm: React.FC = () => {
  return (
    <Container>
      <Step2 />
    </Container>
  );
};

export default CreatePizzaForm;
