# Guía de inicio rápido: Docker Compose con Django, MySql y React por Mario Medina

Esta guía de inicio rápido demuestra cómo utilizar un control Multiselect en React. Antes de empezar, [instala Compose](https://docs.docker.com/compose/install/).

![Alt text](ejemplo.png)


### Software utilizado

```
Mysql==8
Django==4.1.5
node==18.3
react===18.2.0
react-select===5.7.0
```

## Deploy con docker compose

```
$ docker compose up -d
```

## Resultados esperados

La lista de contenedores debe mostrar tres contenedores en ejecución y la asignación de puertos como se muestra a continuación:
```
$ docker ps
CONTAINER ID   IMAGE                           COMMAND                  CREATED          STATUS                    PORTS                               NAMES
85701f66ccf8   react_django_mysql01-frontend   "docker-entrypoint.s…"   3 minutes ago    Up 10 minutes             0.0.0.0:3000->3000/tcp              docker_react
68f7e15d4d9e   react_django_mysql01-web        "bash -c 'python3 ma…"   3 minutes ago    Up 10 minutes             0.0.0.0:8085->8000/tcp              docker_django
87b16828263a   mysql:8                         "docker-entrypoint.s…"   3 minutes ago    Up 11 minutes (healthy)   33060/tcp, 0.0.0.0:3308->3306/tcp   docker_db
```

Luego vaya a `http://localhost:3000/` en su navegador web.