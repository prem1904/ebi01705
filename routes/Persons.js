var express = require('express');
var router = express.Router();

var PersonService = require('../services/service.person');

router.get('/', async function(req, res, next)
{
  const persons=PersonService.listPersons();
	res.json({person:persons});
});


router.post('/', async (req, res, next) =>
{
	const body = req.body;

	try
	{
		const person = await PersonService.create(body);

		return res.status(201).json({ person: person });
	}
	catch(err)
	{
		if (err.name === 'ValidationError')
		{
        	return res.status(400).json({ error: err.message });
		}
		return next(err);
	}
});

router.get('/:id', async (req, res, next) =>
{
	try
	{
		const person = await PersonService.retrieve(req.params.id);

		return res.json({ person: person });
	}
	catch(err)
	{
		
		return next(err);
	}
});


router.put('/:id', async (req, res, next) =>
{
	try
	{
		const person = await PersonService.update(req.params.id, req.body);

		return res.json({ person: person });
	}
	catch(err)
	{

		return next(err);
	}
});


router.delete('/:id', async (req, res, next) =>
{
	try
	{
		const person = await PersonService.delete(req.params.id);

		return res.json({success: true});
	}
	catch(err)
	{
		return next(err);
	}
});

module.exports = router;