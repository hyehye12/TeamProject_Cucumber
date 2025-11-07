import { useEffect, useState, type ChangeEvent } from "react";
import { Checkbox, Toast, useToast } from "../../components";

export const TestNaraPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  // input:checkbox의 변화 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    setIsChecked(checked);
  };

  const msg = "안녕하세요";

  const toast = useToast();

  useEffect(() => {
    toast({
      msg,
    });
  }, []);

  return (
    <div>
      <Toast />
    </div>
  );
};
