import MenuDetailContainer from "@/containers/(menu)/[drinkType]/[id]";
import { FC } from "react";

interface Props {
  params: Promise<{
    drinkType: string;
    id: string;
  }>;
}

const MenuDetailPage: FC<
  Props
> = async ({ params }) => {
  return (
    <MenuDetailContainer
      params={await params}
    />
  );
};

export default MenuDetailPage;
