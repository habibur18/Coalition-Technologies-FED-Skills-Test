export default function EmergencyIcon({ width = 20, height = 20 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l9 18H3L12 2z" fill="#DC2626" />
      <circle cx="12" cy="16" r="1.5" fill="#FFF" />
      <rect x="11" y="8" width="2" height="6" fill="#FFF" />
    </svg>
  );
}
