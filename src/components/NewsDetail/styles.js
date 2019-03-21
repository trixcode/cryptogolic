const styles = theme => ({
	card: {
		maxWidth: 400,
	},
	media: {
		height: 300,
		paddingTop: '56.25%', // 16:9
		// margin: '10px'
	},
	actions: {
		display: 'flex',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		// backgroundColor: red[500],
	},
	title: {
		textAlign: 'center'
	},
	button: {
		position: 'absolute',
		top: 0
	},
	card: {
		position: 'relative'
	},
	text: {
		margin: '10px'
	},
	subheader: {
		fontSize: '10px'
	},
	titleOfAnotherNews: {
		marginTop: '60px',
		marginLeft: '10px',
		paddingBottom: '10px',
		fontSize: '18px',
		textTransform: 'uppercase',
		borderBottom: '1px solid black'
	},
	textOfAnotherNews: {
		fontStyle: 'italic',
		color: 'gray'
	}

})
export default styles;