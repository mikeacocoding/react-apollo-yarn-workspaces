# Ejemplo de Mono Repos con React y Apollo Server

Este proyecto es producto del video => [Yarn Workspaces con React Apollo](https://www.youtube.com/watch?v=G8KXFWftCg0)

Se compone de:

- commons (paquete compartido)
- server (Server)
- web (FrontEnd)

Básicamente usamos Apollo Server como back, y React en el Front,
el proyecto usa monorepos, y el paquete common (@monorepos/common), se usa para validar un esquema, por lo que tanto el front como el back
usan este monorepo.
