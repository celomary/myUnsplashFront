import { useState } from 'react';

export default function useAvatarEvent() {
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (prev) => {
    setPreview(prev);
  };

  const resetPreview = () => setPreview(null);
  return {
    preview,
    onClose,
    onCrop,
    resetPreview,
  };
}
