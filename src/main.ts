export function add(numbers: string) {
  if (!numbers) return 0

  const listOfNumbers = numbers.replace(/\n/g, ",").split(",")
  const result = listOfNumbers.reduce((acc, current) => parseInt(current) + acc, 0)

  return result
}
