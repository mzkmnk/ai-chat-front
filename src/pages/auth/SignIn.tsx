export function SignIn() {
  return (
    <view
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        height: "100vh",
      }}
    >
      <view
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <text style={{ fontSize: "2rem" }}>SignIn</text>
      </view>
      <view
        style={{
          display: "flex",
          height: "40vh",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: "3.5rem",
          borderTopRightRadius: "3.5rem",
          backgroundColor: "#000",
        }}
      >
        <button
          style={{
            backgroundColor: "#fff",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        />
      </view>
    </view>
  );
}
