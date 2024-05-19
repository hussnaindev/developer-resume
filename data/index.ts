import { IData } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const userData: IData = {
	header: {
		name: 'Muhammad Hussnain Raza',
		phoneNumber: '+923180114290',
		location: 'Lahore, Pakistan',
		email: 'hussnain444all@gmail.com',
		linkedIn: 'linkedin.com/in/hussnain-raza/',
		github: 'github.com/hussnaindev'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: 'University of Engineering & Technology',
			location: 'Lahore, Pakistan',
			duration: 'Oct 2019 - May 2023'
		}
	],
	skills: [
		{
			id: uuidv4(),
			name: 'Programming languages',
			skill: ['JavaScript', 'TypeScript']
		},
		{
			id: uuidv4(),
			name: 'Technologies',
			skill: [
				'Git',
				'HTML',
				'CSS',
				'React',
				'Vue',
				'Redux Toolkit',
				'MySQL',
				'MongoDB',
				'Node.js',
				'AWS',
				'REST APIs'
			]
		},
		{
			id: uuidv4(),
			name: 'Soft Skills',
			skill: ['Ownership', 'Rigor', 'Team work', 'Communication']
		}
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Software Engineer',
			company: 'DHives',
			location: 'Lahore, Pakistan',
			duration: 'March 2023 - Present',
			tasks: [
				`Developed a Real Estate Portal using the MERN Stack, focusing on Mapbox Integration, Markers Clustering, State Management, Property Filters, and Layout Designing.`,
				`Created a Content Creation Portal enabling users to generate, explore, and analyze social media content, integrating platforms such as YouTube, Meta (Facebook, Instagram), Tiktok and Twitter for post publishing and analytics.`,
				`Managed database migrations utilizing the Sequelize library and collaborated with Chargify Service to oversee subscriptions and product payments`,
				`Utilized AWS services including CloudWatch, Cognito, Secret Manager, Lambda, and SES, while implementing Logging, Request Tracing, and Monitoring within the project.`,
				`Employed Datadog for custom metrics and monitoring, ensuring comprehensive performance analysis.`,
				`Implemented Helm Charts for Deployments and employed Jest for mocking, unit testing, integration testing, and code coverage reports, ensuring robust and reliable project development.`,
				`Demonstrated proficiency in various tools and technologies including Jest, AWS services, Datadog, and Helm Charts, enhancing project efficiency and reliability.`,
				`Managed cronjobs and webhooks, ensuring scheduled tasks and real-time updates within the project ecosystem.`,
				`Utilized Google Analytics and HubSpot for tracking user activities, setting up Google Ads conversion, and integrated FullStory for comprehensive user behavior analysis.`,
				`Worked with LaunchDarkly for feature flagging, enabling controlled and phased feature releases within the application.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Software Engineer (Intern)',
			company: '10Pearls',
			location: 'Lahore, Pakistan',
			duration: 'June 2022 - August 2022',
			tasks: [
				`Successfully completed an 8-week internship, contributing to the development of 'PULSE,' a web portal for company employees, by implementing a carpooling feature using AngularJS and .NET technologies.`,
				`Played a pivotal role in resolving bugs and addressing issues within the project framework, ensuring seamless functionality and an optimal user experience.`,
				`Collaborated on the real-time project 'PULSE,' demonstrating proficiency in AngularJS and .NET while enhancing the platform with new features and functionalities.`
			]
		}
	],
	projects: [
		{
			id: uuidv4(),
			name: `<a href="https://github.com/hussnaindev/explore-games">ExploreGames</a>`,
			desc: `Built a web app with <strong>HTML, CSS, JavaScript, React.js</strong>, utilizing the RAWG games API, enabling game enthusiasts to explore over 15,000 games and 800+ pages across different genres.`
		}
	],
	accomplishments: [
		`I was one of the few students who got selected for National Outreach Program of LUMS based on exceptional academic background (July - 2018)`,
		`I achieved 1st position in Matriculation at the school level and secured 2nd position in F.Sc Pre Engineering at the college level in 2017 and 2019 respectively.`
	]
};

export default userData;
