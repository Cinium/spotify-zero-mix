import store from "../redux/store"

const colors = {
	purple: {
		primary: {
			99: '#FFFBFE', // font color dark
			95: '#F6EDFF', // background light  
			90: '#EADDFF', // header light
			80: '#D0BCFF', // main dark
			70: '#B69DF8',
			60: '#9A82DB',
			50: '#7F67BE',
			40: '#6750A4', // main light
			30: '#4F378B', // header dark
			20: '#381E72', // background dark
			10: '#21005D', // font color light
		},
		secondary: {
			99: '#FFFBFE',
			95: '#F6EDFF',
			90: '#E8DEF8', // Active state indicator
			80: '#CCC2DC',
			70: '#B0A7C0',
			60: '#958DA5',
			50: '#7A7289',
			40: '#625B71',
			30: '#4A4458',
			20: '#332D41',
			10: '#1D192B', //Icon (active)
		},
		tertiary: {
			99: '#FFFBFA',
			95: '#FFECF1',
			90: '#FFD8E4',
			80: '#EFB8C8', // avatar background
			70: '#D29DAC',
			60: '#B58392',
			50: '#986977',
			40: '#7D5260',
			30: '#633B48',
			20: '#492532',
			10: '#31111D', // avatar text
		},
		error: {
			99: '#FFFBF9',
			95: '#FCEEEE',
			90: '#F9DEDC',
			80: '#F2B8B5',
			70: '#EC928E',
			60: '#E46962',
			50: '#DC362E',
			40: '#B3261E',
			30: '#8C1D18',
			20: '#601410',
			10: '#410E0B',
		},
		neutral: {
			99: '#FFFBFE', // md.sys.color.surface
			95: '#F4EFF4',
			90: '#E6E1E5',
			80: '#C9C5CA',
			70: '#AEAAAE',
			60: '#939094',
			50: '#787579',
			40: '#605D62',
			30: '#484649', // Icon (inactive), Label text (inactive)
			20: '#313033',
			10: '#1C1B1F', // Label text (active)
		}
	},
	green: {

	},
	blue: {

	},
	default: {
		primary: {
			99: '', // font color dark
			95: '', // background light  
			90: '#EADDFF', // header light
			80: '#D0BCFF', // main dark
			70: '',
			60: '',
			50: '',
			40: '#6750A4', // main light
			30: '#4F378B', // header dark
			20: '#371E73', // background dark
			10: '#21005E', // font color light
		},
		secondary: {
			99: '',
			95: '',
			90: '#E8DEF8', // Active state indicator
			80: '#CCC2DC',
			70: '',
			60: '',
			50: '',
			40: '#625B71',
			30: '#4A4458',
			20: '#332D41',
			10: '#1E192B', //Icon (active)
		},
		tertiary: {
			99: '',
			95: '',
			90: '#FFD8E4',
			80: '#EFB8C8', // avatar background
			70: '',
			60: '',
			50: '',
			40: '#7D5260',
			30: '#633B48',
			20: '#492532',
			10: '#370B1E', // avatar text
		},
		error: {
			99: '',
			95: '',
			90: '#F9DEDC',
			80: '#F2B8B5',
			70: '',
			60: '',
			50: '',
			40: '#B3261E',
			30: '#8C1D18',
			20: '#601410',
			10: '#370B1E',
		},
		neutral: {
			99: '#FFFBFE', // md.sys.color.surface
			95: '#F4EFF4',
			90: '#E7E0EC',
			80: '#CAC4D0',
			70: '',
			60: '#938F99',
			50: '#79747E',
			40: '',
			30: '#49454E', // Icon (inactive), Label text (inactive)
			20: '#313033',
			10: '#1C1B1F', // Label text (active)
		}
	},
	template: {
		primary: {
			99: '',
			95: '',  
			90: '',
			80: '',
			70: '',
			60: '',
			50: '',
			40: '',
			30: '',
			20: '',
			10: '',
		},
		secondary: {
			99: '',
			95: '',
			90: '',
			80: '',
			70: '',
			60: '',
			50: '',
			40: '',
			30: '',
			20: '',
			10: '',
		},
		tertiary: {
			99: '',
			95: '',
			90: '',
			80: '',
			70: '',
			60: '',
			50: '',
			40: '',
			30: '',
			20: '',
			10: '',
		},
		error: {
			99: '',
			95: '',
			90: '',
			80: '',
			70: '',
			60: '',
			50: '',
			40: '',
			30: '',
			20: '',
			10: '',
		},
		neutral: {
			99: '',
			95: '',
			90: '',
			80: '',
			70: '',
			60: '',
			50: '',
			40: '',
			30: '',
			20: '',
			10: '',
		}
	},
}

const currentTheme = store.getState().app.theme
export const colorTheme = colors[currentTheme]