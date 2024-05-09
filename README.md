## Photo gallery 

This is a simple and responsive photo gallery that displays images. The gallery is responsive and will adjust the number of columns based on the screen size. Is connected to CONTENTFUL CMS to manage the images and the text. Communication with the CMS is done through the Contentful API.

## Technologies
- Next.js
- React
- TypeScript
- Tailwind CSS
- Contentful API

## Features
- Responsive design
- Dynamic routing
- Image optimization
- SEO friendly
- CMS integration

## Installation
1. Clone the repository
2. Install the dependencies by running `npm install`
3. Create a CONTENTFUL account and create a new space
4. Create a new content model with the following fields:
    - Title (Short text)
    - Description (Long text)
    - Image (Media)
5. Add some content to the content model
6. Get the space ID, access token, and preview access token from the settings page 
7. Create a `.env.local` file in the root directory and add the following environment variables:
``` CONTENTFUL_SPACE_ID```
``` CONTENTFUL_ACCESS_TOKEN```
``` CONTENTFUL_PREVIEW_ACCESS_TOKEN```
8. Run the project by running `npm run dev`
        
        
        

