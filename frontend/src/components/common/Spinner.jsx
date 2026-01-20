import { RotatingLines } from "react-loader-spinner";

const Spinner = ({
  height = 80,
  width = 80,
  color = "grey",
  strokeWidth = 5,
  animationDuration = 0.75,
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RotatingLines
        visible={true}
        height={height}
        width={width}
        color={color}
        strokeWidth={strokeWidth}
        animationDuration={animationDuration}
        ariaLabel="loading-spinner"
      />
    </div>
  );
};

export default Spinner;
