module.exports = {
	// ... other webpack configuration options ...
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	output: {
		// Use a fixed filename for the PDF files
		filename: 'static/media/VishalKSResume.pdf',
		// Use a fixed public path for the PDF files
		publicPath: '/',
	},
};
  