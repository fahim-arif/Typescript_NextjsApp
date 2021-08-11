interface Props {
	type: string;
	message: string;
	className?: string | null;
}
  
export default function Message({ type, message, className }: Props) {
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
