import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import formInputs from '../../../utils/formInputs';
import FormInput from './FormInput';
import useStyles from './styles';

const BillingForm = memo(
  ({ handleNext, setUserBilling, shippingOption, setShippingOption }) => {
    const classes = useStyles();
    const methods = useForm();
    const { handleSubmit } = methods;
    const history = useHistory();

    const handleClick = () => history.goBack();

    const handleForm = (data, e) => {
      e.preventDefault();
      setUserBilling({ ...data, shippingOption });
      handleNext();
    };

    return (
      <Paper variant="outlined" className={classes.paper}>
        <Typography
          variant="h6"
          align="center"
          style={{ marginBottom: '0.8em' }}
        >
          Шаг 1. Выберите платежную информацию...
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleForm)}>
            <Grid container spacing={3}>
              {formInputs.map((item) => (
                <FormInput key={item.id} {...item} />
              ))}
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth size="medium">
                  <InputLabel htmlFor="select-delivery">Доставка</InputLabel>
                  <Select
                    native
                    id="select-delivery"
                    label="Доставка"
                    value={shippingOption}
                    onChange={(e) => setShippingOption(+e.target.value)}
                  >
                    <option value={5}>
                        Стандартная (до 7 дней)&nbsp; +5 €{' '}
                    </option>
                    <option value={10}>
                      Экспресс&nbsp;&nbsp;&nbsp;(до 3 дней)&nbsp; +10 €
                    </option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.btnContainer}
              >
                <Button
                  onClick={handleClick}
                  size="large"
                  type="button"
                  startIcon={<ArrowBackIcon />}
                  aria-label="Вернуться"
                  title="Вернуться"
                  className={classes.backButton}
                >
                  Назад
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Далее
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Paper>
    );
  }
);

export default BillingForm;
