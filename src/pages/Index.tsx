import React from 'react';
import ConsoleView from '@/components/ConsoleView';

/**
 * Renders a page that displays a console log view, based on a design image.
 * This page sets a global monospace font and dark theme.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 font-mono text-foreground">
      <main className="w-full max-w-screen-lg">
        <ConsoleView />
      </main>
    </div>
  );
};

export default IndexPage;