FROM python:3.11-alpine 

ENV PYTHONUNFERRRED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /code

COPY requirements.txt /code/

RUN pip install -r requirements.txt

COPY . /code/ 

