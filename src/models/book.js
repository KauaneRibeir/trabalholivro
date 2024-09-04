let proxId = 1;

const model = (body, id = proxId++) => {
    console.log(body);
    if(
        body.titulo != undefined &&
        body.autor != undefined &&
        body.genero != undefined &&
        // !isNaN(body.ano)&&
        body.titulo != "" &&
        body.autor != "" &&
        body.genero != "" 
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
    }
}

module.exports = model