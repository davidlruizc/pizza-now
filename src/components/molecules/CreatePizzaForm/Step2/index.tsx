import * as React from 'react';
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { ButtonCol, PriceLabel, PriceValue, PriceWrapper, SubmitWrapper } from './styles';

interface Step2Props {
  onPrevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ onPrevStep }) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Nombre</Label>
        <Input type="text" name="email" placeholder="Ingresa tu nombre" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Teléfono</Label>
        <Input type="number" name="number" placeholder="Ingresa tu número de teléfono" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Nombra tu pizza</Label>
        <Input
          type="text"
          name="email"
          placeholder="Dale un nombre a tu pizza: Ej, Pizza carnivora"
        />
      </FormGroup>
      <PriceWrapper>
        <PriceLabel>Precio Total:</PriceLabel>
        <PriceValue>$100000</PriceValue>
      </PriceWrapper>
      <SubmitWrapper>
        <Row>
          <ButtonCol sm="6">
            <Button color="primary" size="lg" block onClick={onPrevStep}>
              Anterior
            </Button>
          </ButtonCol>
          <ButtonCol sm="6">
            <Button color="primary" size="lg" block>
              Ordenar
            </Button>
          </ButtonCol>
        </Row>
      </SubmitWrapper>
    </Form>
  );
};

export default Step2;
