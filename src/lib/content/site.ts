export const site = {
	name: 'Jeremiah Earl',
	handle: 'faintent',
	role: 'Independent software engineer',
	location: 'Florida, USA',
	timezone: 'Eastern Time',
	availability: 'Available for freelance and contract work',
	email: 'faintentdev@outlook.com',
	github: 'https://github.com/FaintentDev',
	url: 'https://faintent.dev',
	title: 'Jeremiah Earl — Automation & Software Engineer',
	description:
		'Jeremiah Earl is an independent software engineer in Florida building privately owned automation and software products with Rust and Svelte. Available for freelance and contract work.'
} as const;

export const intro =
	'I build privately owned automation and software products, full-time. Rust on the back end, Svelte on the front.';

export const about = [
	'I’m Jeremiah Earl, an independent software engineer based in Florida. I build and run my own software products full-time.',
	'Most of my work sits where automation, data, and interfaces meet. I like systems that remove manual work and quietly do their job: small installs, fast feedback, and software that earns its keep.'
] as const;

export const contactCopy =
	'Have a problem worth automating? I’m available for freelance and contract work.';

export const capabilities = [
	{
		title: 'Products, end to end',
		description:
			'I design, build, and operate software I own, from the data model to the deployed interface.'
	},
	{
		title: 'Automation & data',
		description:
			'Pipelines that collect, enrich, and act on data: marketplace intelligence, lead generation, and internal tooling.'
	},
	{
		title: 'Rust + Svelte',
		description:
			'Fast systems behind focused interfaces. Small installs, quick feedback, no unnecessary weight.'
	}
] as const;

export const navigation = [
	{ label: 'Work', href: '#work' },
	{ label: 'About', href: '#about' },
	{ label: 'Contact', href: '#contact' }
] as const;
