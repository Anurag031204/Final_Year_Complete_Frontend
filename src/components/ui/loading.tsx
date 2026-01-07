import { Loader2 } from "lucide-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

const Loading = ({ size = "md", text = "Loading..." }: LoadingProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className="flex items-center justify-center gap-2 p-4">
      <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
};

export default Loading;