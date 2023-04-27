import React from 'react';
interface UploadErrorProps {
  file: File;
  onDelete: (file: File) => void;
}
export default function UploadError({ file, onDelete }: UploadErrorProps) {
  return <div>Error</div>;
}
