
const styles = theme => ({
   
    change: {
        color: 'red',
    },
   
    formControl: {
       marginRight: '10px',     
      },
      currencyTitle: {
        color: '#3f51b5',
      },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    correncyListContainer: {
        display: 'flex',
    },
    formContaner: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    listItemList: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '90%',
        backgroundColor: '#3f51b5',
        color: 'white',
        fontSize: '0.8em',
        padding: '10px 0px',     
    },
    listItem: {
        width: '90%',
        marginTop: '10px',
        backgroundColor: '#f5f5f5',   
    },
    redPct: {
        color: 'red',
        fontSize: '0.79em'
     }
    
  });


  
  export default styles;