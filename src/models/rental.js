const book_controller = require("../controllers/book.js")
const student_controller = require("../controllers/student.js")

let nextId = 1


const model = (body, id = nextId++) => {
console.log(body);
    if (
        body.data_aluguel != "" &&
        body.data_devolucao != "" 
    ) {
        return {
            id,
            book_id: body.book_id,
            student_id: body.student_id,
            data_aluguel: body.data_aluguel,
            data_devolucao: body.data_devolucao
        }
    }
}

module.exports = model