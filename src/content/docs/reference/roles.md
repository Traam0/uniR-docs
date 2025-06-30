---
title: Roles
description: Definitions of user roles within uniR and explanation of role-based access control (RBAC) with elevation level control.
---

User roles represent the primary classification of users within the university management system. Roles define base-level access permissions and system capabilities. For finer access control, roles are combined with granular permissions.

---

## Role Definitions

| Role    | Description                                                                                  | Notes                                                                                             |
|---------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Student** | Registered student user with access to student-facing features.                            | Cannot access administrative functions or other students’ data.                                 |
| **Teacher** | Teaching faculty member with course management capabilities.                              | Inherits all Student permissions where applicable.                                              |
| **Staff**   | Administrative or support staff with system management capabilities.                      | Permissions should be combined with department-specific permissions (Registrar, HR, IT, etc.).  |

---

## RBAC Elevation Level Control

In addition to role assignments, uniR enforces **elevation level control** in RBAC. This means:

- Having permission to perform an action is necessary but not always sufficient.
- The elevation level determines **which users or resources** you can apply that action to.
- For example, a Staff member with permission to edit users may only modify accounts with an equal or lower elevation level, preventing unauthorized changes to higher-privilege users.

This ensures hierarchical security and prevents privilege escalation within your institution.

---

Use this role and elevation model alongside permissions to build a secure and flexible access control system in uniR.

