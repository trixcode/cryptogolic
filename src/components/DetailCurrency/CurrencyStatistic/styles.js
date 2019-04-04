const styles = theme => ({
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  card: {
  width: '100%',
  },
  tabBlock: {
    display: 'flex',
    justifyContent: 'center',
    background: '#6666ff',
  },
  header: {
  },
  block: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  priceBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  price: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
  pricePercent: {
    fontSize: '25px',
    fontWeight: 'normal',
  }
});

export default styles;