import { snsLink } from "../../data/header";

export default function Sns() {
  return (
    <div className="header_sns">
      <ul>
        {snsLink.map((sns, key) => (
          <li key={key}>
            <a
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sns.title}
            >
              <span>{sns.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
