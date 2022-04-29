const shippingMethodText = (value) => {
  switch (value) {
    case 5:
      return 'Стандартная';
    case 10:
      return 'Экспресс';
    default:
      return 'Стандартная';
  }
};

export default shippingMethodText;
