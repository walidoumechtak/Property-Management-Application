FROM node:20

# Set working directory
WORKDIR /app/backend

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

RUN npm install -g @nestjs/cli

RUN npm cache clean --force

# Install dependencies
RUN npm install --no-package-lock


# Copy the rest of the application code
COPY . .

RUN npx prisma generate


# Expose the port number the app runs on
EXPOSE 3000

# Start NestJS app in development mode
CMD ["npm", "run", "start:dev"]
