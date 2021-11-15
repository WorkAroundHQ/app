# Security

In the development process of WorkAround, we try to implement a as secure system as possible.

## Architecture Overview

![WorkAround-Threat-Model](https://user-images.githubusercontent.com/28442090/141773605-18deb518-b01a-42eb-88b0-ee09fb4ff0ed.jpg)

## Threat Model

### Weak Credentials

_Users can create weak passwords for their authentication._

Protection:

- Users can't create passwords shorter than 12 characters.

### No Session Timeout

_The session created after a user login has no reasonable timeout duration._

Protection:

- Sessions timeout after 1 hour.

### SQL Injection

_An attacker could inject malicious SQL statements to retrieve sensitive data._

Protection:

- Use of client library to not directly write SQL statements (ORM-like behavior).

### Dependency Vulnerablities

_Dependencies used by the application are vulnerable for misuse by an attacker._

Detection:

- GitHub Dependabot alerts when a dependency has known security vulnerabilities.

Protection:

- Update vulnerable dependencies to secure version.

### Poor handling of secrets

_Secrets are stored in plain text in VCS or can be read by malicious processes, like CI/CD._

Protection:

- Secrets aren't stored in the VCS.

- CI/CD Pipelines can just access repository secrets through an authorized user.

- CI/CD Pipelines can't expose secrets through GitHubs policies.

- Forks don't have access to repository secrets.

### Verbose error messages

_Error messages give too much information about the business logic of an application which can be used by an attacker._

Protection:

- Error messages shown to the user do not expose business logic which could help to attack the system.

- Auth related error message don't expose if the email or the password was wrong at a login try.

### Broken Access Control

_User can access data they should have no access to._

Detection:

- `OPEN`: Log database actions

Protection:

- Through the use of Postgres Policies users can't access data they should not access.

### Fails to prevent clickjacking

_An attacker could implement an iframe with the application on another website to hijack users credentials or to perform actions in their names._

Protection:

- Through the Content-Security-Policy directive `frame-ancestors 'none';` the application can't be embedded in another website.

### CSP configuration

_An attacker can inject malicious code through a loosely configured CSP._

Protection:

- `WIP`: A deny-by-default policy restricts executable sources to a minimum.
