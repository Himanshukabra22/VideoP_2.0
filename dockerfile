# # Use Ubuntu as the base image
# FROM ubuntu:latest

# # Set environment variables
# ENV DEBIAN_FRONTEND="noninteractive"
# ENV MONGO_URI="mongodb://localhost:27017"
# ENV PORT=3000

# # Install necessary packages
# RUN apt-get update && apt-get install -y \
#     curl \
#     build-essential \
#     redis-server \
#     ffmpeg

# # Install Node.js
# RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
# RUN apt-get install -y nodejs

# # Create app directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json (if exists) to the app directory
# COPY package*.json ./

# # Install app dependencies
# RUN npm ci --only=production

# # Copy the rest of the application files to the app directory
# COPY . .

# # Expose the necessary ports
# EXPOSE 3000

# # Start Redis server and the application
# CMD redis-server --daemonize yes && npm start

# Use Ubuntu as the base image
FROM ubuntu:latest

# Set environment variables
ENV DEBIAN_FRONTEND="noninteractive"
ENV MONGO_URI="mongodb://localhost:27017"
ENV PORT=3000

# Install necessary packages
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    build-essential \
    redis-server \
    ffmpeg

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists) to the app directory
COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production

# Copy the rest of the application files to the app directory
COPY . .

# Expose the necessary ports
EXPOSE 3000

# Start Redis server and the application
CMD redis-server --daemonize yes && npm start

# Add a volume for /output_files directory
VOLUME ["/usr/src/app/output_files"]


