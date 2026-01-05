import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Button, Icon, ProductCard, ToggleButton } from "../../../components/common";

export const Settings = () => {
    const navigate = useNavigate();
    const [isDoNotDisturbEnabled, setIsDoNotDisturbEnabled] = useState(false);

    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">
            <Header className="bg-white shrink-0">
                <Header.Left>
                    <Button onClick={() => navigate(-1)} className="bg-transparent text-black rounded-full active:bg-gray-200 hover:bg-transparent">
                        <Icon name="left" className="text-2xl" />
                    </Button>
                    <Header.Title className="text-xl font-bold ml-2">설정</Header.Title>
                </Header.Left>
            </Header>

            <div className="flex-1 overflow-y-auto">
                {/* 알림 설정 */}
                <div className="px-4 py-4 border-b border-gray-200">
                    <ProductCard.Bold className="text-base mb-3 text-gray-500">알림 설정</ProductCard.Bold>
                    <div className="space-y-0">
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between">
                            <ProductCard.Contents className="text-base">알림 설정</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <div className="flex items-center justify-between py-3 border-t border-gray-100">
                            <ProductCard.Contents className="text-base">방해금지 시간설정</ProductCard.Contents>
                            <ToggleButton 
                                checked={isDoNotDisturbEnabled} 
                                onClick={() => setIsDoNotDisturbEnabled(!isDoNotDisturbEnabled)} 
                            />
                        </div>
                    </div>
                </div>

                {/* 사용자 설정 */}
                <div className="px-4 py-4 border-b border-gray-200">
                    <ProductCard.Bold className="text-base mb-3 text-gray-500">사용자 설정</ProductCard.Bold>
                    <div className="space-y-0">
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">계정 / 정보 관리</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">모아보기 사용자 관리</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">차단사용자 관리</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">게시글 미노출 사용자 관리</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">동영상 자동 재생 설정</ProductCard.Contents>
                            <ProductCard.Contents className="text-base text-orange-500">항상 사용</ProductCard.Contents>
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">중고거래 게시글의 동네 변경하기</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">채팅 설정</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">기타 설정</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                    </div>
                </div>

                {/* 기타 */}
                <div className="px-4 py-4 border-b border-gray-200">
                    <ProductCard.Bold className="text-base mb-3 text-gray-500">기타</ProductCard.Bold>
                    <div className="space-y-0">
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">공지사항</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">국가 변경</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">언어 설정</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">캐시 데이터 삭제</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 flex items-center justify-between border-t border-gray-100">
                            <ProductCard.Contents className="text-base">오픈소스 라이선스</ProductCard.Contents>
                            <Icon name="right" className="text-gray-400" />
                        </Button>
                        <div className="flex items-center justify-between py-3 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <ProductCard.Contents className="text-base">버전</ProductCard.Contents>
                                <span className="text-orange-500 text-base font-bold">N</span>
                            </div>
                            <ProductCard.Contents className="text-base text-orange-500">0.0.01</ProductCard.Contents>
                        </div>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 border-t border-gray-100">
                            <ProductCard.Contents className="text-base">로그아웃</ProductCard.Contents>
                        </Button>
                        <Button className="w-full bg-transparent hover:bg-gray-50 text-black text-left py-3 border-t border-gray-100">
                            <ProductCard.Contents className="text-base">탈퇴하기</ProductCard.Contents>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

