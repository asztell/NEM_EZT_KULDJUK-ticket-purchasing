import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect({
  to,
  disabled,
  label,
  className,
}: {
  to: string;
  disabled?: boolean;
  label: string;
  className?: string;
}) {
  const navigate = useNavigate();
  const onClick = useCallback(() => navigate(to), [navigate, to]);

  const linkClassName = "Redirect" + className ? " " + className : "";

  return (
    <div>
      <button disabled={disabled} onClick={onClick} className={linkClassName}>
        {label}
      </button>
    </div>
  );
}
