import { Link } from "react-router-dom";
import ".MovieCard.css";

interface MovieCardProps {
  id: number;
  title: string;
  overvies: string;
  popularity: number;
}

export function MovieCard({ id, title, overvies, popularity }: MovieCardProps) {
  return (
    <div className="Movies-card">
      <Link to={`movies/${id}`}>{title}</Link>
      <div>{overvies}</div>
      <div>{popularity}</div>
    </div>
  );
}
