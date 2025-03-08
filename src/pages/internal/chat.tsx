import { useNavigate } from "react-router";

export function Chat() {
  const navigate = useNavigate();

  return (
    <view
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      bindtap={() => {
        navigate(-1);
      }}
    >
      <text>Chat</text>
    </view>
  );
}
