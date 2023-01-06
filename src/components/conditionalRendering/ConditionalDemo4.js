export default function ConditionalDemo4() {
  let dayNumber = new Date().getDay();

  switch (dayNumber) {
    case 1:
      return <h3>Today is Monday</h3>;
    case 2:
      return <h3>Today is Tuesday</h3>;
    case 3:
      return <h3>Today is Wednesday</h3>;
    case 4:
      return <h3>Today is Thursday</h3>;
    case 5:
      return <h3>Today is Friday</h3>;
    case 6:
      return <h3>Today is Saturday</h3>;
    case 7:
      return <h3>Today is Sunday</h3>;
    default:
      return <h3>Not a Valid number</h3>;
  }
}
