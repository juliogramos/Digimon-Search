const flexColumnCenter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const topBottomBg = {
  backgroundColor: "white",
  p: 1,
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "primary.main",
};

const fadeInAnimation = {
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  animation: "fadeIn 0.5s",
};

const justifyCenterFull = {
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

export { flexColumnCenter, topBottomBg, fadeInAnimation, justifyCenterFull };
