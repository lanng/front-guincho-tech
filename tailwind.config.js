module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#0151EF",
					"primary-content": "#d9d8ff",
					secondary: "#03DAC6",
					"secondary-content": "#00110e",
					accent: "#9333ea",
					"accent-content": "#e8dafe",
					neutral: "#0f0f0f",
					"neutral-content": "#F9FAFC",
					"base-100": "#f3f4f6",
					"base-200": "#EBECEE",
					"base-300": "#DDDEE0",
					"base-content": "#141415",
					info: "#00dbff",
					"info-content": "#001116",
					success: "#51e23f",
					"success-content": "#021201",
					warning: "#F1F92C",
					"warning-content": "#141501",
					error: "#F92C2C",
					"error-content": "#150101",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
