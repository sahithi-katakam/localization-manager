
'use client';

import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';



interface Props {
  id: string;
  lang: string;
  value: string;
}

const TranslationEditor = ({ id, lang, value }: Props) => {
  const [editingValue, setEditingValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newVal: string) => {
      await axios.put(`/api/translations/${id}`, {
        lang,
        value: newVal,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['translation-keys'] });
    },
  });

  const handleBlur = () => {
    if (editingValue !== value) {
      mutation.mutate(editingValue);
    }
    setIsEditing(false);
  };

  return isEditing ? (
    <input
      value={editingValue}
      onChange={(e) => setEditingValue(e.target.value)}
      onBlur={handleBlur}
      autoFocus
      className="border px-1 py-1 w-full"
    />
  ) : (
    <span onClick={() => setIsEditing(true)} className="cursor-pointer block">
      {value || <i className="text-gray-400">[empty]</i>}
    </span>
  );
};

export default TranslationEditor;
