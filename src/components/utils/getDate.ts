const today: Date = new Date()
const year = today.getFullYear().toString();
let month = (today.getMonth() + 1).toString(); // Month is 0-based, so add 1
month = month.length === 1 ? `0${month}` : month; // Ensure two-digit representation
let day = today.getDate().toString();
day = day.length === 1 ? `0${day}` : day; // Ensure two-digit representation
const formattedDate = `${year}-${month}-${day}`;

export { formattedDate }
