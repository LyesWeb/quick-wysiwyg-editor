import React, { useState, useEffect, useRef } from 'react';

export interface LinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (url: string) => void;
}

export const LinkModal: React.FC<LinkModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [url, setUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
      setUrl('');
      onClose();
    }
  };

  const handleCancel = () => {
    setUrl('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="qw-modal-overlay" onClick={handleCancel}>
      <div className="qw-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qw-modal-header">
          <h3 className="qw-modal-title">Insert Link</h3>
          <button
            type="button"
            className="qw-modal-close"
            onClick={handleCancel}
            title="Close"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="qw-modal-body">
            <input
              ref={inputRef}
              type="url"
              className="qw-modal-input"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <div className="qw-modal-footer">
            <button
              type="button"
              className="qw-modal-button qw-modal-button--secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="qw-modal-button qw-modal-button--primary"
            >
              Insert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

