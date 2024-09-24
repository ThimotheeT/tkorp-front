import './globals.css'
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Test Tkorp',
  icons: {
    icon: '/pattes.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full bg-gradient-to-r from-blue-100 to-green-100">
        <div className="min-h-full">
          <Navigation />
          <main className="py-10">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}