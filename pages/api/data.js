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
			startDate: 'Sep 2021',
			endDate: '',
			company: 'Raft Technologies',
			companyLink: 'https://goraft.tech/',
			jobTitle: 'Principal Engineer',
			jobDescription:
				'Implemented and enhanced critical CI/CD applications within the infrastructure. Leveraged Terraform and Ansible for Infrastructure as Code (IaC) and Configuration as Code (CaC) to create and update infrastructure. Employed bash scripts, Python, Helm charts, and CI/CD pipelines for deploying applications to Kubernetes. Troubleshot Kubernetes issues, ensuring secure and uninterrupted application communication. Streamlined existing CI/CD processes to reduce complexity and lower costs.',
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
			jobDescription:
				'Utilized Azure DevOps to create build and release pipelines for automated deployment to Kubernetes, Azure App Service Plans, and virtual machines. Developed .Net Core and PowerShell utilities to enhance environment monitoring and troubleshooting capabilities. Implemented external monitoring solutions for Azure Kubernetes Services to scale pods and create new clusters. Collaborated with development teams to diagnose performance issues, optimize third-party integrations, and troubleshoot Dockerfiles.',
			additionalInfo: [
				'Re-engineered event capturing system, transitioning from an inefficient RDBMS schema to a NoSQL-based polymorphic pattern design',
				'Optimized Tesseract utilization, reducing costs by 75% and improving performance by over 2000%',
				'Revamped entire CI/CD pipeline structure to better align with microservice architecture',
			],
		},
		{
			id: 3,
			startDate: 'Jan 2014',
			endDate: 'Jul 2019',
			company: 'K2',
			companyLink: 'https://www.nintex.com/?referrer=k2',
			jobTitle: 'Infrastructure Consultant',
			jobDescription:
				'Consulted on infrastructure requirements for new builds and integrated Microsoft Exchange, SharePoint, and Active Directory services into the platform. Troubleshot issues in new and existing builds. Developed solutions on the K2 Platform, including SQL tables, stored procedures, views, and web services.',
			additionalInfo: [
				'Created custom PowerShell cmdlets using C# to simplify database administration and enhance K2 management',
				'Delivered in-person and remote training sessions to users on effective product utilization',
			],
		},
		{
			id: 4,
			startDate: 'Jan 2014',
			endDate: 'Dec 2014',
			company: 'Geocent',
			companyLink: 'https://sev1tech.com/',
			jobTitle: 'Senior Systems Administrator',
			jobDescription:
				'Contributed to a SharePoint 2010 implementation project, including new farm creation, migration, and ensuring DoD compliance. Troubleshot issues with Exchange, IronPorts, ArcSight, Active Directory, Hyper-V, SCVMM, and SCOM. Ensured Exchange, SharePoint, ArcSight, and SQL servers complied with DoD STIGs.',
			additionalInfo: [
				'Automated STIG-compliant virtual machine creation, reducing provisioning time from several days to five minutes',
				'Led migration from On-premise Exchange to DoD Hosted Exchange',
			],
		},
		{
			id: 5,
			startDate: 'Sep 2011',
			endDate: 'Jul 2013',
			company: 'Rackspace, the Open Cloud Company',
			companyLink: 'https://www.rackspace.com/',
			jobTitle: 'SharePoint Engineer',
			jobDescription:
				'Assisted new customers in planning SharePoint infrastructure, including Active Directory, authentication methods, and custom deployments. Built and tailored SharePoint environments based on client specifications. Performed migrations from older SharePoint versions to newer ones. Diagnosed and resolved issues in SharePoint environments. Developed PowerShell scripts to aid in farm administration and gather information beyond Central Administration capabilities. Played a crucial role in establishing a secure, hosted SharePoint 2013 environment on the Rackspace public cloud, leveraging cloud technologies like Vyatta.',
			additionalInfo: [
				'Established a secure, multi-tenant SharePoint 2013 farm on public cloud infrastructure',
				'Mentored fellow engineers on SharePoint 2007/2010/2013-related topics and issues',
			],
		},
	],
};

export default data;
