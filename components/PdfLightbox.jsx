"use client";

import { useState, useCallback, useEffect } from "react";

export default function PdfLightbox({ href, label, className = "" }) {
  const [open, setOpen] = useState(false);

  // ESC to close
  const onKey = useCallback((e) => { if (e.key === "Escape") setOpen(false); }, []);
  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onKey]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`px-3 py-2 rounded-lg border border-slate-300 hover:bg-white text-slate-900 ${className}`}
      >
        View PDF
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70">
          <div className="absolute inset-4 md:inset-10 bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex items-center justify-between gap-3 p-3 border-b">
              <div className="font-medium text-slate-900 truncate">{label}</div>
              <div className="flex items-center gap-2">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:opacity-90"
                >
                  Open in new tab
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg border border-slate-300 hover:bg-white"
                >
                  Close
                </button>
              </div>
            </div>
            {/* Native PDF viewer */}
            <iframe
              title={label}
              src={`${href}#view=FitH&toolbar=1&navpanes=0`}
              className="w-full h-full flex-1"
            />
          </div>
        </div>
      )}
    </>
  );
}
