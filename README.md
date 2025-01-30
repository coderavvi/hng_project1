# HNG BACKEND DEVS LEVEL 0 PROJECT: Simple API
## Description
This is a simple API that returns a JSON response containing an email address, current datetime, and the githu url of the project's repo.

## Setup Instructions
### Prerequisites
To run this project on a local device, make sure the following are installed
- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- npm (npm comes with Node.js)
### Installation
- Clone the repository
```
git clone https://github.com/hng_project1.git
```
- Navigate to the Directory
```
cd hng_project1
```
- Install dependencies
```
npm install
```
- Start the server
```
node index.js
```
The server will start on `http://localhost:3000/` by default.

## API Documentation
### Endpoint
- Local development URL: `http://localhost:3000/`
- Production URL: `https://hng-api-coderavvi.vercel.app/`
### Request format
- method  `GET`
- headers `none`
- body `none`
### Response format
```JSON
  {
    "email": "iamtabson@gmail.com",
    "current_datetime": "2025-01-30T11:21:01.529Z",
    "github_url": "<https://github.com/coderavvi/hng_project1.git>"
  }
```
### Example Usage
Using JavaScript
```js
app.get("/", async (req, res) => {
  const response = await axios.get("https://hng-api-coderavvi.vercel.app/");
  console.log(response.data);
});

```
## Find and Hire Elite NodeJs Developers
- https://hng.tech/hire/nodejs-developers

  
## Author
coderavvi
