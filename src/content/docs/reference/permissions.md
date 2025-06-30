---
title: Permissions
description: A comprehensive reference of all application permissions used in uniR, organized by functional areas.
---

The following permissions define access controls for different parts of the uniR system. They are organized by
functional area and specify what actions users can perform.

## Authentication Permissions

| Permission                                           | Description                                                  |
|------------------------------------------------------|--------------------------------------------------------------|
| `Permissions.Authentication_Login`                   | Permission to log in to the system (authenticate).           |
| `Permissions.Authentication.ChangeOwnPassword`       | Permission to change one’s own password when authenticated.  |
| `Permissions.Authentication.ForceResetUserPassword`  | Permission to forcefully reset another user’s password.      |
| `Permissions.Authentication.ToggleUserAccountStatus` | Permission to enable or disable user accounts (lock/unlock). |

---

## User Management Permissions

| Permission                 | Description                                                  |
|----------------------------|--------------------------------------------------------------|
| `Permissions.Users.Read`   | Permission to view user account details (read-only).         |
| `Permissions.Users.Create` | Permission to create new user accounts (write-only).         |
| `Permissions.Users.Edit`   | Permission to modify existing user account details (update). |
| `Permissions.Users.Delete` | Permission to delete user accounts (delete-only).            |

---

## Role & Permission Management Permissions

| Permission                           | Description                                                           |
|--------------------------------------|-----------------------------------------------------------------------|
| `Permissions.Roles.Read`             | Permission to view all roles and their assigned permissions.          |
| `Permissions.Roles.Create`           | Permission to create new roles and assign initial permissions.        |
| `Permissions.Roles.Edit`             | Permission to modify existing roles (add/remove permissions, rename). |
| `Permissions.Roles.Delete`           | Permission to delete existing roles (delete-only).                    |
| `Permissions.Permissions.Read`       | Permission to view the list of all available system permissions.      |
| `Permissions.Permissions.Assignment` | Permission to assign or dismiss one or more permissions to a user.    |

---
Use these permissions to enforce permission-based access control (PBAC) layered on top of role-based access control (
RBAC), applied specifically to university staff members.
