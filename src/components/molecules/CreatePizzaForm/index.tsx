import * as React from 'react';
import { Container } from 'reactstrap';
import Step1 from './Step1';

const CreatePizzaForm: React.FC = () => {
  return (
    <Container>
      <Step1 />
    </Container>
  );
};

export default CreatePizzaForm;
