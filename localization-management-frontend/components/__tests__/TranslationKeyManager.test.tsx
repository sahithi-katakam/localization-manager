import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TranslationKeyManager from '../TranslationKeyManager';
import { useTranslationStore } from '../../store/translationStore';

// ✅ Mock Zustand store
jest.mock('../../store/translationStore', () => ({
  useTranslationStore: jest.fn(),
}));

const queryClient = new QueryClient();

describe('TranslationKeyManager', () => {
  it('renders the search input', () => {
    (useTranslationStore as unknown as jest.Mock).mockReturnValue({
      translationKeys: [],
      searchQuery: '',
      setSearchQuery: jest.fn(),
      setTranslationKeys: jest.fn(),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <TranslationKeyManager />
      </QueryClientProvider>
    );

    // ✅ This is the actual test
    expect(screen.getByPlaceholderText(/search translation keys/i)).toBeInTheDocument();
  });
});

