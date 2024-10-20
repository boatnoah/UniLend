# UniLend

UniLend is a peer-to-peer lending platform designed specifically for university students. It allows students to lend and borrow items easily within their university community.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Item listing and browsing
- Image upload for item listings
- Borrowing request system
- User ratings and reviews
- Responsive design for desktop and mobile use

## Tech Stack

- Frontend: React.js with Next.js
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: JWT
- Styling: Tailwind CSS
- Image Storage: AWS S3
- Deployment: Vercel

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL
- AWS account (for S3 bucket)

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/unilend.git
   cd unilend
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add the following:

   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   S3_BUCKET_NAME=your_s3_bucket_name
   ```

4. Set up the database

   ```
   psql -U your_database_user -d your_database_name -f schema.sql
   ```

5. Run the development server
   ```
   npm run dev
   ```

## Usage

After starting the development server, you can access the application at `http://localhost:3000`.

To use UniLend:

1. Sign up for an account
2. Browse available items or list an item for lending
3. Request to borrow an item or respond to borrowing requests
4. After a lending/borrowing experience, leave a review for the other user

## API Endpoints

- `POST /api/auth/signup`: Create a new user account
- `POST /api/auth/login`: Log in to an existing account
- `GET /api/items`: Retrieve all items
- `POST /api/items`: Create a new item listing
- `GET /api/items/:id`: Retrieve a specific item
- `PUT /api/items/:id`: Update an item listing
- `DELETE /api/items/:id`: Delete an item listing
- `POST /api/requests`: Create a new borrowing request
- `GET /api/requests`: Retrieve all requests for the logged-in user
- `PUT /api/requests/:id`: Update a request status

## Contributing

We welcome contributions to UniLend! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/unilend](https://github.com/yourusername/unilend)
