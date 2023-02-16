function getSchema(section) {
	switch (section) {
		case 'Education':
			return {
				id: '',
				school: '',
				schoolUrl: '',
				degree: '',
				graduationYear: '',
			};
		case 'Certifications':
			return { id: '', title: '', link: '', dateAchieved: '' };
		case 'Skills':
			return { id: '', skillName: '', blurb: '', rating: 50 };
		case 'Hobbies':
			return { id: '', title: '', icon: '' };
		default:
			return {
				id: '',
				startDate: '',
				endDate: '',
				company: '',
				companyLink: '',
				jobTitle: '',
				jobDescription: '',
				additionalInfo: [],
			};
	}
}

function generateNewItem(array, section) {
	var nextId;
	if (array.length > 0) {
		var highestId = array.reduce(
			(array, item) => (array = array > item.id ? array : item.id)
		);
		nextId = highestId + 1;
	} else {
		nextId = 1;
	}
	var newItem = getSchema(section);
	newItem.id = nextId;
	return newItem;
}

function addToArray(array, object) {}

function removeFromArray(array, itemId) {
	return array.filter((item) => item.id !== itemId);
}

function convertFromSimpleArray(array) {}

function convertToSimpleArray(string) {}

export {
	generateNewItem,
	addToArray,
	removeFromArray,
	convertFromSimpleArray,
	convertToSimpleArray,
};
