This repository is pushed on docker hub.

For detailed usage instructions, environment variable configurations, and additional information, please refer to the documentation or repository associated with the [DockerHub](https://hub.docker.com/repository/docker/himanshukabra/videop_app).



Certainly! Here's an example of an overview file for the Docker image `himanshukabra/videop_app:v2` that reduces and clears noise from videos:

# DockerHub Overview: `himanshukabra/videop_app:v2`

The `himanshukabra/videop_app:v2` Docker image is a backend application specifically designed to reduce and clear noise from videos. It provides an easy-to-use RESTful API, allowing users to initiate video processing, check the processing status, and download the processed video files. This overview provides a guide on how to effectively utilize this image.

## Key Features

### Noise Reduction and Clarity Enhancement

The `himanshukabra/videop_app:v2` image includes linux ffmpeg for reducing noise and enhancing quality of videos. By utilizing this Docker image, users can significantly improve the visual quality of videos by removing unwanted noise artifacts.

### RESTful API Endpoints

The image provides the following RESTful API endpoints:

- `POST /api/jobs`: Users can initiate video processing by making a POST request to this endpoint with the JSON payload `{ "videoLink": "google drive link" }`. Replace `"google drive link"` with the actual link to the video file that needs to be processed. Upon successful submission, the API will generate a unique `JOB_CODE` that can be used to track the processing status and download the processed video.

- `GET /api/jobCheck/{JOB_CODE}`: Users can check the processing status by making a GET request to this endpoint, where `{JOB_CODE}` represents the code received after initiating the video processing. The response will include the status of the job.

- `GET /api/jobs/{JOB_CODE}`: Users can download the processed video by making a request to this endpoint, where `{JOB_CODE}` represents the code received after initiating the video processing.

### YAML for reference

  ```yaml
version: '2'
services:
  app:
    image: himanshukabra/videop_app:v2
    ports:
      - "<host_port>:<port_number>"
    environment:
      - PORT=port_number (default = 3000)
      - MONGO_URI=mongo_atlas_uri (required)
```

### Configuration

To compose the container using `himanshukabra/videop_app:v2` image, use the provided container YAML as a reference. Ensure the following configurations are correctly set:

- `host_port`: Replace this with the desired port number to access the API.

- `port_number`: Replace this with the same port number defined in the `PORT` environment variable.

- `mongo_atlas_uri`: Define the MongoDB Atlas URI to connect to the database. This is a mandatory configuration to ensure the application functions as required.

### Container compose command 
```bash
docker-compose -p my-project-name up
```

## Usage Guide

Follow these steps to utilize the `himanshukabra/videop_app:v2` image effectively:

1. Compose the Docker container using the provided container build YAML.

2. Make a POST request to the following endpoint to initiate video processing:

   ```bash
   POST http://localhost:{portnumber}/api/jobs
   Content-Type: application/json

   {
     "videoLink": "google drive link"
   }
   ```

   Replace `{portnumber}` with the appropriate port number configured in the container build YAML. Provide the actual `"google drive link"` to the video file that needs to be processed.

3. Retrieve the job status request to the following endpoint:

   ```bash
   GET http://localhost:{portnumber}/api/jobCheck/{JOB_CODE}
   ```

   Replace `{portnumber}` with the correct port number configured in the container build YAML, and `{JOB_CODE}` with the code received after initiating the video processing.

3. Download the processed video if status is 200 for jobCheck api :

   ```bash
   GET http://localhost:{portnumber}/api/jobs/{JOB_CODE}
   ```

   Replace `{portnumber}` with the correct port number configured in the container build YAML, and `{JOB_CODE}` with the code received after initiating the video processing.


## Conclusion

The `himanshukabra/videop_app:v2` Docker image is a powerful backend application that significantly improves video quality by reducing noise. With its intuitive RESTful API endpoints, users can easily initiate video processing, track job status, and download the processed video files.