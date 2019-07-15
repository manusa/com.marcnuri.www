_La unícidad de las claves que aquí se proporcionan no está garantizada, usálo bajo tu responsabilidad._

## Acerca de...
Esta aplicación es un generador de claves únicas UUID/GUID.
Un UUID es un identificador único global/universal, que es un número de 128 bits empleado
en sistemas de computación para identificar información.

El código fuente de este proyecto está disponible en:

[Front-End (Página estática generada con Gatsby)](https://github.com/manusa/com.marcnuri.www)

[Back-End (microservicio)](https://github.com/manusa/com.marcnuri.uuid)

## ¿Qué es un UUID versión 4?
Los UUIDs de versión 4 emplean números aleatorios apra su generación (excepto 6 birs reservados para 
la variante y la versión). Las versiones 1, 2, 3 y 5 no son completamente aleatoriasy emplean información como
la dirección MAC y la fecha-hora (1/2) o el namespace (3/5) para su generación.

Esta aplicación utiliza el método `randomUUID()` de la clase de java 
[`java.util.UUID`](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html).
Las claves generadas son de tipo 4. La implementación Java utiliza 
[`java.security.SecureRandom`](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)
que emplea un valor impredecible como semilla de para cumplir con 
[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt) haciendo que su salida sea criptográficamente fuerte
y minimizando las probabilidades de obtener una colisión.

## ¿Cuál es la diferencia entre GUID y UUID?
Ambos términos se refieren al mismo concepto técnico publicado en la especificación 
[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt).

En general, el término GUID se emplea más entre los desarrolladores que trabajan con tecnologías
Microsoft.

## Más información
[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt)

[java.util.UUID](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html)

[java.security.SecureRandom](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)

[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt)

[Artículo en Wikipedia](https://es.wikipedia.org/wiki/Universally_unique_identifier)
