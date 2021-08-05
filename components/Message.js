export default function Message({ text, type, className }) {
  return (
    <div className={className}>
      {type === "error" && (
        <p className="text-red-400 text-sm font-bold">{text}</p>
      )}
      {type === "success" && (
        <p className="text-green-400 text-sm font-bold">{text}</p>
      )}
    </div>
  );
}
