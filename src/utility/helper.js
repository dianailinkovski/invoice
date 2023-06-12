export const months = ['janeiro', 'fevereiro', 'março', 'abril' ,'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

export function getPortugeDate(date_due) {
    const date_array = date_due.split('/');
    return date_array[0] + ' de ' + months[parseInt(date_array[1]) - 1];
}

export function getPortugeMonth(date) {
    const date_array = date.split('/');
    return months[parseInt(date_array[1]) - 1];
}

export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    
    return `${date} / ${months[month]} ${year}`;
}

export function getPortugeDigit(digit)
{
    const number = parseFloat(digit).toLocaleString("de-DE");
    return number;
}
export function getLocalStorage()
{
    let storage = {};
    storage['CNF'] = localStorage.getItem('CNF');
    storage['invoice'] = localStorage.getItem('invoice');

    return storage;
}

export function setLocalStorageCNF(CNF)
{
    localStorage.setItem('CNF', CNF);
}

export function setLocalStorageInvoice(invoice)
{
    localStorage.setItem('invoice', invoice);
}

export function clearLocalStorage()
{
    localStorage.removeItem('CNF');
    localStorage.removeItem('invoice');
}
