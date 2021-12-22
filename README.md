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

## Usage
### Tenology Stack
- Nodejs - JavaScript
- GraphQL
- AWS Account
- [Amplify](https://docs.amplify.aws/)

### Setup
-- Install Serverless framework
```
npm install -g serverless
```
-- Install Amplify framework
```
npm install -g @aws-amplify/cli
```
```
amplify configure
```

-- Install plugin
```
yarn add serverless-appsync-plugin
```

-- Go to `backend` folder
```
serverless deploy
```


# Reference
- [AWS CloudFormation Resoruces](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)
- [Template Resolver](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-dynamodb.html)
- 
