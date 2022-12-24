import { FC } from "react";

type MessageContainerProps = Pick<PromptProps, "alertMessage">;

const MessageContainer: FC<MessageContainerProps> = ({ alertMessage }) => {
  type styleprops = {
    mainContainer: string;
  };

  const style: styleprops = {
    mainContainer: "flex bg-white p-5",
  };

  return (
    <div className={style.mainContainer}>
      <span>{alertMessage}</span>
    </div>
  );
};

type PromptProps = {
  trigger: () => {};
  alertMessage: string;
};

const Prompt: FC<PromptProps> = ({ trigger }) => {
  return <div></div>;
};

export default Prompt;
