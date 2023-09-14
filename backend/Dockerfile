# Use an official Python runtime as a parent image
FROM python:3.11-buster

# Set environment variables for Python
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Set the working directory inside the container
WORKDIR /app

# Copy the Python dependencies file to the working directory
COPY pyproject.toml poetry.lock /app/

# Install Poetry
RUN pip install poetry gunicorn

# Install project dependencies using Poetry
RUN poetry config virtualenvs.create false && poetry install --no-interaction --no-ansi
RUN apt-get update && apt-get install -y netcat-traditional && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the Django project source code into the container
COPY . /app/

ENTRYPOINT ["./entrypoint.sh"]
# Define the command to run your application with Gunicorn
CMD gunicorn --bind 0.0.0.0:8000 recruitment.wsgi:application

