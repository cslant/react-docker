# Docker for React

## For development

First, update the **APP_CONTAINER_NAME** and **APP_PORT** variables in the .env file if you want to change the container name and the port number.

```bash
cp .env.example .env
```

And change variables. Example:

```dotenv
APP_CONTAINER_NAME=react-app
APP_PORT=3001
```

Then, run the following command to start the development server:

```bash
docker compose up -d
```

Now, you can access the development server at http://localhost:3001.

## For production

First, update the **APP_CONTAINER_NAME** and **APP_PORT** variables in the .env file if you want to change the container name and the port number.

```bash
cp .env.example .env
```

And change variables. Example:

```dotenv
APP_CONTAINER_NAME=react-app-prod
PROD_APP_PORT=85
```

Then, run the following command to build the production image:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

Now, you can access the production server at http://localhost:85.

> Note:
> Every time you change the source code, you need to rebuild the image by running the above command again.
