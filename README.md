# Repos-Search

Welcome to Repos-Search! This is a mini clone version of GitHub's advanced search feature, allowing you to search for repositories using GitHub's search API.

## Description

Repos-Search is a web application designed to replicate a simplified version of GitHub's repository search functionality. It leverages GitHub's search API to retrieve repositories based on user-specified parameters.

Key Features:
1. Accepts user-defined parameters for more refined searches.
2. Utilizes GitHub's search API to fetch repository data. 
3. Implements EJS as the string template for rendering dynamic content.
4. Employs Express for route handling and serving the application.

**Note:** GitHub's search API limits the number of repositories returned in a single request to 30 repositories. Unfortunately, there is currently no straightforward way to increase this limit through the API. 

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/Repos-Search.git
   ```
   Or you can create a codespace or simply download the repo.
   <br>
2. After cloning or creating a codespace run the following command to install all dependencies:
   ```bash
   npm install
   ```
3. Then You can simply run the server by using:
   ```bash
   npm start
   ```
## Issues
If you encounter any problems or have questions, please open an [issue](https://github.com/SatyamSakpal/Repos-Search/issues).
