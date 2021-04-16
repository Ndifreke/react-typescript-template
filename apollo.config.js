module.exports = {
    outputFlat:true,
    client:{
        outputFlat:true,
        localSchemaFile: ['schema.graphql'],
        includes:['src/**/*.tsx', 'src/**/*.ts'],
        exclude: ['src/generated'],
        target: 'typescript',
        service:{
            name:'Cadawada',
            // url:'/',
            skipSSLValidation: true,
            localSchemaFile: './schema.graphql',
        }
    },
    // service: {
    //     endpoint: {
    //       url: 'https://api.github.com/graphql',
    //       headers: {
    //         authorization: ''
    //       },
    //       skipSSLValidation: true 
    //     }
    //   }
}

 // "codegen":"apollo client:codegen --target typescript --localSchemaFile schema.graphql --outputFlat --inlcudes src/**/*.{ts,tsx} --exclude src/generated src/generated"
