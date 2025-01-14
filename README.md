# Care2 Training Consultancy
Care2 Training Consultancy offers expert advice and solutions for students, professionals, and travellers wishing to study, work, or live abroad. This project is a web application built with **React**, **Material-UI**, and **Framer Motion** to provide a seamless and interactive user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [Submission Requirements](#submission-requirements)
- [SEO, Performance, and Responsiveness](#seo-performance-and-responsiveness)
  

## Features

- **Responsive Design**: Built with Material-UI for a polished and adaptive layout.
- **Smooth Animations**: Powered by Framer Motion for an engaging user experience.
- **Email Subscription**: Includes a form with validation for capturing user emails.
- **Mobile-Friendly Navigation**: Features a responsive navigation bar with a drawer for smaller screens.
- **Informative Sections**: Detailed information about services and consultancy offerings.
- **Contact Form**: A user-friendly form with validation and success notifications.

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Nyamori2024/care2-training-consultancy.git
   cd care2-training-consultancy
2. **install Dependencies:**
    ```sh
    npm install
3.  **Start the Development Server:**
       ```sh
   npm run dev
   The application will open automatically in your default browser at http://localhost:5173

   ## Usage

  The application includes several key sections:

- **Hero Section**: A visually appealing introduction with a background image and smooth animations.
- **About Us**: Detailed information about the consultancy services offered by Care2.
- **Services**: A comprehensive list of consultancy services with links to detailed descriptions.
- **Why Choose Us**: Highlights the unique benefits of partnering with Care2 Training Consultancy.
- **Contact Form**: Enables users to send inquiries, complete with field validation and success notifications.
- **Footer**: Includes links to privacy policy, terms of service, and social media channels.

  
     ## Components

1. **Hero**: Displays a background image and introductory text with smooth animations.
2. **Navbar**: A responsive navigation bar with a drawer for mobile devices.
3. **Footer**: Contains links to the privacy policy, terms of service, and newsletter subscription.
4. **AboutUs**: Details about Care2 Training Consultancy.
5. **ContactForm**: A validated form for contacting the consultancy.
6. **GetStarted**: Provides steps to engage with Care2's services.
7. **WhyChooseUs**: Lists reasons to choose Care2.
8. **Services**: Displays available services with links to detailed descriptions.
9. **ServiceDetail**: Shows detailed information for a specific service.

    ## Project Structure

```plaintext
care2-training-consultancy
├── public
│   ├── assets
│   │   └── hero-background.webp
│   └── index.html
├── src
│   ├── components
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   └── ...
│   ├── contexts
│   │   └── FormProvider.js
│   ├── data
│   │   └── serviceData.js
│   ├── hooks
│   │   └── useFormContext.js
│   ├── pages
│   │   ├── AboutUs.js
│   │   ├── ContactForm.js
│   │   ├── GetStarted.js
│   │   ├── HomePage.js
│   │   ├── ServiceDetail.js
│   │   ├── Services.js
│   │   └── WhyChooseUs.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md

## Submission Requirements
1. Code
-Submit the code via the GitHub repository
-Follow the Installation steps to run the project locally
2. Live Demo
-The application is deployed on Netlify
-Access the live demo here https://care2-training-consultancy.netlify.app/
3. Documentation
-Refer to the SEO, Performance, and Responsiveness section for applied optimizations.

 ## SEO, Performance, and Responsiveness
 **SEO Techniques**
-Use of semantic HTML tags (<header>, <main>, <footer>).
-Proper metadata, including title and meta descriptions, for search engines.
-Alt text added for all images.

## Responsive Design
-Mobile-first approach implemented with Material-UI.
-Media queries adapt layouts for various screen sizes
-Grid and spacing systems ensure flexibility across devices.

## Performance Optimization
-Images optimized and served in next-gen formats (e.g., WebP).
-Media queries adapt layouts for various screen sizes.
-Grid and spacing systems ensure flexibility across devices.

   
