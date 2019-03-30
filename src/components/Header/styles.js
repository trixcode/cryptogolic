const styles = theme => ({
    headerContainer: {
        justifyContent: 'space-between',
    },
    searchDiv: {
        width: '200px',
        height: '50%',
        position: 'relative',
    },
    searchInput: {
        width: '170px',
        height: '100%',
        borderRadius: '8px',
        border: 'none',
        position: 'absolute',
        left: '20px',
       // background: primery
    },
    searchButton: {
        width: '30px',
        height: '100%',
        border: 'none',
        borderRadius: '8px',
        position: 'absolute',
        left: '170px',
    },
    searchIcon: {
        color: '#fff',
        fontSize: '20px'
    }
})

export default styles