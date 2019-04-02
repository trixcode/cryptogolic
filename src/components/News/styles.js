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
  date:{
    color: 'grey',
    fontStyle: 'italic',
    fontSize: '10px',

  },
  titleOfCard: {
    fontWeight: '700',
    fontSize: '18px'
  },
  shortDesc:{
    fontSize: '12px',
  
  },
  likesOfNews:{
    color: 'grey',
    fontStyle: 'italic',
    fontSize: '10px',
  },
  daysAndComments:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
 
});
export default styles;
