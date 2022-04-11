function errorHandler(error, req, res, next){
    if (error instanceof Error) {
        // When error object is provided, critical error occured
        console.log(error);
        return res.status(500).json({ message: error.message || 'Internal server error' });
      }
}

module.exports = errorHandler;