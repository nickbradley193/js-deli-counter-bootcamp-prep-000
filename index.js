var katzDeli = [];

function takeANumber(katzDeliLine, customerName) {
    katzDeliLine.push(customerName);
    return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentCustomer = katzDeliLine[0];  
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}