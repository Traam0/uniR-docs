---
title: Security
description: Manage authentication, authorization, and role-based access for your institution using the uniR API.
---

The **Security** section of the uniR API helps your institution manage **authentication** and **authorization** for all users and applications.

It enables you to control *who* can access your systems and *what* they can do, supporting secure, role-based access at scale.

---
    
uniR's security model is designed for multi-institution use, with two levels of authentication and flexible access control:

- **API Key Authentication** – Required for all server-to-server requests. Identifies and authorizes your institution to use the uniR API.
- **User Authentication** – Allows your users (students, teachers, staff) to securely log in to your apps and receive personal access tokens for accessing their own data.
- **Role-Based Access Control (RBAC)** – Define reusable roles (e.g., “Student”, “Teacher”) with standard sets of permissions for consistent access levels.
- **Permission-Based Access Control (PBAC)** – Assign fine-grained permissions to staff, enabling more specific control over actions like managing users or editing groups.

---

## Typical Use Cases

- Students logging in to view timetables, grades, and notifications.
- Teachers accessing schedules and course management tools.
- Staff with administrative roles needing controlled access to user management, academic programs, or group assignments.
- Institutions defining custom roles and permission sets to match their organizational policies.

---

## How It Works

1. **Institution Authentication**: All API calls must include your institution's API key to identify and scope requests to your data.
2. **User Login**: Your app authenticates users (students, teachers, staff) via the login endpoint, issuing personal access tokens.
3. **Access Tokens**: User access tokens are used in requests to authorize access to personalized resources.
4. **Roles and Permissions**: Define and manage roles or direct permissions to control what users can do in your system.



## Best Practices

- **Secure Your API Key**: Treat your institution's API key like a password. Store it securely and rotate it regularly.
- **Use Short-Lived User Tokens**: Keep user access tokens short-lived for better security. Implement refresh flows if needed.
- **Plan Roles and Permissions Carefully**: Define roles and permissions to reflect your institution’s policies and avoid over-permissioned users.
- **Audit Access Regularly**: Review who has which roles and permissions to maintain security and compliance.

