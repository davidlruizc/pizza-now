import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Button, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import { RootState } from 'states';
import { FormatCurrency, hookFormValidation } from 'utils';
import { ButtonCol, PriceLabel, PriceValue, PriceWrapper, SubmitWrapper } from './styles';

interface Step2Props {
  onPrevStep: () => void;
}

interface Step2Form {
  name: string;
  pizzaName: string;
  phone: string;
}

const Step2: React.FC<Step2Props> = ({ onPrevStep }) => {
  const finalPriceSelector = useSelector((state: RootState) => state.IngredientsReducer.finalPrice);

  const defaultValues: Step2Form = {
    name: '',
    pizzaName: '',
    phone: '',
  };
  const getDefaultFormValues = (): Step2Form => {
    return defaultValues;
  };

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<Step2Form>({ ...hookFormValidation, defaultValues: getDefaultFormValues() });

  const submitPizzaCreation = (info: Step2Form) => {
    console.log(info);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Nombre</Label>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <React.Fragment>
              <Input
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
                onChange={onChange}
                value={value}
                invalid={errors.name ? true : false}
              />
              {errors.name && <FormFeedback>Este campo es obligatorio</FormFeedback>}
            </React.Fragment>
          )}
          rules={{ required: true }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Teléfono</Label>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <React.Fragment>
              <Input
                type="number"
                name="number"
                placeholder="Ingresa tu número de teléfono"
                onChange={onChange}
                value={value}
                invalid={errors.phone ? true : false}
                min={0}
              />
              {errors.phone && <FormFeedback>Este campo es obligatorio</FormFeedback>}
            </React.Fragment>
          )}
          rules={{ required: true }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Nombra tu pizza</Label>
        <Controller
          control={control}
          name="pizzaName"
          render={({ field: { onChange, value } }) => (
            <React.Fragment>
              <Input
                type="text"
                name="pizzaName"
                placeholder="Dale un nombre a tu pizza: Ej, Pizza carnivora"
                onChange={onChange}
                value={value}
                invalid={errors.pizzaName ? true : false}
              />
              {errors.pizzaName && <FormFeedback>Este campo es obligatorio</FormFeedback>}
            </React.Fragment>
          )}
          rules={{ required: true }}
        />
      </FormGroup>
      <PriceWrapper>
        <PriceLabel>Precio Total:</PriceLabel>
        <PriceValue>{FormatCurrency(finalPriceSelector)}</PriceValue>
      </PriceWrapper>
      <SubmitWrapper>
        <Row>
          <ButtonCol sm="6">
            <Button color="primary" size="lg" block onClick={onPrevStep}>
              Anterior
            </Button>
          </ButtonCol>
          <ButtonCol sm="6">
            <Button color="primary" size="lg" block onClick={handleSubmit(submitPizzaCreation)}>
              Ordenar
            </Button>
          </ButtonCol>
        </Row>
      </SubmitWrapper>
    </Form>
  );
};

export default Step2;
