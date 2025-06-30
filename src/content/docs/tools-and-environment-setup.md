---
title: Tools and Environment Setup
description: Recommended tools and environment setup tips to help you test and interact with the uniR API efficiently.
---

To get the most out of the uniR API, we recommend using the following tools and setting up your environment for smooth
development and testing.

## Recommended Tools

### PostMan
A popular API client that lets you build, test, and document your API requests with an easy-to-use interface.  
[Download Postman](https://www.postman.com/downloads/)

### cURL
A command-line tool for making HTTP requests, perfect for quick tests or scripting API calls.  
Example usage:  
```http request title="bash" frame="terminal"
curl -X GET "https://api.unir.systems/v1/students" \
    -H "Authorization: Bearer YOUR_API_KEY"
```

### HttpPie
A user-friendly command-line HTTP client with a simpler syntax than curl.
[Learn more](https://httpie.io/docs)

## Environment Setup Tips

- Store your API keys securely — avoid hardcoding keys in your source code. Use environment variables or secure vaults. 
- Use HTTPS for all requests to ensure your data and credentials are encrypted. 
- Set up a REST client in your IDE if supported, for faster development. 
- Enable JSON formatting and syntax highlighting in your tools for better readability.

## Additional Recommendations
- If you plan to automate API calls, use SDKs or HTTP libraries available for your programming language.
- Keep an eye on your API usage limits to avoid unexpected rate limiting.