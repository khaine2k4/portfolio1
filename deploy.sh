#!/usr/bin/env bash
set -euo pipefail

# Deploy the portfolio site: build a fresh image, then replace the container.
# Usage (from WSL):  ./deploy.sh

IMAGE="portfolio:latest"
CONTAINER="portfolio"
NETWORK="go-exe_goexe-net"
PORT="3333"

# Always run from the script directory so it works no matter where it is called.
cd "$(dirname "$0")"

echo "==> Building image ${IMAGE}..."
docker build -t "${IMAGE}" .

# Remove the old container if it exists (does not fail on first deploy).
echo "==> Removing old container (if any)..."
docker rm -f "${CONTAINER}" 2>/dev/null || true

echo "==> Starting new container..."
docker run -d \
  --name "${CONTAINER}" \
  --restart unless-stopped \
  --network "${NETWORK}" \
  -p "${PORT}:${PORT}" \
  "${IMAGE}"

echo "==> Done. ${CONTAINER} is live on port ${PORT}."
docker ps --filter "name=${CONTAINER}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
