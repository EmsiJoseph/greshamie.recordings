#!/bin/bash

VERSION=1.1.0

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
