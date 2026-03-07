export default function Card({ children }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
      {children}
    </div>
  );
}