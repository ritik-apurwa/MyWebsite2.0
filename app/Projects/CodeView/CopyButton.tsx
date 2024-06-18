import { useToast } from "@/components/ui/use-toast";
import copy from "copy-to-clipboard";
import { Check, LucideCopy } from "lucide-react";
import { useState } from "react";

interface CopyToClipboardProps {
  text: string;
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    copy(text);
    toast({
      title: "Copied!",
      description: `The  code has been copied to your clipboard`,
    });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="size-full w-auto rounded-md flex-center bg-background text-foreground hover:ring-indigo-600 add-effect border">
      {copied ? (
        <button
          disabled={copied}
          className="flexr-center text-xs hover:ring-2 rounded-md  font-semibold p-2  gap-x-1"
        >
          <span>
            <Check size={14} />
          </span>
          <span>Copied </span>
        </button>
      ) : (
        <button
          onClick={handleCopy}
          className="flexr-center rounded-md text-xs hover:ring-1  font-semibold p-2 gap-x-1"
        >
          <span>
            <LucideCopy size={14} />
          </span>
          <span>Copy</span>
        </button>
      )}
    </div>
  );
};


export const CopyButtonCodeString = ` 
import { useToast } from "@/components/ui/use-toast";
import copy from "copy-to-clipboard";
import { Check, LucideCopy } from "lucide-react";
import { useState } from "react";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    copy(text);
    toast({
      title: "Copied!",
      description: \`The  code has been copied to your clipboard\`,
    });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="size-full w-auto rounded-md flex-center bg-background text-foreground hover:ring-indigo-600 add-effect border">
      {copied ? (
        <button
          disabled={copied}
          className="flexr-center text-xs hover:ring-2 rounded-md  font-semibold p-2  gap-x-1"
        >
          <span>
            <Check size={14} />
          </span>
          <span>Copied </span>
        </button>
      ) : (
        <button
          onClick={handleCopy}
          className="flexr-center rounded-md text-xs hover:ring-1  font-semibold p-2 gap-x-1"
        >
          <span>
            <LucideCopy size={14} />
          </span>
          <span>Copy</span>
        </button>
      )}
    </div>
  );
};
export default CopyToClipboard;
`;
