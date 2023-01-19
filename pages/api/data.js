let data =
    {
        contact: {
            name: "Jimmy Bourque",
            email: "jimmyb@bourquecloud.com",
            phone: "210-418-0127",
            linkedInUrl: "https://www.linkedin.com/in/james-jimmy-bourque-1055b85b/",
            githubUrl: "https://github.com/jimmybchopps",
            genericUrl: ""
        },
        education: [
            {
                id: 1,
                school: "University of Management & Technology",
                schoolUrl: "https://www.umtweb.edu/",
                degree: "Bachelor of Computer Science",
                graduationYear: "2014"
            },
            {
                id: 2,
                school: "University of Management & Technology",
                schoolUrl: "https://www.umtweb.edu/",
                degree: "Master of Computer Science",
                graduationYear: "2019"
            }
        ],
        certifications: [
            {
                id: 1,
                title: "MCSA: Office 365",
                link: "https://www.credly.com/badges/4f987cee-b9e5-465f-a242-0e9b0082400a",
                dateAchieved: "28 December 2015"
            },
            {
                id: 2,
                title: "Architecting Microsoft Azure Solutions",
                link: "https://www.credly.com/badges/e6e474b4-cdc0-451e-8805-ded4a1536ea5",
                dateAchieved: "29 December 2015"
            },
            {
                id: 3,
                title: "CKAD: Certificate Kubernetes Application Developer",
                link: "https://www.credly.com/badges/0836049e-e150-4321-9d97-ebb537cf96f1",
                dateAchieved: "25 September 2021"
            },
            {
                id: 4,
                title: "CompTIA Security+ CE",
                link: "https://www.credly.com/badges/44be2b36-0ba3-4427-b960-6be43e31924b",
                dateAchieved: "15 October 2021"
            },
            {
                id: 5,
                title: "CKA: Certified Kubernetes Administrator",
                link: "https://www.credly.com/badges/564a32af-932d-42e6-b642-d24a003574c4",
                dateAchieved: "15 July 2022"
            },
            {
                id: 6,
                title: "Cornell: Python for Data Science",
                link: "https://ecornell.cornell.edu/certificates/data-science/python-for-data-science/",
                dateAchieved: "30 November 2022"
            }
        ],
        hobbies: [
            {
                id: 1,
                title: "BBQ",
            },
            {
                id: 2,
                title: "Craft Beer"
            },
            {
                id: 3,
                title: "Camping & Outdoors"
            },
            {
                id: 4,
                title: "Spending Time with Family"
            }
        ],
        skills: [
            {
                id: 1,
                skillName: "Kubernetes",
                blurb: "This site you're on is actually hosted on my local Kubernetes cluster.",
                rating: 9
            },
            {
                id: 2,
                skillName: "Docker",
                blurb: "Troubleshooting, creating new, converting non containerized image to container.",
                rating: 9
            },
            {
                id: 3,
                skillName: "Terraform",
                blurb: "Can easily update existing templates, would need to reference documentation for creation of certain templates.",
                rating: 5
            },
            {
                id: 4,
                skillName: "Azure DevOps/Gitlab",
                blurb: "Very well versed in both in regards to creating CI/CD pipelines and troubleshooting them.",
                rating: 7
            },
            {
                id: 5,
                skillName: "ReactJS",
                blurb: "Self taught using Udemy and YouTube.  Still learning and improving.",
                rating: 3
            },
            {
                id: 6,
                skillName: "Python",
                blurb: "Can create new scripts/applications/bots with relative ease.",
                rating: 8
            },
            {
                id: 7,
                skillName: "C#/Java",
                blurb: "Can easily create new or debug existing, but may need a little more time when working with more advanced implementations.",
                rating: 7
            },
            {
                id: 8,
                skillName: "Git",
                blurb: "Very well versed in most aspects.",
                rating: 9
            },
            {
                id: 9,
                skillName: "PowerShell/Bash",
                blurb: "Created very robust scripts in each language from scratch.",
                rating: 9
            },
            {
                id: 10,
                skillName: "MS SQL Server",
                blurb: "Well versed with data normalization and have architected data layer in many situations in the past.",
                rating: 9
            },
            {
                id: 11,
                skillName: "MongoDB/NoSQL",
                blurb: "Expert in querying and architecting data types optimally in a NoSQL environment.",
                rating: 9
            },
            {
                id: 12,
                skillName: "Azure",
                blurb: "Very comfortable in Azure and have certifications to prove it.",
                rating: 9
            },
            {
                id: 13,
                skillName: "AWS",
                blurb: "It may take a bit longer for me to figure out the same thing in AWS when compared to Azure.",
                rating: 6
            }
        ],
        workHistory: [
            {
                id: 1,
                startDate: "20 Sept 2021",
                company: "Raft Technologies",
                companyLink: "UrlHere",
                jobTitle: "Principal Engineer",
                jobDescription: "Serving as a member of the Critical Applications Team responsible for maintianing all applications critical to CI/CD pipelines and security related tasks. Responsible for deploying applications and upgrading applications on existing Kubernetes clusters using a variety of techniques including CI/CD pipelines, Bash, and Helm.  Troubleshoots issues that arise with applications in Kubernetes and AWS by analyzing log files and tracing to the source.  Uses Terraform to modify or create new infrastructure in AWS that will be used by applications and re-architects application designs as needed to ensure optimal performance."
            },
            {
                id: 2,
                startDate: "07 July 2019",
                endDate: "17 Sept 2021",
                company: "Concord Technologies",
                companyLink: "UrlHere",
                jobTitle: "Principal Cloud Operations Engineer",
                jobDescription: "Works in Azure DevOps to create build and release pipelines to automatically create new builds when development is complete and deploy to Kubernetes, Azure App Service Plans, and virtual machines.  Develops utilities using .Net Core and PowerShell to allow for better monitoring of the environment and create more robust troubleshooting tools.  Deploys external monitoring solutions to Azure Kubernetes Services to allow scaling pods on additional metrics and creates new clusters when needed. Troubleshoots software issues and performs research with 3rd party integrations to ensure it is being used optimally. Works closely with development team to help diagnose performance issues with the environment and to assist in the creation and troubleshooting of dockerfiles.",
                additionalInfo: "I did something pretty cool doing this"
            },
            {
                id: 3,
                startDate: "01 Jan 2014",
                endDate: "02 July 2019",
                company: "K2",
                companyLink: "UrlHere",
                jobTitle: "Infrastructure Consultant",
                jobDescription: "I did stuff here",
                additionalInfo: "I did another cool thing here"
            }
        ]
    };

export default data;