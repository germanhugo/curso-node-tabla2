const { error } = require('console');
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = true, hasta=10) => {

    try{
        let salida, consola = '';
                
        for(let i = 1; i <= hasta; i++){
            
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`);
        }
        
        
        if(listar){
            console.log(colors.green(`=============================\n        Tabla del ${base}            \n=============================`));
        
            

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );

        return(`tabla-${base}.txt creado`);
    }catch(err){
        throw(err);
    }
    
}

module.exports = {
    crearArchivo
}