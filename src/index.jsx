import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

const container = document.getElementById("app");
const root = createRoot(container)

const theme = createTheme({
  /** Put your mantine theme override here */
});

root.render(
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
);
