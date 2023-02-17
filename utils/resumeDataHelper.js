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

function addOrUpdateArray(array, object) {
	var index = array.findIndex((item) => item.id === object.id);
	if (index > -1) {
		array[index] = object;
		return array;
	} else {
		return [...array, object];
	}
}

function removeFromArray(array, itemId) {
	return array.filter((item) => item.id !== itemId);
}

function convertFromSimpleArray(array) {
	if (array) {
		return array.join('; ');
	} else {
		return [];
	}
}

function convertToSimpleArray(string) {
	var array = string.split(';');
	return array.map((item) => item.trim());
}

function convertToDatePickerInput(dateInput) {
	var unixTime = Date.parse(dateInput);
	var date = new Date(unixTime);
	var convertedDate = date.toLocaleString('fr-CA');
	return convertedDate.split(' ')[0];
}

export {
	generateNewItem,
	addOrUpdateArray,
	removeFromArray,
	convertFromSimpleArray,
	convertToSimpleArray,
	convertToDatePickerInput,
};
