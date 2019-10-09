# OKTOBERTEST

O conteúdo desse repositório é destinado aos frontends do PB Tech.

O objetivo é ensinar e aprender sobre boas práticas na codificação de testes.

## Por que escrever testes?

1. Para termos mais confiança no que desenvolvemos
2. Para garantir a integridade, qualidade e funcionalidade do que desenvolvemos
3. Pra garantir que as coisas continuem funcionando
4. Ajuda a pensar em diferentes cenários

## Para quem escrevemos os testes?

1. Para nossos clientes

Isso significa que nossos testes devem ser escritos de modo semelhante a como os nossos clientes utilizam nossa aplicação. Clica aqui, digita lá, aperta ali.

2. Para os desenvolvedores

Os desenvolvedores são aqueles que consomem nossos componentes. Um teste bem escrito é a melhor documentação que podemos oferecer. Quer saber como consumir tal componente? Confira seus testes. Quer saber se tal componente atende aos seus requisitos? Confira seus testes.

## Quais tipos de testes fazem mais sentido para nós frontends?

1. Unitário

Tem por objetivo garantir que uma unidade funciona isoladamente.

2. Integração

Tem por objetivo garantir que várias unidades funcionam corretamente em harmonia.

## O que é importante testarmos?

1. Regras de negócio
2. Interações que esperamos que nossos usuários façam
3. Interações que, caso nossos usuários façam, não causem um resultado inesperado
4. Conferir se os erros esperados e inesperados estão tratados corretamente

## Em que momento devemos criar nossos testes?

1. Antes da implementação (TDD)
2. Depois da implementação
3. Tanto faz, desde que tenham testes?

## Que ferramentas utilizamos?

1. @testing-library/react
2. jest
