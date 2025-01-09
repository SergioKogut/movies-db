import { Link } from "react-router-dom";


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
      <div className="Movies-card-overview">{overvies}</div>
      <div className="Movies-card-pop">{popularity}</div>
    </div>
  );
}
