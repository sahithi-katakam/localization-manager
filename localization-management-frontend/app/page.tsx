
'use client';

import TranslationKeyManager from '../components/TranslationKeyManager';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white dark:bg-stone-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-stone-700 dark:text-stone-200">
                Helium
              </span>
            </div>
            <nav className="flex items-center space-x-4">
              <div className="text-sm p-2 border border-dashed border-stone-300 dark:border-stone-600 rounded-md text-stone-500 dark:text-stone-400">
                [User Profile Placeholder]
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Layout (Sidebar + Content Area) */}
      <div className="flex flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sidebar */}
        <aside className="w-1/4 xl:w-1/5 p-4 bg-white dark:bg-stone-800 shadow rounded-lg mr-8 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3 text-stone-700 dark:text-stone-300">
              Navigation
            </h2>
            <div className="p-3 border border-dashed border-stone-300 dark:border-stone-600 rounded bg-stone-50 dark:bg-stone-700 text-sm text-stone-500 dark:text-stone-400 min-h-[50px] flex items-center justify-center">
              [Projects/Filters Area]
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3 text-stone-700 dark:text-stone-300">
              Languages
            </h2>
            <div className="p-3 border border-dashed border-stone-300 dark:border-stone-600 rounded bg-stone-50 dark:bg-stone-700 text-sm text-stone-500 dark:text-stone-400 min-h-[50px] flex items-center justify-center">
              [Language Selection Area]
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="w-3/4 xl:w-4/5 flex flex-col space-y-6">
          {/* Toolbar */}
          <div className="bg-white dark:bg-stone-800 shadow rounded-lg p-4 flex items-center justify-between min-h-[60px]">
            <div className="w-full p-3 border border-dashed border-stone-300 dark:border-stone-600 rounded bg-stone-50 dark:bg-stone-700 text-sm text-stone-500 dark:text-stone-400 flex items-center justify-center">
              [Toolbar: Search, Actions]
            </div>
          </div>

          {/* Translation Management Area */}
          <section className="flex-grow bg-white dark:bg-stone-800 shadow rounded-lg p-4 lg:p-6">
            <h2 className="text-xl font-semibold mb-4 text-stone-700 dark:text-stone-300">
              Translation Management Area
            </h2>
            <TranslationKeyManager />
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-stone-800 border-t border-stone-200 dark:border-stone-700 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-stone-500 dark:text-stone-400">
          <p>&copy; {new Date().getFullYear()} Helium Contractor Assignment. Good luck!</p>
          <div className="mt-1">
            <a href="#" className="hover:underline mx-2">Documentation (Placeholder)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
