export default function ConditionalDemo2() {
  const num = +prompt('enter a number')

  if (num % 2 === 0) {
    return <h1>{num} is Even</h1>;
  } else {
    return <h1>{num} is Odd</h1>;
  }
}
