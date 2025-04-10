export function add(numbers) {
    if (numbers === '') {
        return 0;
    }

    let delimiter = /[\n,]/; // Délimiteurs par défaut
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        const specialChars = /[.*+?^${}()|[\]\\]/g; // Délimiteurs à échapper
        const extractedDelimiter = parts[0].slice(2);

        // Vérifier si le délimiteur contient un crochet
        if (extractedDelimiter.includes('[') || extractedDelimiter.includes(']')) {
            throw new Error('Invalid delimiter: brackets are not allowed');
        }

        delimiter = new RegExp(extractedDelimiter.replace(specialChars, '\\$&')); // Extraire et échapper le délimiteur
        numbers = parts[1]; // Récupérer la partie des nombres
    }

    const numberArray = numbers.split(delimiter)
        .map(num => parseInt(num, 10))
        .filter(num => num <= 1000); // Ignorer les nombres strictement supérieurs à 1000

    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed. [${negatives}]`);
    }

    return numberArray.reduce((acc, num) => acc + num, 0);
}