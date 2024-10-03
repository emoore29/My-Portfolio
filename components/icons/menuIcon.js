export default function MenuIcon({ toggleMenu }) {
  return (
    <svg
      onClick={toggleMenu}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="var(--primary)"
      width={35}
      height={35}
    >
      <path
        stroke-linecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
