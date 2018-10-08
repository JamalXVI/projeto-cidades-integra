# Cities project ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)
An angular 6 and Spring boot application
# ENGLISH
## Installation

### Requirements
*JDK
*A database (oracle if possible)
*Angular Cli installed (if you pretend to change the front-end)
*Maven

## CONFIGURING
if you pretend to change the database you might change the file application.properties

```
#Basic Spring Boot Config for Oracle
spring.datasource.url= jdbc:oracle:thin:@//localhost:1521/XE
spring.datasource.username=PROJETOCIDADE
spring.datasource.password=SENHA
spring.datasource.driver-class-name=oracle.jdbc.OracleDriver
spring.jpa.database-platform=org.hibernate.dialect.Oracle12cDialect
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

# PORTUGUÊS
## Instalação

### Requirimentos
*JDK
*A database (Oracle, se possível)
*Angular Cli installed (Se você deseja mudar o front-end)
*Maven

## Configuração
Se você deseja mudar a database você talvez deva mudar as configurações em application.properties

```
#Basic Spring Boot Config for Oracle
spring.datasource.url= jdbc:oracle:thin:@//localhost:1521/XE
spring.datasource.username=PROJETOCIDADE
spring.datasource.password=SENHA
spring.datasource.driver-class-name=oracle.jdbc.OracleDriver
spring.jpa.database-platform=org.hibernate.dialect.Oracle12cDialect
```

## Contribuindo
Sintam-se a vontade para contribuir com o projeto

## License
[MIT](https://choosealicense.com/licenses/mit/)
