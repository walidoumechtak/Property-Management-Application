# Use Node.js LTS version
FROM node:20

# Set working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm cache clean --force

# Install dependencies
RUN npm install --no-package-lock


# Copy the rest of the application code
COPY . .

# Expose the port number the app runs on
EXPOSE 3002

# Start Vite server in development mode
CMD ["npm", "run", "dev", "--", "--host"]
