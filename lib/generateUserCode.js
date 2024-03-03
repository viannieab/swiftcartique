export function generateUserCode(prefix, fullname) {
    // Extract initials from fullname
    const initials = fullname.split(' ').map(name => name[0]).join('').toUpperCase()

    // Generate a timestamp-based code (format: YYMMDDHHmmss)
    const now = new Date()
    const timestampCode = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}
    ${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}
    ${now.getSeconds().toString().padStart(2, '0')}`

    // Combine prefix, initials, and timestamp to create the user code
    const userCode = `${prefix}-${initials}-${timestampCode}`

    return userCode
}