import { useEffect, useState, type ChangeEvent } from "react";
import { Checkbox, Toast, useToast } from "../../components";
import { Textarea, Portal, Radio } from "../../components";

export const TestNaraPage = () => {
  const [radioValue, setRadioValue] = useState("radio");

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
      <div className="flex gap-2">
        <Checkbox id="test" checked={isChecked} onChange={handleChange} />
        <label htmlFor="test">테스트</label>
      </div>
      <div className="space-y-4 p-4">
        {radios.map((radio) => (
          // TODO 이 부분을 wrapper로 만들 수 있을 듯 함
          <div
            className="flex items-center justify-between p-2 w-[200px] border border-gray-200 rounded-lg"
            key={radio.value}
          >
            <label htmlFor={radio.value}>{radio.text}</label>
            <Radio
              name="test"
              id={radio.value}
              checked={radio.value === radioValue}
              value={radio.value}
              onChange={() => setRadioValue(radio.value)}
              className={
                radio.value === radioValue ? "text-orange-400" : "text-gray-200"
              }
              disabled
            />
          </div>
        ))}
      </div>
    </div>
  );
};
