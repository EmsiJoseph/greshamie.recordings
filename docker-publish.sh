#!/bin/bash

# Set version
VERSION=1.1.0

# Login to Docker Hub (you'll need to do this first)
# docker login

# Build images with version tag and latest
docker compose build

# Tag images with version
docker tag mcagbanlog/gresham-recordings-frontend:latest mcagbanlog/gresham-recordings-frontend:$VERSION
docker tag mcagbanlog/gresham-recordings-backend:latest mcagbanlog/gresham-recordings-backend:$VERSION

# Push all images
docker push mcagbanlog/gresham-recordings-frontend:latest
docker push mcagbanlog/gresham-recordings-frontend:$VERSION
docker push mcagbanlog/gresham-recordings-backend:latest
docker push mcagbanlog/gresham-recordings-backend:$VERSION
