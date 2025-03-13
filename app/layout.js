import '../styles/globals.css';

export const metadata = {
  title: 'Whiskey Wizardry',
  description: 'A fun and interactive whiskey tasting game',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="texture-overlay"></div>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}