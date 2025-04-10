export function add(numbers) {
    if (numbers === '') {
        return 0
    }
    return numbers.split(',').reduce((acc, num) => acc + parseInt(num), 0)
}