export default function ConditionalDemo3() {
  const unreadMessages = ["hello", "hiii"];
  return (
    <div>
      <h1>Hello! Sanjay</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
