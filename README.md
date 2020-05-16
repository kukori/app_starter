## First you need to set up config.env in the config directory.

```javascript
NODE_ENV=development
PORT=5000

MONGO_URI=

FILE_UPLOAD_PATH=./public/uploads
MAX_FILE_UPLOAD=1000000

JWT_SECRET=
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

SMTP_HOST=
SMTP_PORT=
SMTP_EMAIL=
SMTP_PASSWORD=
FROM_EMAIL=
FROM_NAME=
```

## Available Scripts

In the project directory, you can run:

### `npm run clientinstall`

Installs the client dependencies.

### `npm run dev`

Runs the app in the development mode and the API on port 5000.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
