export function add(numbers: string) {
  if (!numbers) return 0

  let delimiter = ","
  let finalNumbers = numbers

  if (numbers.startsWith("//")) {
    delimiter = numbers[2]
    finalNumbers = numbers.slice(4)
  }
  const listOfNumbers = finalNumbers.replace(/\n/g, delimiter).split(delimiter)
  const result = listOfNumbers.reduce((acc, current) => parseInt(current) + acc, 0)

  return result
}
