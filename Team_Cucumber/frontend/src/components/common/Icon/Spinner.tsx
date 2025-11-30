import React from "react";
import { twMerge } from "tailwind-merge";

interface SpinnerProps {
  size?: number; // px 단위 권장 (예: 24)
  spinnerWidth?: number; // px
  color?: string; // optional: 직접 색 지정 (우선 currentColor 사용 권장)
  loadingText?: string;
  className?: string; // Tailwind 클래스 전달용
  svgProps?: React.SVGProps<SVGSVGElement>;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 20,
  spinnerWidth,
  color,
  loadingText = "로딩 중",
  className,
  svgProps,
}) => {
  const strokeW = spinnerWidth ?? Math.max(2, Math.round(size / 8));
  const radius = (size - strokeW) / 2;
  // 부분 호를 만들기 위한 dash/gap (시각적으로 적당한 값)
  const circumference = 2 * Math.PI * radius;
  const dashLength = circumference * 0.35; // 보이는 부분 길이
  const gapLength = circumference - dashLength;

  const merged = twMerge("inline-block", className); // e.g. "text-indigo-600"

  return (
    <svg
      role="img"
      aria-label={loadingText}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={merged + " animate-spin"} // Tailwind animate-spin 사용
      style={{ display: "inline-block" }}
      {...svgProps}
    >
      {/* 배경원 (선택) */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeW}
        opacity={0.12}
      />
      {/* 부분 호 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color ?? "currentColor"}
        strokeWidth={strokeW}
        strokeLinecap="round"
        strokeDasharray={`${dashLength} ${gapLength}`}
        strokeDashoffset="0"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
};
