const data = new Date('1-1-1970 12:58:20');

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new ReferenceError('Preciso de uma instance de Date');
    }

    if(!data) {
        data = new Date;
    }

    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    });
} 

const hora = retornaHora(data);
console.log(hora);