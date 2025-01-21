function onEdit(e) {
  let hoja = e.source.getActiveSheet(); // GRACIAS CHATGPT JKSJSKJ (NO SABIA QUE HACER)
  let data = getAllData();
  let ganancia = calcularGanancia(data);
  let tiempo = obtenerTiempo(data);

  // Escribe la ganancia en la columna G, empezando desde G8
  for (let i = 0; i < ganancia.length; i++) {
    hoja.getRange(i + 8, 7).setValue(ganancia[i]); // Columna G (7)
  }

  // Escribe el tiempo en la columna I, empezando desde I8
  for (let i = 0; i < tiempo.length; i++) {
    hoja.getRange(i + 8, 9).setValue(tiempo[i]); // Columna I (9)
  }
}

function getAllData() {
  let hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // OBTENCIÓN DE DATOS
  let buyingPrice = hoja.getRange("D8:D100").getValues().flat(); // Precios de compra
  let shippingCost = hoja.getRange("E8:E100").getValues().flat(); // Costos de envío
  let itemSellingPrice = hoja.getRange("F8:F100").getValues().flat(); // Precio de venta
  let sellStatus = hoja.getRange("H8:H100").getValues().flat(); // Estado de venta
  let recividoStatus = hoja.getRange("C8:C100").getValues().flat(); // Estado recibido

  let dataObject = {
    buyingPrice: buyingPrice,
    shippingCost: shippingCost,
    itemSellingPrice: itemSellingPrice,
    sellStatus: sellStatus,
    recividoStatus: recividoStatus
  };

  return dataObject;
}

function calcularGanancia(dataObject) {
  let gananciaTotal = [];

  for (let index = 0; index < dataObject.buyingPrice.length; index++) {
    let sell = parseFloat(dataObject.itemSellingPrice[index]) || 0;
    let shipping = parseFloat(dataObject.shippingCost[index]) || 0;
    let buying = parseFloat(dataObject.buyingPrice[index]) || 0;

    // Calcula la ganancia
    let total = sell - (shipping + buying);

    gananciaTotal.push(total);
  }

  return gananciaTotal;
}

function obtenerTiempo(dataObject) {
  let recividoFecha = [];
  let vendidoFecha = [];
  let fechaImprimir = [];

  // Procesa las fechas de 'recibido' y 'vendido'
  for (let i = 0; i < dataObject.recividoStatus.length; i++) {
    let time = 0;
    if (dataObject.recividoStatus[i] === true) {
      time = Date.now(); // Registra la fecha actual
    }
    recividoFecha.push(time);
  }

  for (let i = 0; i < dataObject.sellStatus.length; i++) {
    let time = 0;
    if (dataObject.sellStatus[i] === true) {
      time = Date.now(); // Registra la fecha actual
    }
    vendidoFecha.push(time);
  }

  // Calcula la diferencia en días entre 'recibido' y 'vendido'
  for (let i = 0; i < recividoFecha.length; i++) {
    let recividoCalculo = recividoFecha[i];
    let vendidoCalculo = vendidoFecha[i];

    // Asegúrate de que ambos arrays tengan la misma longitud
    if (vendidoCalculo && recividoCalculo) {
      let total = (vendidoCalculo - recividoCalculo) / 86400000; 
      fechaImprimir.push(Math.round(total));
    } else {
      fechaImprimir.push(0); // Si no hay valores válidos, coloca 0
    }
  }

  return fechaImprimir;
}