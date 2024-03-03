export const generateCouponCode = (title='', expiryDate='') =>{
    const formattedTitle = title.toUpperCase().replace(/\s+/g, "")
    const formattedExpiryDate = expiryDate
    const code = `${formattedTitle}-${formattedExpiryDate}`
    return code
}