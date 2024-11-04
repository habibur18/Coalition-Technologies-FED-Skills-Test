export default function WarningIcon({ width = 20, height = 20 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l9 18H3L12 2z" fill="#EF4444" />
      <circle cx="12" cy="16" r="1" fill="#FFF" />
    </svg>
  );
}
