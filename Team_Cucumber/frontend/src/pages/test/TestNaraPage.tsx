import { useEffect, useState, type ChangeEvent } from "react";
import {
  Checkbox,
  Header,
  Icon,
  Tabs,
  Toast,
  useToast,
} from "../../components";
import { Textarea, Portal, Radio } from "../../components";
import Button from "../../components/common/Button/Button";

export const TestNaraPage = () => {
  const [radioValue, setRadioValue] = useState("radio");

  const [isChecked, setIsChecked] = useState(false);

  const [isSearchOn, setIsSearchOn] = useState(false);

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
      <div>
        {/* 헤더 1 뒤로가기 버튼만 있는 경우 */}
        <Header>
          <Header.Left>
            <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
              <Icon name="left" className="text-2xl" />
            </Button>
          </Header.Left>
        </Header>
        {/* 헤더 2 뒤로가기 버튼 + 타이틀이 있는 경우 */}
        <Header>
          <Header.Left>
            <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
              <Icon name="left" className="text-2xl" />
            </Button>
            <Header.Title>내 물건 팔기</Header.Title>
          </Header.Left>
        </Header>

        {/* 헤더 3 뒤로가기 + 타이틀 + right button */}
        <Header>
          <Header.Left>
            <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
              <Icon name="left" className="text-2xl" />
            </Button>
            <Header.Title>내 물건 팔기</Header.Title>
          </Header.Left>
          <Header.Right>
            <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
              <Icon name="trash" className="text-xl" />
            </Button>
            <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
              <Icon name="setting" className="text-xl" />
            </Button>
          </Header.Right>
        </Header>

        {/* 헤더 4 뒤로가기 + 아이콘 + right button */}
        <div className="bg-black">
          <Header className="">
            <Header.Left>
              <Button className="bg-transparent rounded-full active:bg-gray-200 hover:bg-transparent">
                <Icon name="left" className="text-2xl" />
              </Button>
              <Button className="bg-transparentrounded-full active:bg-gray-200 hover:bg-transparent">
                <Icon name="homeOutline" className="text-2xl" />
              </Button>
            </Header.Left>
            <Header.Right>
              <Button className="bg-transparent rounded-full active:bg-gray-200 hover:bg-transparent">
                <Icon name="share" className="text-2xl" />
              </Button>
              <Button className="bg-transparent rounded-full active:bg-gray-200 hover:bg-transparent">
                <Icon name="verticalDots" className="text-2xl" />
              </Button>
            </Header.Right>
          </Header>
        </div>

        {/* 헤더 5 뒤로가기 + right button + 검색 창*/}
        <Header className="">
          <Header.Left>
            {isSearchOn ? (
              <input placeholder="검색" className="bg-gray-200 w-full p-2" />
            ) : (
              <Button className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                <Icon name="left" className="text-2xl" />
              </Button>
            )}
          </Header.Left>
          <Header.Right>
            {isSearchOn ? (
              <Button
                className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent  font-normal"
                onClick={() => setIsSearchOn(!isSearchOn)}
              >
                취소
              </Button>
            ) : (
              <Button
                className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent"
                onClick={() => setIsSearchOn(!isSearchOn)}
              >
                <Icon name="search" className="text-2xl" />
              </Button>
            )}
          </Header.Right>
        </Header>
      </div>

      <Tabs.Root defaultValue="trigger" variant="line">
        <Tabs.List>
          <Tabs.Trigger value="trigger">트리거</Tabs.Trigger>
          <Tabs.Trigger value="hello">안녕</Tabs.Trigger>
          <Tabs.Trigger value="hihi">하세요</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="trigger">트리거입니다.</Tabs.Content>
        <Tabs.Content value="hello">안녕하실까요?</Tabs.Content>
        <Tabs.Content value="hihi">히히히히히힣</Tabs.Content>
      </Tabs.Root>

      {/*  TODO : 토스트의 위치는 Portal에 의해서 변경할 것  */}
      <Portal className="absolute bottom-4 w-full px-4">
        <Toast />
      </Portal>
      <Textarea placeholder="안녕하세요." className="focus:outline-1" />
      <div className="flex gap-2">
        <Checkbox
          id="test"
          checked={isChecked}
          onChange={handleChange}
          // disabled
        />
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
              // disabled
            />
          </div>
        ))}
      </div>
    </div>
  );
};
