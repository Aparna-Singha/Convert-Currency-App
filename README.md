Currency Converter App

📖 Overview

The Currency Converter App is a web application that allows users to convert amounts between different currencies in real-time. It fetches live exchange rates and provides an easy-to-use interface for seamless currency conversion.

✨ Features

	•	🌎 Real-time Exchange Rates: Fetches updated rates using a reliable API.
	•	🔄 Bidirectional Conversion: Supports conversions in both directions (e.g., USD to INR and vice versa).
	•	🌐 Country Flags: Displays flags for selected currencies for better visual identification.
	•	📱 Responsive Design: Works smoothly on desktops, tablets, and mobile devices.
	•	🎨 User-Friendly Interface: Clean, minimal, and intuitive design.

🛠️ Technologies Used

	•	Frontend:
	•	HTML5, CSS3, JavaScript
	•	Backend/External APIs:
	•	ExchangeRate API for fetching live exchange rates
	•	Icons:
	•	FontAwesome for icons
	•	Flags:
	•	FlagsAPI for country flag images

🚀 Getting Started

Prerequisites

	•	A web browser (e.g., Chrome, Firefox, or Safari)
	•	Internet connection for API access

Installation

	1.	Clone the Repository

git clone https://github.com/<YourUsername>/Currency-Converter-App.git
cd Currency-Converter-App


	2.	Open the App
	•	Open the index.html file in your browser.

Usage

	1.	Enter the amount you want to convert.
	2.	Select the source currency (e.g., USD) and the target currency (e.g., INR) from the dropdowns.
	3.	Click Get Exchange Rate to view the converted amount.
	4.	Use the exchange icon to swap source and target currencies.

📂 Project Structure

Currency-Converter-App/
├── index.html           # Main HTML file
├── style.css            # CSS for styling the app
├── js/
│   ├── script.js        # JavaScript for app logic
│   └── country-list.js  # List of currency codes and corresponding flags
├── README.md            # Documentation (this file)

🛡️ API Integration

This app uses the ExchangeRate API to fetch live exchange rates.
Replace the API_KEY in script.js with your own key for uninterrupted service:

let url = 'https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD';

🎨 Future Enhancements

	•	Add dark mode support.
	•	Include a historical exchange rate graph.
	•	Support for offline conversion using cached rates.
	•	Expand to include a language translation feature.

🧑‍💻 Contributing

Contributions are welcome! Follow these steps to contribute:
	1.	Fork the repository.
	2.	Create a new branch for your feature (git checkout -b feature-name).
	3.	Commit your changes (git commit -m "Add a feature").
	4.	Push the changes (git push origin feature-name).
	5.	Create a Pull Request.

📜 License

This project is licensed under the MIT License.

🙌 Acknowledgements

	•	ExchangeRate API for live rates.
	•	FlagsAPI for flag icons.
	•	FontAwesome for UI icons.

📧 Contact

If you have any questions or suggestions, feel free to reach out:
	•	Author: Your Name
	•	Email: yourname@example.com

Let’s make currency conversion easy and accessible for everyone! 🎉<img width="1440" alt="Screenshot 2024-11-29 at 1 51 12 PM" src="https://github.com/user-attachments/assets/9d3d447a-a1d2-49a5-af66-99d02986a2cf">
