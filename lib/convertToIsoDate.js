export function convertToIsoDate(expiryDate) {
    // Split the date into year, month, and day
    const [year, month, day] = expiryDate.split('-').map(part => +part);
    
    // Create a new Date object with the provided year, month, and day
    const dateObject = new Date(year, month - 1, day); // Month needs to be zero-based
    
    // Return the ISO string representation of the date
    return dateObject.toString();
}
