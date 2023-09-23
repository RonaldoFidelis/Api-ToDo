const fieldTitle = (req,res,next) => {
	const {body} = req;

	if(body.title === undefined){
		return res.status(400).json({
			message:'O campo "title" não existe.'
		});
	}

	if(body.title === ''){
		return res.status(400).json({
			message:'O campo "title" não pode ser vazio.'
		});
	}

	next();
};

module.exports= {
	fieldTitle,
};