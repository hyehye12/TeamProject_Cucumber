import { useRef, type ChangeEvent, type ReactNode } from "react";

interface ImageUploaderProps {
  children: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  multiple?: boolean;
  accept?: string;
  setError?: (error: string) => void;
}

export const ImageUploader = ({
  children,
  onChange,
  onClick,
  multiple = false,
  accept,
}: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 버튼 클릭 시 이미지 폴더를 여는 기능만을 위한 핸들러라서 안에서 만듦
  const handleClick = () => {
    if (!inputRef.current) return;

    inputRef.current.click();

    // 외부에서 click 핸들러를 추가하는 경우를 위한 onclick 추가
    onClick && onClick();
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={onChange}
        hidden
        multiple={multiple}
        accept={accept}
      />
      <button
        className="p-2 border border-gray-400 rounded cursor-pointer"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};
