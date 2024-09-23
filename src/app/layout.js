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
    <html lang="fr" className="h-full bg-gray-100">
      <body className="h-full">
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