# smartfan-api

REST API for smart fan project. More details [here](https://www.hackster.io/jmlopezdona/smart-fan-bike-trainer-4afa76).

# Use

It's used [Serverless Framework](https://serverless.com) to generate, deploy and update function in AWS Lambda and API Gateway.

## Prerequisites

[Serverless Quick Start Pre-requisites](https://serverless.com/framework/docs/providers/aws/guide/quick-start)

```npm install -g serverless```

```npm install```

## Main commands

### Install service

```serverless deploy -v```

### Update generateEPG function

```serverless deploy function -f sendMQTT```

### Invoke generateEPG function and view logs

```serverless invoke -f sendMQTT -l```

### View logs

```serverless logs -f sendMQTT -t```

### Remove all resources create for the service in AWS

```serverless remove```