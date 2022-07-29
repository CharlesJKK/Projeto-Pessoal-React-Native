
export const formatoData = (dateInitial) => {
    const data = new Date(dateInitial);
    const listaData = {
        minuto: data.getMinutes().toString().padStart(2, '0'),
        hora: data.getHours().toString().padStart(2, '0'),
        dia: data.getDate().toString().padStart(2, '0'),
        dia1: (data.getDate()+1).toString().padStart(2, '0'),
        mes: (data.getMonth()+1).toString().padStart(2, '0'),
        mes1: (data.getMonth()).toString().padStart(1, '0'),
        ano: data.getFullYear()
    }

    return listaData;
}