# First stage: Node base image
FROM node:latest AS node_base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Second stage: Final image
FROM node_base AS app

# Set the working directory
WORKDIR /app

# Copy the Node.js file
COPY node.js ./

# Copy the public folder
COPY public/ ./public/

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
