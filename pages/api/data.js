let data = {
	contact: {
		name: 'Robert Cornelius Schröder',
		email: 'kontakt@robert-cornelius-schroeder.de',
		linkedInUrl: 'https://www.linkedin.com/in/robert-cornelius-schröder-657aa9186/',
	},
	education: [
		{
			id: 1,
			startDate: 'Oct 2017',
			endDate: 'Oct 2021',
			school: 'RWTH Aachen University',
			schoolUrl: 'https://www.rwth-aachen.de/',
			degree: 'Bachelor\'s program in Mechanical Engineering and Business Administration',
			degreeDescription: ['specialization in mechanical engineering: process engineering','overall grade: 1.6']
		},
		{
			id: 2,
			startDate: 'Jul 2022',
			endDate: 'Dec 2022',
			school: 'University of Queensland',
			schoolUrl: 'https://www.uq.edu.au/',
			degree: 'Semester abroad',
			degreeDescription: 'overall grade: 1.4'
		},
		{
			id: 3,
			startDate: 'Oct 2021',
			endDate: 'Mar 2024',
			school: 'RWTH Aachen University',
			schoolUrl: 'https://www.rwth-aachen.de/',
			degree: 'Master\'s program in Mechanical Engineering and Business Administration',
			degreeDescription: ['specialization in Mechanical Engineering: Process Engineering','specialization in Business Administration: General Business & Economics','current overall grade: 1.4']
		},
	],
	certifications: [
		{
			id: 2,
			title: 'Architecting Microsoft Azure Solutions',
			link: 'https://www.credly.com/badges/e6e474b4-cdc0-451e-8805-ded4a1536ea5',
			dateAchieved: '29 December 2015',
		},
		{
			id: 3,
			title: 'CKAD: Certificate Kubernetes Application Developer',
			link: 'https://www.credly.com/badges/0836049e-e150-4321-9d97-ebb537cf96f1',
			dateAchieved: '25 September 2021',
		},
		{
			id: 4,
			title: 'CompTIA Security+ CE',
			link: 'https://www.credly.com/badges/44be2b36-0ba3-4427-b960-6be43e31924b',
			dateAchieved: '15 October 2021',
		},
		{
			id: 5,
			title: 'CKA: Certified Kubernetes Administrator',
			link: 'https://www.credly.com/badges/564a32af-932d-42e6-b642-d24a003574c4',
			dateAchieved: '15 July 2022',
		},
		{
			id: 6,
			title: 'Cornell: Python for Data Science',
			link: 'https://ecornell.cornell.edu/certificates/data-science/python-for-data-science/',
			dateAchieved: '30 November 2022',
		},
		{
			id: 7,
			title: 'AWS Certified Solutions Architect - Associate',
			link: 'https://www.credly.com/badges/3869260e-d08c-4e0d-9259-b0215776e36c',
			dateAchieved: '22 March 2023',
		},
	],
	hobbies: [
		{
			id: 1,
			title: 'Kitesurfing',
			icon: 'kitesurf',
		},
		{
			id: 2,
			title: 'Sailing',
			icon: 'sailing',
		},
		{
			id: 3,
			title: 'Music',
			icon: 'audiotrack',
		},
		{
			id: 4,
			title: 'Crafting & Woodworking',
			icon: 'build',
		},
		{
			id: 5,
			title: 'Technology & Programming',
			icon: 'tech',
		},
		{
			id: 6,
			title: 'Spending Time with Family',
			icon: 'family',
		},
	],
	skills: [
		{
			id: 1,
			skillName: 'Python',
			blurb:
				'',
			rating: 95,
		},
		{
			id: 2,
			skillName: 'JavaScript & HTML (Web Development)',
			blurb:
				'',
			rating: 85,
		},
		{
			id: 3,
			skillName: 'RStudio',
			blurb:
				'',
			rating: 80,
		},
		{
			id: 4,
			skillName: 'Matlab',
			blurb:
				'',
			rating: 75,
		},
		{
			id: 5,
			skillName: 'MS Office',
			blurb:
				'',
			rating: 90,
		},
		{
			id: 6,
			skillName: 'Adobe Photoshop',
			blurb:
				'',
			rating: 90,
		},
	],
	languages: [
		{
			id: 1,
			languageName: 'German',
			blurb:'',
			rating: 100,
		},
		{
			id: 2,
			languageName: 'English',
			blurb:'',
			rating: 90,
		},
		{
			id: 3,
			languageName: 'French',
			blurb:'',
			rating: 40,
		},
		{
			id: 4,
			languageName: 'Spanish',
			blurb:'',
			rating: 25,
		},
	],
	workHistory: [
		{
			id: 1,
			startDate: 'Jan 2023',
			endDate: 'Mar 2023',
			company: 'Strategy Engineers',
			companyLink: 'https://strategyengineers.com/',
			jobTitle: 'Intern',
			jobDescription: [
				'As intern in management consulting, I conducted a comprehensive market benchmark to identify trends in battery technology','Performed a due diligence to evaluate business plans and derive improved strategies'],
			additionalInfo: [
				'Automated a legacy application cluster, enabling dynamic scaling up to 100+ nodes',
				'Customized Big Bang to fit specific environmental requirements',
			],
		},
		{
			id: 2,
			startDate: 'Jul 2019',
			endDate: 'Sep 2021',
			company: 'Concord Technologies',
			companyLink: 'https://concord.net/',
			jobTitle: 'Principal Cloud Operations Engineer',
			jobDescription: ['specialization in mechanical engineering: process engineering','overall grade: 1.6'],
			additionalInfo: [
				'Re-engineered event capturing system, transitioning from an inefficient RDBMS schema to a NoSQL-based polymorphic pattern design',
				'Optimized Tesseract utilization, reducing costs by 75% and improving performance by over 2000%',
				'Revamped entire CI/CD pipeline structure to better align with microservice architecture',
			],
		},
	],
};

export default data;
