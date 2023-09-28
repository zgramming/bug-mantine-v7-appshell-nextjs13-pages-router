import { AppShell, Group, Burger, ScrollArea, Skeleton, Stack, Card } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link href="/" className="w-min">
            <a className="text-2xl font-bold">Mantine Next.js</a>
          </Link>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          60 links in a scrollable section
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Section>
        <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack gap="md" justify="center">
          <Card withBorder>{children}</Card>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default AdminLayout;
