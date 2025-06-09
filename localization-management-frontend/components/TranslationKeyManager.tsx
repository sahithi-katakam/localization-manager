
'use client';

import React from 'react';
import { useTranslationStore } from '../store/translationStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import TranslationEditor from './TranslationEditor';
// We’ll build this next

const TranslationKeyManager = () => {
  const {
    searchQuery,
    setSearchQuery,
    translationKeys,
    setTranslationKeys,
  } = useTranslationStore();

  const { isLoading } = useQuery({
    queryKey: ['translation-keys'],
    queryFn: async () => {
      const res = await axios.get('/api/translations'); // Replace with your backend endpoint
      setTranslationKeys(res.data);
      return res.data;
    },
  });

  const filtered = translationKeys.filter((tk) =>
    tk.key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search translation keys..."
        className="border p-2 w-full mb-4"
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Key</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">EN</th>
              <th className="border p-2">FR</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((key) => (
              <tr key={key.id}>
                <td className="border p-2">{key.key}</td>
                <td className="border p-2">{key.category}</td>
                <td className="border p-2">
                  <TranslationEditor
                    id={key.id}
                    lang="en"
                    value={key.translations['en']?.value || ''}
                  />
                </td>
                <td className="border p-2">
                  <TranslationEditor
                    id={key.id}
                    lang="fr"
                    value={key.translations['fr']?.value || ''}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TranslationKeyManager;
