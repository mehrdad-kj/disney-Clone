import { Menu } from "./Header";

const HeaderItem = ({ item, index }: { item: Menu; index?: number }) => {
  const Icon = item.icon;

  return (
    <>
      <div className="flex items-center gap-3 text-sm font-semibold cursor-pointer hover:underline underline-offset-8 z-10">
        {index && index >= 3 ? (
          <>
            <Icon />
            <h2 className="whitespace-nowrap">{item.name}</h2>
          </>
        ) : (
          <>
            <Icon />
            <h2 className="hidden md:block whitespace-nowrap">{item.name}</h2>
          </>
        )}
      </div>
    </>
  );
};

export default HeaderItem;
