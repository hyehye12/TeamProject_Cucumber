// TestHeminPage.tsx
import { useState } from "react";
import { ToggleButton } from "../../components";

export const TestHeminPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      안녕하세요.
      <ToggleButton
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        className="w-20 h-11"
        knobClassName="w-10 h-10 t-0"
        knobOnClass="translate-x-9"
        //knobOnClass는 className 넓이 - 높이를 x 뒤에 붙여주면 됩니다.
      />
    </div>
  );
};
