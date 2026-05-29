export type MenuItems = (MenuItem | LinkItem)[];

type MenuItem = {
	label: string;
	menuItems: MenuItems;
};

type LinkItem = {
	label: string;
	href: string;
};

const demoMenuItems: MenuItems = [
	{
		label: 'Menu One',
		menuItems: [
			{
				label: 'Menu One',
				menuItems: [
					{ label: 'Link One', href: '#menu1-menu1-link1' },
					{ label: 'Link Two', href: '#menu1-menu1-link2' },
					{ label: 'Link Three', href: '#menu1-menu1-link3' },
				],
			},
			{ label: 'Link Two', href: '#menu1-link2' },
			{
				label: 'Menu Three',
				menuItems: [
					{ label: 'Link One', href: '#menu1-menu3-link1' },
					{ label: 'Link Two', href: '#menu1-menu3-link2' },
				],
			},
			{ label: 'Link Four', href: '#menu1-link4' },
		],
	},
	{
		label: 'Menu Two',
		menuItems: [
			{ label: 'Link One', href: '#menu2-link1' },
			{
				label: 'Menu Two',
				menuItems: [
					{ label: 'Link One', href: '#menu2-menu2-link1' },
					{ label: 'Link Two', href: '#menu2-menu2-link2' },
					{ label: 'Link Three', href: '#menu2-menu2-link3' },
					{
						label: 'Menu Four',
						menuItems: [
							{ label: 'LinkOne', href: '#menu2-menu2-menu4-link1' },
							{ label: 'LinkTwo', href: '#menu2-menu2-menu4-link2' },
							{ label: 'LinkThree', href: '#menu2-menu2-menu4-link3' },
						],
					},
					{ label: 'Link Five', href: '#menu2-menu2-link5' },
					{ label: 'Link Six', href: '#menu2-menu2-link6' },
				],
			},
			{ label: 'Link Three', href: '#menu2-link3' },
		],
	},
];
export default demoMenuItems;
