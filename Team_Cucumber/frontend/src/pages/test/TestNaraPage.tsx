import { useEffect, useState, type ChangeEvent } from "react";
import {
  Icon,
  ImageUploader,
  Toast,
  useToast,
  type ImageUploaderType,
} from "../../components";

export const TestNaraPage = () => {
  const [images, setImages] = useState<ImageUploaderType[]>([]);

  const msg = "안녕하세요";

  const toast = useToast();

  useEffect(() => {
    toast({
      msg,
    });
  }, []);

  // TODO: 유효성 검사 추가 필요
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);

    if (files.length === 0) return;

    for (const file of files) {
      const previewUrl = URL.createObjectURL(file);

      setImages((prev) => [
        ...prev,
        {
          file,
          previewUrl,
        },
      ]);
    }
  };

  return (
    <div>
      <ImageUploader onChange={handleImageChange} multiple>
        <Icon name="camera" />
      </ImageUploader>
      <div className="flex gap-4 flex-wrap">
        {images.map((image) => (
          <img
            src={image.previewUrl}
            alt=""
            key={image.previewUrl}
            className="w-[300px] object-cover"
          />
        ))}
      </div>
      <Toast />
    </div>
  );
};
