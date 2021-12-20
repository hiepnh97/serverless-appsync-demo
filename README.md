# Book Store API

## Overview
- Only admins can add books to the store
- Logged in users can list books from
- Logged in users can view detail of a books
- Logged in users can place orders

## Steps:
- Provisioning AWS resources (Infrastructure as Code)
    - Create two DynamoDB tables to store books and orders
    - Create a cognito user pool to store the users
    - Create two user groups e.e: Admin, Customer
    - Create IAM Role for the admin users
- Design the GraphQL Schema
- Configure cognito user group base authorization for GraphQL fields
- Testing the API
- Attaching a frontend to consumer the API

## Step 1: Install package + define resources serverless + deploy resources
-- Instlal Nodejs
-- Install Serverless framework
```
npm install -g serverless
```
-- Go to `backend` folder
```
serverless deploy
```


