import { useState } from 'react';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { ClipboardCheckIcon } from '@heroicons/react/solid';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function CodeBlock({ node, inline, className, children, ...props }) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const code = String(children).replace(/\n$/, '');
  const codeBlock =
    !inline && match ? (
      <SyntaxHighlighter style={prism} language={match[1]} {...props}>
        {code}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );

  return (
    <div className="relative">
      {codeBlock}
      <button
        className="absolute top-2.5 right-1 p-2 bg-gray-100 rounded"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
        }}
      >
        {copied ? (
          <ClipboardCheckIcon className="h-5 w-5 text-green-500" />
        ) : (
          <ClipboardListIcon className="h-5 w-5 text-black" />
        )}
      </button>
    </div>
  );
}

export default CodeBlock;
