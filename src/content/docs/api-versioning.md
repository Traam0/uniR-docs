---
title: API Versioning
description: Understand how uniR API versions its endpoints and how to use the versioned base URLs.
---

The uniR API uses Semantic Versioning to manage changes and improvements. All API requests are made to a versioned base
URL to ensure stability and backward compatibility. 

## Current Version
- The current stable version of the API is **v1**.
- All endpoints are prefixed with `/v1/` in the URL.
- Example: `https:api.unir.systems/v1/ping`

## Why Versioning Matters

- It allows us to introduce new features and fix bugs without breaking existing client integrations.
- When a new major version is released (e.g., v2), you can continue using v1 until you are ready to upgrade.

## Upgrading Versions

- We will announce major version changes in the documentation and provide migration guides.
- Minor and patch versions (e.g., v1.1, v1.2) include backward-compatible improvements and bug fixes.