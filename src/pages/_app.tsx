import '@/styles/globals.css';
import '@mantine/core/styles.css';
import {
  AppShell,
  Burger,
  Card,
  Group,
  MantineProvider,
  Paper,
  ScrollArea,
  Skeleton,
  Stack,
  createTheme,
} from '@mantine/core';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>,
  );
}
