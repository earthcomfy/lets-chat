# Let's Chat

A real-time chat application. Another fun side project :)

![Screenshot from 2022-09-07 16-27-25](https://user-images.githubusercontent.com/66206865/188901222-8eefabe5-8ca2-4305-aeb3-3afa37b304b3.png)

![Screenshot from 2022-09-07 17-11-16](https://user-images.githubusercontent.com/66206865/188900580-01d0d3ca-b242-4f48-99cf-96edeeb5f1db.png)

GIFs are attached at the end.

## Technologies Used

- React and TailwindCSS for the frontend
- Firebase for authentication
- Node/Express for creating API endpoints
- MongoDB for storing chat room members and their messages
- Socket.io for making the app real-time

## Basic Features

- Users can register/login via email and password.
- Profile page where users can update their avatar and display name.
- Generate random avatars using [DiceBear API](https://avatars.dicebear.com/docs/http-api)
- Users can create a room to chat with others.
- Users can see online status.
- Search functionality.
- Chatting is real-time.
- Emoji picker is also integrated.
- Dark mode can be enabled.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies:
   - Navigate to the `frontend` directory and run `npm install`.
   - Navigate to the `server` directory and run `npm install`.
3. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing one.
   - Go to the project settings or service accounts section.
   - Click on "Generate new private key" or a similar option.
   - Save the downloaded JSON file as `serviceAccountKey.json`.
   - Place the downloaded `serviceAccountKey.json` file in the `server/config` directory.
4. Set up Environment Variables:
   - In the `frontend` directory, create a new file named `.env` based on the `.env.example` file.
   - Update the values of the environment variables in the `.env` file with your Firebase configuration details.
   - In the root directory, create a new file named `.env` based on the `.env.example` file.
   - Update the values of the environment variables in the `.env` file according to your preferences. For example, set the `PORT` variable to specify the desired port for the server and set `MONGO_URI` to your MongoDB connection URI.
5. Run the server:
   - Navigate to the `server` directory and run `npm run start`.
6. Run the client:
   - Navigate to the `frontend` directory and run `npm start`.
7. The application will be accessible at `http://localhost:3000`.

Please make sure to keep the `serviceAccountKey.json` file and sensitive information secure and not commit them to version control.

## GIFs

![chrome-capture-2022-8-7](https://user-images.githubusercontent.com/66206865/188901119-65a05b65-3c76-4c3f-92c5-042d061df8e1.gif)

![chrome-capture-2022-8-7 (1)](https://user-images.githubusercontent.com/66206865/188900841-2dfe91c2-eb78-4f70-a013-babe0124ee68.gif)

![chrome-capture-2022-8-7 (2)](https://user-images.githubusercontent.com/66206865/188900662-a120aef4-ced1-442b-98dd-ab90b4cea7b5.gif)
