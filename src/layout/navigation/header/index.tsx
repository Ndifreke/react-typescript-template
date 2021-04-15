import { Avatar, Box, Flex, Image, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "components/card";
import Divider from "components/divider";
import Icon from "components/icon";
import Small from "components/typography/Small";
import { colors } from "lib/theme";
import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import Notification from "./NotificationBadge";
import Body from "components/typography/Body";
import { HiChevronDown } from "react-icons/hi";
import { ReactComponent as Logo } from "static/icon/logo.svg";

const Header = () => {
  return (
    <Card w="full" py="4" shadow="B20" rounded={0} alignItems="center" background="white">
      <Flex justify="space-between">
        <Wrap spacing={8}>
          <WrapItem cursor="pointer" as="label" fontSize="3xl" htmlFor="nav-toggle" color="gray.900">
            <CgMenuLeft />
          </WrapItem>
          <WrapItem alignItems='center' >
            <Logo />
            {/* <Image src="/img/logo.svg" height={8} objectFit="cover" alt="arm logo" /> */}
          </WrapItem>
        </Wrap>

        <Stack align="center" color="white" direction="row" alignItems="center">
          <Box>
            <Body variant="semibold12">Ndifreke Ekim</Body>
            <Small textAlign="right">Super Admin</Small>
          </Box>
          <Avatar size="sm" />

          <HiChevronDown />
        </Stack>
      </Flex>
    </Card>
  );
};

export default Header;
