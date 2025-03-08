import { useCallback } from "react";
import { useNavigate } from "react-router";

export function Landing() {
  const navigate = useNavigate();

  const onTapSignIn = useCallback(() => {
    navigate("/auth/sign-in");
  }, [navigate]);

  return (
    <view className="flex flex-col h-screen">
      <view className="flex flex-1 flex-col justify-center items-center">
        <text className="text-2xl">Landing</text>
      </view>
      <view className="flex h-auto items-center justify-center rounded-t-xl py-9 px-4 flex-col bg-black">
        <view
          className="w-full border-2 border-white rounded-xl py-4 px-4 flex items-center justify-center"
          accessibility-traits="button"
          bindtap={onTapSignIn}
        >
          <text className="text-xl text-white font-bold">ログイン</text>
        </view>
      </view>
    </view>
  );
}
