export function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    return numbers.split(/[\n,]/).reduce((acc, num) => acc + parseInt(num), 0);
}