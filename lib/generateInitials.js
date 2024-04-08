export function generateInitials(name) {
    // Split the name into an array of words
    const words = name.split(" ")
    
    // Initialize an empty string to store the initials
    let firstInitial = words[0][0].toUpperCase()
    let secondInitial = ""

    if(words.length > 1){
        secondInitial += words[words.length - 1][0].toUpperCase();
    }

    // Return the initials
    return firstInitial + secondInitial
}