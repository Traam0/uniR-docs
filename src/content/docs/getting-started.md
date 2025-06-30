---
title: Getting Started
description: Learn how to quickly start using the uniR API with authentication, first requests, and basic concepts.
---

Welcome to the uniR API! This API enables developers to manage university data including students, programs, roles, and
more. Whether you want to build integrations, automate workflows, or create custom applications, this documentation will
guide you through the basics to get started quickly.

## Prerequisites

Before you begin, make sure you have:

- An active uniR account with API access
- Your API key or authentication token
- Basic knowledge of REST APIs and JSON
- A tool to make HTTP requests (e.g., curl, Postman, or your preferred HTTP client)

---

## Authentication

The uniR API uses tokens for authentication. Include your API key or JWT token in the `x-api-key` header for all
requests.

```http request title="header"
x-api-key: YOUR_API_KEY
```

## Base URL

All API requests are made to the base URL:
[https://api.unir.systems/v1/](https://api.unir.systems/v1/)

## Quick Test Call

Test that everything works with a simple ping:

```http request title="bash" frame="terminal"
curl -H "x-api-key": "YOUR_API_KEY" \
    https://api.unir.systems/v1/ping
```

**Response Overview**

- **Success:**\
  If the API key is valid, the server responds with HTTP status 200 OK and the following JSON:
    ```json title="200OK"
    {
      "status": "ok"
    }
    ```
- **Error:**
    - If the API key is missing, the server responds with HTTP status `401Unauthorized` and a message indicating the API
      key is missing.
    - If the API key is invalid, the server responds with HTTP status `401Unauthorized` and a message indicating the API
      key is invalid.

  ```json title="401Unauthorized"
      {
        "message": "string"    
      }
  ```

## Next Steps

After completing these basics, explore the Guides for practical tutorials or jump to the [Endpoints Reference](#) to learn
about all available API operations in detail.
