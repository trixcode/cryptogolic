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
        marginBottom: '10px',
        padding: '0',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    listItemList: {
        padding: '10px 20px',
        backgroundColor: '#3f51b5',   
    },
    listTitleCurrency: { 
        marginLeft: '60px',
        width: '0px',
    },
    listTitleChange: {
        fontSize: '0.79em'
    },
    listItem: {
        padding: '0 20px',
        marginTop: '10px',
        backgroundColor: '#f5f5f5',   
    },
    redPct: {
        color: 'red',
        fontSize: '0.79em'
    }, 
    greenPct: {
        color: 'green',
        fontSize: '0.79em'
    },
    currenciesName: {
        width: '0px',
    },
    rates: {
        width: '30px',
    }
});
  
export default styles;