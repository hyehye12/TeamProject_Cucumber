import { Icon, icons } from "../../components";

export const IconsPage = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(icons).map((icon) => (
        <div
          className="p-2 flex flex-col items-center gap-2 border"
          key={icon[0]}
        >
          <Icon name={icon[0] as keyof typeof icons} className="text-2xl" />
          <p>{icon[0]}</p>
        </div>
      ))}
    </div>
  );
};
