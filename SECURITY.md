# Security

In the development process of WorkAround, we try to implement a as secure system as possible.

## Architecture Overview

![WorkAround-Threat-Model](https://user-images.githubusercontent.com/28442090/141773605-18deb518-b01a-42eb-88b0-ee09fb4ff0ed.jpg)

## Threat Model

### Weak Credentials

_Users can create weak passwords for their authentication._

### No Session Timeout

_The session created after a user login has no reasonable timeout duration._

expires after 1 hour

### SQL Injection

_An attacker could inject malicious SQL statements to retrieve sensitive data._

### Dependency Vulnerablities

_Dependencies used by the application are vulnerable for misuse by an attacker._

### Insufficient Logging

_Interactions with the database aren't logged at all or not enough._

### Poor handling of secrets

_Secrets are stored in plain text in VCS or can be read by malicious processes, like CI/CD._

### Verbose error messages

_Error messages give too much information about the business logic of an application which can be used by an attacker._

### Broken Access Control

_User can access data they should have no access to._

### Fails to prevent clickjacking

_An attacker could implement an iframe with the application on another website to hijack users credentials or to perform actions in their names._

### CSP configuration

_An attacker can inject malicious code through a loosely configured CSP._
