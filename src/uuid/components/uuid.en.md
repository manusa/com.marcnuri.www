_Use these UUIDs at your own risk, their uniqueness is not guaranteed._

## About
This is an online tool to generate UUID / GUID.
UUID/GUID comes from the acronym Universally/Globally Unique Identifier,
which is a 128-bit number used to identify information in computer systems.

You can check the sourcecode for the project at:

[Front-End (Gatsby static site)](https://github.com/manusa/com.marcnuri.www)

[Back-End (microservice)](https://github.com/manusa/com.marcnuri.uuid)

## What's a version 4 UUID?
Version 4 UUIDs use random numbers for its generation (except for 6 bits reserved for variant and version).
Versions 1, 2, 3 and 5 are not completely random and use information such as MAC address and date-time (1/2)
or namespace (3/5) for its generation.

This application uses the method `randomUUID()` of the java 
[`java.util.UUID`](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html) class.
The generated keys are type 4 pseudo randomly generated UUIDs. The Java implementation 
uses [`java.security.SecureRandom`](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)
that uses an unpredictable value as the seed in order to comply with
[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt) making its output strong and lowering the chances 
of collisions.

## What's the difference between GUID and UUID?
Both terms refer to the same technical concept published in the 
[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) specification.

In general, the term GUID is most used across developers using Microsoft technologies.

## More information
[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt)

[java.util.UUID](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html)

[java.security.SecureRandom](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)

[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt)

[Wikipedia article](https://en.wikipedia.org/wiki/Universally_unique_identifier)
