import fastify from "fastify";

const app = fastify()

app.get('/',() => {
    return "Hello NLW UNITE "
})

app.listen({port: 3333}).then(() => {
    console.log('HTTP Server running!')
})