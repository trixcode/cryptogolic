
const styles = theme => ({
    pageTitle: {
        display: 'flex',
        justifyContent: 'center',
    },
    change: {
        color: 'red',
    },
    currency: {
        marginLeft: '60px', 
    },
    formControl: {
        paddingLeft: '5px',
        flexDirection: 'row',
        margin: theme.spacing.unit,
        minWidth: 50,
        float: 'right',
        marginRight: '10px',
        marginBottom: '20px',
        boxShadow:  '1px -4px 7px rgb(200, 200, 200)',
      },
    root: {
        marginTop: '20px',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    listItem: {
        boxShadow:  '1px -4px 5px rgb(200, 200, 200)',
    },
  });

  export default styles;