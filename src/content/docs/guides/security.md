---
title: Security
description: Manage authentication, authorization, and access control for your institution using the uniR API.
---

The **Security** guide explains how to manage **authentication** and **authorization** in uniR to securely control access to your institution's data and features.

It supports scalable, multi-level access control through a combination of API keys, user tokens, roles, and permissions.

---

## Authentication and Authorization Overview

uniR’s security model includes:

- **API Key Authentication**  
  Required for all server-to-server API requests. Your institution’s API key identifies and scopes access.  
  [Learn more about API key usage](#) *(add your link here)*

- **User Authentication**  
  Enables students, teachers, and staff to log in securely and obtain personal access tokens.  
  [User login and token management](#)

- **Role-Based Access Control (RBAC)**  
  Define roles (e.g., Student, Teacher, Staff) with bundled permissions for consistent, reusable access levels.  
  [RBAC details and role presets](#)

- **Permission-Based Access Control (PBAC)**  
  Assign fine-grained permissions directly to staff members on top of RBAC for precise access control.  
  [PBAC implementation details](/reference/permissions/)

---

## Typical Use Cases

- Students accessing personal data like timetables, grades, and notifications.
- Teachers managing schedules and course content.
- Staff performing administrative tasks with controlled permissions.
- Institutions customizing roles and permissions to match organizational policies.

---

## How It Works

1. **Institution Authentication**: Include your institution’s API key with every API call to identify and authorize requests.
2. **User Login**: Authenticate users via the login endpoint to issue personal access tokens.
3. **Access Tokens**: Use these tokens in API requests to access user-specific resources securely.
4. **Roles and Permissions**: Manage wh
