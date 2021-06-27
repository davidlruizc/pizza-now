import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { PriceLabel, PriceValue, PriceWrapper, SubmitWrapper } from './styles';

const Step2: React.FC = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Nombre</Label>
        <Input type="text" name="email" id="exampleEmail" placeholder="Ingresa tu nombre" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Teléfono</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="Ingresa tu número de teléfono"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Nombra tu pizza</Label>
        <Input
          type="text"
          name="email"
          id="exampleEmail"
          placeholder="Dale un nombre a tu pizza: Ej, Pizza carnivora"
        />
      </FormGroup>
      <PriceWrapper>
        <PriceLabel>Precio Total:</PriceLabel>
        <PriceValue>$100000</PriceValue>
      </PriceWrapper>
      <SubmitWrapper>
        <Button color="primary" size="lg" block>
          Ordenar
        </Button>
      </SubmitWrapper>
    </Form>
  );
};

export default Step2;
