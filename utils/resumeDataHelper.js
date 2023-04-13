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
		var highestId = Math.max(...array.map((item) => item.id));
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

function convertToDatePickerInput(dateInput = new Date()) {
	var unixTime = Date.parse(dateInput);
	var date = new Date(unixTime);
	var convertedDate = date.toLocaleString('fr-CA');
	return convertedDate.split(' ')[0];
}

function convertToSortableDate(dateInput = new Date()) {
	var unixTime = Date.parse(dateInput);
	return unixTime;
}

function validateItem(object, requiredFields) {
	var isValid = true;
	for (let i = 0; i < requiredFields.length; i++) {
		if (!object[requiredFields[i]]) {
			isValid = false;
		}
	}
	return isValid;
}

function validateResumeStructure(resumeData) {
	var isValid = false;
	if (
		resumeData.education.length > 0 &&
		resumeData.hobbies.length > 0 &&
		resumeData.skills.length > 0 &&
		resumeData.workHistory.length > 0
	) {
		isValid = true;
	}
	return isValid;
}

export {
	generateNewItem,
	addOrUpdateArray,
	removeFromArray,
	convertFromSimpleArray,
	convertToSimpleArray,
	convertToDatePickerInput,
	convertToSortableDate,
	validateItem,
	validateResumeStructure,
};
