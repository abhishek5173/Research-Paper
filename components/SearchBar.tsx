"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border rounded-lg outline-none focus:ring-2"
    />
  );
}