const styles = theme => ({
  card: {
    width: 375,
  },
  cardContainer: {
    width: '100%'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  tag:{
    color: 'grey',
    fontStyle: 'italic',
    fontSize: '13px'
  }
});
export default styles;
