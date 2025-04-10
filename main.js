export function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    const nums = numbers.split(',');
    if (nums.length > 2) {
        throw new Error('Only up to 2 numbers are allowed');
    }
    return nums.reduce((acc, num) => acc + parseInt(num), 0);
}