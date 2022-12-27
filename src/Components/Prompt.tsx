import { FC } from "react";

type MessageContainerProps = {
  alertMessage: string;
};

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
  trigger: () => void;
};

const Prompt: FC<PromptProps> = ({ trigger }) => {
  const style = {
    mainContainer:
      "alert-background fixed top-0 bottom-0 z-10 flex w-full items-center justify-center font-questrial",
  };

  return (
    <div className={style.mainContainer} onClick={() => trigger()}>
      <MessageContainer alertMessage="This site is under-development" />
    </div>
  );
};

export default Prompt;
