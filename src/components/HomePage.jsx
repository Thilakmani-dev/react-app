import { useTheme } from "../theme-context";

export const HomePage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <h3>Main Page</h3>
    </div>
  );
};
