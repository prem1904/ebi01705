const PersonModel = require("../models/model.person");
let Validator = require('fastest-validator');


let persons = {};
let PersonList=[];
let counter = 0;

let personValidator = new Validator();

let namePattern = /([A-Za-z\-\’])*/;

const personVSchema = {	
		first_name: { type: "string", min: 1, max: 50, pattern: namePattern},
		last_name: { type: "string", min: 1, max: 50, pattern: namePattern},
		age: { type: "string" },
		favourite_colour: { type: "string", max: 5},
	};

class PersonService
{ 
	static listPersons(){
		return PersonList;
	}


	static create(data)
	{
		var vres = personValidator.validate(data, personVSchema);
		
		if(!(vres === true))
		{
			let errors = {}, item;

			for(const index in vres)
			{
				item = vres[index];

				errors[item.field] = item.message;
			}
			
			throw {
			    name: "ValidationError",
			    message: errors
			};
		}

		let person = new PersonModel(data.first_name, data.last_name, data.age, data.favourite_colour);

		PersonList.push(person);

		person.uid = 'p' + counter++;

		persons[person.uid] = person;

		return person;
	}

	static retrieve(uid)
	{
		if(persons[uid] != null)
		{
			return persons[uid];
		}
		else
		{
			throw new Error('Unable to retrieve a person by (uid:'+ uid +')');
		}
	}

	static update(uid, data)
	{
		if(persons[uid] != null)
		{
			const person = persons[uid];
			
			Object.assign(person, data);

			return person;
		}
		else
		{
			throw new Error('Unable to retrieve a person by (uid:'+ uid +')');
		}
	}

	static delete(uid)
	{
		if(persons[uid] != null)
		{
		    PersonList=removeData(PersonList,"uid",uid);	
			delete persons[uid];
		}
		else
		{
			throw new Error('Unable to retrieve a person by (uid:'+ uid +')');
		}
	}
}

function removeData (userObjects,id,value)
{
	 return userObjects.filter(
	 		function (data) {
	  			return data[id] !== value;
  		}
  );

}

module.exports = PersonService;