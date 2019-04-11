const styles = theme => ({
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
    },
    formContainer: {
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
    },
    formControl: {
        marginRight: '11%',  
        padding: '5px 0px'   
     },  
    selectItem: {
        fontSize: '0.85em' 
    },
    subHeaderTitle: {
        display: 'flex',
        width: '100%',
        padding: '10px 60px 10px 40px',
        backgroundColor: '#3f51b5',   
    },
    listTitle: { 
        marginLeft: '38px',
        width: '100%',
    },
    listTitleColor: {
        color: '#ffffff',
    },
    listItem: {
        marginTop: '10px',
        backgroundColor: '#f5f5f5', 
    },
    redPct: {
        color: 'red',
    }, 
    greenPct: {
        color: 'green',
    },
    listItemText: {
        width: '100%',
    }
});
  
export default styles;