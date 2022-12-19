import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+
import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

addDecorator(withPerformance);

export const parameters = {
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}