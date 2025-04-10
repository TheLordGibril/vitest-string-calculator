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

    return numbers.split(delimiter).reduce((acc, num) => acc + parseInt(num, 10), 0);
}