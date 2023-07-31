import { NavLink } from "react-router-dom"

const StyledNavLink: React.FC<{ path: string; label: string }> = ({
    path,
    label,
}) => (
    <NavLink
        to={path}
        className={({ isActive }) =>
            "w-20 rounded-lg border  py-2 shadow-lg " +
            (isActive
                ? "bg-red-500 dark:bg-red-900"
                : "bg-lime-900 dark:bg-green-900")
        }
    >
        {label}
    </NavLink>
)

export default StyledNavLink
