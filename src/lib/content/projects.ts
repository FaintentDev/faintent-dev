export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	name: string;
	monogram: string;
	summary: string;
	status: string;
	role: string;
	tags: readonly string[];
	links: readonly ProjectLink[];
};

export const projects: readonly Project[] = [
	{
		name: 'CoreMC',
		monogram: 'C',
		summary: 'A lightweight, modernist Minecraft launcher with every mod loader in one place.',
		status: 'In development',
		role: 'Founder & sole developer',
		tags: ['Rust', 'Svelte'],
		links: [
			{ label: 'coremc.app', href: 'https://coremc.app' },
			{ label: 'coremc.dev', href: 'https://coremc.dev' }
		]
	},
	{
		name: 'CollectiBull',
		monogram: 'CB',
		summary:
			'Marketplace intelligence for trading card games, built to uncover profitable card-flipping opportunities.',
		status: 'Private (Public version soon)',
		role: 'Founder & sole developer',
		tags: ['Rust', 'Data', 'Automation'],
		links: []
	},
	{
		name: 'RoofRadar',
		monogram: 'RR',
		summary:
			'A lead discovery and outreach system for roofing companies, built for faster outreach.',
		status: 'Private (Public demo soon)',
		role: 'Founder & sole developer',
		tags: ['Rust', 'Automation'],
		links: []
	}
];
