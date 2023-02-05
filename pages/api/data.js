let data = {
	contact: {
		name: 'Jimmy Bourque',
		email: 'jimmyb@bourquecloud.com',
		phone: '210-418-0127',
		linkedInUrl: 'https://www.linkedin.com/in/james-jimmy-bourque-1055b85b/',
		githubUrl: 'https://github.com/jimmybchopps',
		genericUrl: '',
	},
	education: [
		{
			id: 1,
			school: 'University of Management & Technology',
			schoolUrl: 'https://www.umtweb.edu/',
			degree: 'Bachelor of Computer Science',
			graduationYear: '2014',
		},
		{
			id: 2,
			school: 'University of Management & Technology',
			schoolUrl: 'https://www.umtweb.edu/',
			degree: 'Master of Computer Science',
			graduationYear: '2019',
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
	],
	hobbies: [
		{
			id: 1,
			title: 'BBQ',
			icon: 'bbq',
		},
		{
			id: 2,
			title: 'Craft Beer',
			icon: 'beer',
		},
		{
			id: 3,
			title: 'Camping & Outdoors',
			icon: 'outdoor',
		},
		{
			id: 4,
			title: 'Spending Time with Family',
			icon: 'family',
		},
	],
	skills: [
		{
			id: 1,
			skillName: 'Kubernetes',
			blurb:
				"This site you're on is actually hosted on my local Kubernetes cluster.",
			rating: 90,
		},
		{
			id: 2,
			skillName: 'CI/CD',
			blurb:
				'Can easily update existing templates, would need to reference documentation for creation of certain templates.',
			rating: 85,
		},
		{
			id: 3,
			skillName: 'ReactJS/NextJS',
			blurb:
				'Self taught using Udemy and YouTube.  Still learning and improving.',
			rating: 40,
		},
		{
			id: 4,
			skillName: 'Python',
			blurb: 'Can create new scripts/applications/bots with relative ease.',
			rating: 85,
		},
		{
			id: 5,
			skillName: 'C#',
			blurb:
				'Can easily create new or debug existing, but may need a little more time when working with more advanced implementations.',
			rating: 70,
		},
		{
			id: 6,
			skillName: 'Scripting',
			blurb: 'Created very robust scripts in each language from scratch.',
			rating: 95,
		},
		{
			id: 7,
			skillName: 'Database (NoSQL & RDBMS)',
			blurb:
				'Well versed with data normalization and have architected data layer in many situations in the past.',
			rating: 95,
		},
		{
			id: 8,
			skillName: 'Cloud',
			blurb: 'Very comfortable in Azure and have certifications to prove it.',
			rating: 95,
		},
	],
	workHistory: [
		{
			id: 1,
			startDate: 'Sept 2021',
			company: 'Raft Technologies',
			companyLink: 'UrlHere',
			jobTitle: 'Principal Engineer',
			jobDescription:
				'Serving as a member of the Critical Applications Team responsible for maintianing all applications critical to CI/CD pipelines and security related tasks. Responsible for deploying applications and upgrading applications on existing Kubernetes clusters using a variety of techniques including CI/CD pipelines, Bash, and Helm.  Troubleshoots issues that arise with applications in Kubernetes and AWS by analyzing log files and tracing to the source.  Uses Terraform to modify or create new infrastructure in AWS that will be used by applications and re-architects application designs as needed to ensure optimal performance.',
		},
		{
			id: 2,
			startDate: 'July 2019',
			endDate: 'Sept 2021',
			company: 'Concord Technologies',
			companyLink: 'UrlHere',
			jobTitle: 'Principal Cloud Operations Engineer',
			jobDescription:
				'Works in Azure DevOps to create build and release pipelines to automatically create new builds when development is complete and deploy to Kubernetes, Azure App Service Plans, and virtual machines.  Develops utilities using .Net Core and PowerShell to allow for better monitoring of the environment and create more robust troubleshooting tools.  Deploys external monitoring solutions to Azure Kubernetes Services to allow scaling pods on additional metrics and creates new clusters when needed. Troubleshoots software issues and performs research with 3rd party integrations to ensure it is being used optimally. Works closely with development team to help diagnose performance issues with the environment and to assist in the creation and troubleshooting of dockerfiles.',
			additionalInfo: [
				'Led effort to re-architect event capturing system into a polymorphic pattern design in NoSQL.',
			],
		},
		{
			id: 3,
			startDate: 'Jan 2014',
			endDate: 'July 2019',
			company: 'K2',
			companyLink: 'UrlHere',
			jobTitle: 'Infrastructure Consultant',
			jobDescription:
				'Consults on infrastructure requirements for new environment builds and works with customers to tightly integrate Microsoft Exchange, SharePoint, and Active Directory services into platform. Assists in troubleshooting environmental issues keeping a new build or existing build from working properly. Assists in building solutions on the K2 Platform including building out SQL tables, stored procedures, views, and web services.',
			additionalInfo: [
				'Developed a set of custom PowerShell cmdlets using C# to avoid having to manually modify database and make administration of K2 easier',
			],
		},
		{
			id: 4,
			startDate: 'Jan 2014',
			endDate: 'Dec 2014',
			company: 'Geocent',
			companyLink: 'UrlHere',
			jobTitle: 'Senior Systems Administrator',
			jobDescription:
				'Assists on SharePoint 2010 implementation project to include building new farms, migrating to new farms, and securing the environment to ensure compliance with DoD standards. Troubleshoots issues with Exchange, IronPorts, ArcSight, Active Directory, Hyper-V, SCVMM, and SCOM. Works to ensure Exchange, SharePoint, ArcSight, and SQL servers are compliant with DoD STIG’s.',
			additionalInfo: [
				"Automated process of creating STIG'ed virtual machines to cut provisioning time down from several days to five minutes",
				'Did Some other thing',
				'And another thing'
			],
		},
		{
			id: 5,
			startDate: 'Sept 2011',
			endDate: 'July 2013',
			company: 'Rackspace, the Open Cloud Company',
			companyLink: 'UrlHere',
			jobTitle: 'SharePoint Engineer',
			jobDescription:
				'Engages new customers on implementation calls to assist in the planning of the SharePoint infrastructure to include Active Directory environment, authentication method, and custom deployments. Builds new SharePoint environments based on customer specifications. Performs migrations between older versions of SharePoint to new versions. Troubleshoots SharePoint environments to determine root cause and resolve issues. Creates PowerShell scripts to help in common farm administration tasks or to get additional information that is not easily obtained via Central Administration. Played a key role in creating and implementing a hosted SharePoint 2013 environment on the Rackspace public cloud using other cloud technologies (such as Vyatta) to ensure security of the infrastructure.',
			additionalInfo: [
				'Created a seure multi-tenant SharePoint 2013 farm on public cloud infrastructure',
			],
		},
	],
};

export default data;
