const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0
const date1 = new Date('Dec 26, 2021')
daysToXmas(date1) // -1
const date2 = new Date('Dec 31, 2021')
daysToXmas(date2) // -6
const date3 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date3) // -7
const date4 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date4) // -7


function daysToXmas(date)
{
    let año = date.getFullYear();
    let dia = date.getDate();
    let mes = date.getMonth();
    let fecha = new Date(año, mes, dia);
    const navidad = new Date('Dec 25, 2021');
    let msToNavidad = navidad - fecha;
    let dias = msToNavidad/8.64e+7;
    return Math.round(dias);
}

console.log(daysToXmas(date))
console.log(daysToXmas(date1))
console.log(daysToXmas(date2))
console.log(daysToXmas(date3))
console.log(daysToXmas(date4))