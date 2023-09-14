#!/bin/sh

set -e

until nc -z "${DB_HOST:-db}" "${DB_PORT:-5432}"; do
  echo "Waiting for database (${DB_HOST:-db}:${DB_PORT:-5432})"
  sleep 2
done

python manage.py migrate
exec "$@"
