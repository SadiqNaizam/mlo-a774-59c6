import React from 'react';
import ErrorMessage from '../components/404Page/ErrorMessage';
import SecondaryMessage from '../components/404Page/SecondaryMessage';
import FooterNav from '../components/404Page/FooterNav';

/**
 * Represents the 404 Not Found error page.
 * 
 * This page utilizes a full-screen, centered layout to display the error message.
 * It is composed of three main components:
 * - SecondaryMessage: A brief text explaining the error.
 * - ErrorMessage: The large, stylized '404' number.
 * - FooterNav: A navigation footer at the bottom of the page.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* The secondary message is displayed above the main error code, as seen in the reference image. */}
          <SecondaryMessage />
          <ErrorMessage />
        </div>
      </main>

      {/* The footer is positioned at the bottom of the viewport. */}
      <FooterNav />
    </div>
  );
};

export default IndexPage;
