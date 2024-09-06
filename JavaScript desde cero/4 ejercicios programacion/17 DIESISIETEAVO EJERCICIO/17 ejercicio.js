/*

17) Programa una función que dada una fecha 
válida determine cuantos años han pasado hasta 
el día de hoy, pe. miFuncion(new Date(1984,4,23))
 devolverá 35 años (en 2020).

*/



function calculateDays() {
    // Input with a prompt
    const firstDateInput = prompt('Introduce la fecha inicial \n (asegúrate de colocarlo en este formato DD-MM-YYYY)');
    const endDateInput = prompt('Introduce la fecha final o actual \n (asegúrate de introducirlo en este formato DD-MM-YYYY)');

    // Split the input into day, month, and year
    const [startDay, startMonth, startYear] = firstDateInput.split('-');
    const [endDay, endMonth, endYear] = endDateInput.split('-');

    console.log(firstDateInput.split('-'), endDateInput.split('-'));
    console.log(startDay, startMonth, startYear);
    console.log(endDay, endMonth, endYear);

    // Create Date objects (note the correct format for Date constructor)
    const firstDate = new Date(`${startYear}-${startMonth}-${startDay}`);
    const endDate = new Date(`${endYear}-${endMonth}-${endDay}`);

    console.log(firstDate, endDate);

    // Validate dates
    if (isNaN(firstDate.getTime()) || isNaN(endDate.getTime())) {
        console.error('Asegúrate de ingresar correctamente los datos');
        return;
    }

    // Calculate the difference in time and days
    const differenceTime = endDate.getTime() - firstDate.getTime();
    const differenceDays = differenceTime / (1000 * 3600 * 24);
    const differenceYears = endDate.getFullYear() - firstDate.getFullYear();

    // Output the results
    console.log(`Desde ${firstDateInput} a ${endDateInput} hay ${Math.round(differenceDays)} días o ${differenceYears} años de diferencia`);
}

// Call the function
calculateNowDays();


// Calcular hasta el dia de hoy 

function calculateNowDays () {
    const dateInp = prompt('Ingresa la fecha a calcular \n (Asugurate de ingresarlo en este formato DD-MM-YYYY').trim();
    const [day, month, year] = dateInp.split('-');
    const inputDate = new Date (`${year}-${month}-${day}`).getTime(); // me da los milisegundos. 

    if (isNaN(inputDate)) {alert ('Asegurate de ingresar correctamente los valores ')
        return;
    };

    let today = new Date ().getTime();
    const differenceDateDays =  Math.floor ((today - inputDate) / (1000 * 3600 * 24 ));
    const differenceDateYears = ((today - inputDate) / (1000 * 3600 * 24 * 365)).toFixed(2);
    
    if (Math.sign(differenceDateDays) === 1) { alert (`Desde ${dateInp} han pasado ${differenceDateDays} dias  o ${differenceDateYears} anios`)
    } else if (differenceDateDays === 0 ) {alert (`Esa es la fecha de hoy han pasado ${differenceDateDays} dias `)
    } else { alert (`Hacen falta ${Math.abs (differenceDateDays)} dias o ${Math.abs (differenceDateYears)} anios para "${dateInp}"`)}

    return;
}


// COMPLETE