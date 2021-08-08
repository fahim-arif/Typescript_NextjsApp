export default function Message({ message, type, className }) {
  return (
    <div className={className}>
      {type === "error" && (
        <p className="text-red-400 text-sm font-bold">{message}</p>
      )}
      {type === "success" && (
        <p className="text-green-400 text-sm font-bold">{message}</p>
      )}
    </div>
  );
}
