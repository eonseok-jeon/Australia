import { MantineProvider, createTheme } from '@mantine/core';
import { FlightSchedule } from './components/FlightSchedule';

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Inter, system-ui, sans-serif',
  headings: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  colors: {
    // 커스텀 컬러 팔레트
    travel: [
      '#f0f9ff',
      '#e0f2fe',
      '#bae6fd',
      '#7dd3fc',
      '#38bdf8',
      '#0ea5e9',
      '#0284c7',
      '#0369a1',
      '#075985',
      '#0c4a6e',
    ],
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <FlightSchedule />
    </MantineProvider>
  );
}

export default App;
