import { Box } from "@chakra-ui/react";
import { StackCard } from "components/card";
import Navigation from "layout/navigation";
import useQuery_ from "lib/hooks/useQuery";
import { colors } from "lib/theme";

const DashboardHome = () => {

  const de =   useQuery_()
  console.log(de)
  return (
    <Navigation>
      <StackCard spacing={8} w="full" py="4" shadow="lg" rounded={0} minH="92vh" bg={colors["neutral-20"]} pt={10}>
        Dashbord Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis inventore sunt reiciendis harum debitis blanditiis odio
        numquam suscipit quo molestiae quas enim animi quasi earum assumenda, commodi quidem ad! \Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Explicabo, delectus. Soluta voluptas, error voluptates exercitationem in dicta unde, odio quod totam, sunt odit distinctio nam sed nulla
        porro dolorum possimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas dignissimos, nesciunt distinctio vel vero iusto
        corporis atque commodi itaque a, tempore maxime natus enim, sequi quasi reiciendis. Delectus, rerum repellat!
      </StackCard>
    </Navigation>
  );
};

export default DashboardHome;
