import { Button, Group, rem, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconSun } from "@tabler/icons-react";

export default function IndexPage() {

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');

  return (
    <Group pt={50} justify="center" align="center" style={{ height: '100vh', display: "flex", flexDirection: "column" }}>
      <Button /* color="myColor"  */ size="xl">Welcome to Mantine!</Button>
      <Button mt={10} leftSection={<IconSun style={{ width: rem(20), height: rem(20) }} stroke={3} />} size="md" onClick={() => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
      }}>Change Theme</Button>
    </Group>
  );
}
