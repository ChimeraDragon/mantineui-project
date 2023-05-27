import React from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider, Paper } from "@mantine/core";
import Cards from "./Components/Cards";
import LightDarkButton from "./Components/LightDarkButton";
import { useHotkeys } from '@mantine/hooks';
import {useLocalStorage} from '@mantine/hooks';


export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{colorScheme}}>
          <Paper radius={0} style={{minHeight:'100vh'}}>
          <Cards />
          <LightDarkButton />
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}
