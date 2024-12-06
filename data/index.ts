import { IData } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const userData: IData = {
	header: {
		name: 'Muhammad Hussnain Raza',
		phoneNumber: '+923180114290',
		location: 'Lahore, Pakistan',
		email: 'hussnain.444.work@gmail.com',
		linkedIn: 'linkedin.com/in/hussnain-raza/',
		github: 'github.com/hussnaindev'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: 'University of Engineering & Technology',
			location: 'Lahore, Pakistan',
			duration: 'Oct 2019 - May 2023',
			cgpa: '3.5'
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
				'Node.js',
				'React',
				'React Native',
				'Expo',
				'Express.js',
				'MongoDB',
				'MySQL',
				'REST APIs',
				'Redux Toolkit',
				'Git',
				'AWS',
				'Google Cloud'
			]
		},
		// {
		// 	id: uuidv4(),
		// 	name: 'Soft Skills',
		// 	skill: ['Ownership', 'Rigor', 'Team work', 'Communication']
		// }
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Software Engineer (MERN and Expo React Native)',
			company: 'DHives',
			location: 'Kirkland, Washington',
			duration: 'March 2023 - September 2024',
			tasks: [
				`Developed a scalable <strong>Real Estate Portal</strong> named <strong>"Apni Manzil"</strong> with the <strong>MERN stack</strong> along with Mobile App built in <strong>Expo React Native</strong>, integrating <strong>Google Maps</strong> for geolocation and advanced property search to enhance user experience.`,
				`Developed a content platform, <strong>The Idea Engine</strong>, using <strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, and <strong>Node.js</strong>, integrating APIs for <strong>Facebook</strong>, <strong>Instagram</strong>, <strong>Twitter</strong>, and <strong>YouTube</strong> to enable seamless social media publishing and analytics.`,
				`Optimized <strong>MongoDB</strong> queries by implementing indexing and restructuring clauses, resulting in a <strong>30%</strong> increase in page speed score from <strong>45%</strong> to <strong>75%</strong> using <strong>Lighthouse</strong>.`,
				`Migrated over <strong>5K+ Chargify subscriptions</strong> from the development site to production with zero downtime, managing database migrations using <strong>Sequelize</strong> for seamless deployment.`
			]			
		},
		{
			id: uuidv4(),
			designation: 'Software Engineer (Intern)',
			company: '10Pearls',
			location: 'Vienna, Virginia',
			duration: 'June 2022 - August 2022',
			tasks: [
				`Enhanced the <strong>PULSE</strong> employee management portal by integrating a carpooling feature to improve employee connectivity and collaboration.`,
				'Fixed bugs and enhanced functionality, improving platform performance.'
			]
		}
	],
	projects: [
		// {
		// 	id: uuidv4(),
		// 	name: `<a href="https://github.com/hussnaindev/explore-games">ExploreGames</a>`,
		// 	desc: `Built a web app with <strong>HTML, CSS, JavaScript, React.js</strong>, utilizing the RAWG games API, enabling game enthusiasts to explore over 15,000 games and 800+ pages across different genres.`
		// }
	],
	accomplishments: [
		`Published 3 <strong>npm packages</strong> with total downloads of <strong>1K+</strong>.`,
		`Participated in <strong>Hacktoberfest</strong> twice and completed the <strong>Cloud Seeko Challenge</strong>, earning badges and rewards for contributions to <strong>open-source projects</strong>.`
	]	
};

export default userData;
