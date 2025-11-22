import { ReportsLayout } from "../../../layout";
import { BlockUserChecker, ReportsButton, ReportsMainTitle } from "../..";

const ReportsCustomProducts = () => {
  return (
    <ReportsLayout>
      <ReportsLayout.Header>
        <ReportsMainTitle title="주문 제작 상품" />
      </ReportsLayout.Header>
      <ReportsLayout.Main className="my-8 text-lg space-y-4">
        <p>
          당근 중고거래에서는 <strong>'주문 제작 상품'의 거래</strong>를
          금지하고 있어요.
        </p>
        <p>
          <strong>주문 제작 상품이란?</strong>
        </p>
        <p>
          구매자가 최종 결과물의 품질을 미리 확인하거나 보장받을 수 없는 주문 후
          제작되는 물품을 의미해요.
        </p>
        <p>
          이런 상품의 유상 거래는 구매자가 기대와 다른 결과물을 받게 되어
          분쟁으로 이어질 수 있어서 거래를 금지하고 있어요.
        </p>
        <p>
          관련 게시글을 등록하거나 신고가 접수되는 경우 서비스 이용이 제한될 수
          있으니 참고해 주세요.
        </p>
        <p>
          <strong>
            (거래불가) 제품 상태를 확인할 수 없는 주문 제작 상품 예시
          </strong>
        </p>
        <ul className="list-disc ml-10 space-y-4">
          <li>"원하는 디지안으로 만들어드려요"</li>
          <li>"주문 제작 가능해요" 등 맞춤형 제작 서비스</li>
          <li>
            "그림 그려드려요", "캐리커쳐 그려드려요" 등 요청에 따라 그림을
            그려주는 서비스
          </li>
          <li>핸드메이드로 원하는 상품을 제작해 주는 경우 등</li>
        </ul>
        <p>
          ※ 단, 이미 제작이 완료되어 구매자가 물품의 상태를 확인할 수 있는
          경우는 거래 가능
        </p>
        <p>
          <strong>(거래 가능) 제품 상태를 확인할 수 있는 물품 예시</strong>
        </p>
        <ul className="list-disc ml-10 space-y-4">
          <li>완성된 그림, 스케치, 일러스트 등</li>
          <li>
            페이닝 툴이나 AI 도구로 이미 생성한 이미지
            <ul className="list-disc ml-10 space-y-4 mt-4">
              <li>단, 타인의 권리를 침해한 경우 제재도리 수 있어요</li>
            </ul>
          </li>
          <li>수제, 핸드메이드 물품</li>
        </ul>
        <p>
          그 밖에 무료로 제공하는 재능 기부 형태의 '그림 그리기, 타로/사주,
          핸드메이드 제작' 등은 가급적 동네생활 서비스를 통해 이용해 주시길
          부탁드려요.
        </p>
        <BlockUserChecker />
      </ReportsLayout.Main>
      <ReportsLayout.Footer className="pb-8">
        <ReportsButton />
      </ReportsLayout.Footer>
    </ReportsLayout>
  );
};

export default ReportsCustomProducts;
