import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import shippingMethodText from '../../../../utils/shippingMethodText';
import useStyles from './styles';

const BillingReview = ({
  firstName,
  lastName,
  email,
  address,
  city,
  country,
  shippingOption,
}) => {
  const classes = useStyles();

  const billingListItems = [
    {
      id: 0,
      label: 'Полное имя:',
      value: `${firstName} ${lastName}`,
    },
    {
      id: 1,
      label: 'Email:',
      value: email,
    },
    {
      id: 2,
      label: 'Адрес:',
      value: `${address}, ${city}, ${country}`,
    },
    {
      id: 3,
      label: 'Метод доставки',
      value: `${shippingMethodText(shippingOption)} ${shippingOption} €`,
    },
  ];

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography
        variant="h6"
        align="center"
        className={classes.title}
      >
        Шаг 2. Проверка и подтверждение
      </Typography>
      <Divider />
      <Typography variant="h6" align="center" className={classes.subTitle}>
        Сводка платежных данных
      </Typography>
      <List disablePadding>
        {billingListItems.map(({ id, label, value }) => (
          <ListItem className={classes.productItem} key={id}>
            <ListItemText primary={label} />
            <Typography variant="body1">{value}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default BillingReview;
