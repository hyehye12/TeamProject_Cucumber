import { useEffect, useState } from "react";
import { Portal, Radio, Textarea, Toast, useToast } from "../../components";

export const TestNaraPage = () => {
  const [radioValue, setRadioValue] = useState("radio");
  const msg = "안녕하세요";

  const toast = useToast();

  useEffect(() => {
    toast({
      msg,
    });
  }, []);

  const radios = [
    {
      text: "라디오",
      value: "radio",
    },
    {
      text: "비디오",
      value: "video",
    },
  ];

  return (
    <div>
      {/*  TODO : 토스트의 위치는 Portal에 의해서 변경할 것  */}
      <Portal className="absolute bottom-4 w-full px-4">
        <Toast />
      </Portal>
      <Textarea placeholder="안녕하세요." className="focus:outline-1" />
      {radios.map((radio) => (
        <div
          className="flex items-center justify-between p-2 w-[200px]"
          key={radio.value}
        >
          <label htmlFor={radio.value}>{radio.text}</label>
          <Radio
            name="test"
            id={radio.value}
            checked={radio.value === radioValue}
            value={radio.value}
            onChange={() => setRadioValue(radio.value)}
          />
        </div>
      ))}
    </div>
  );
};
