import React from "react";
import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        // "w-full mx-auto max-w-[375px] border border-red-500",
        "w-full mx-auto max-w-[375px]",
        "md:max-w-[768px]",
        "lg:max-w-[1024px]",
        "xl:max-w-[1280px]",
        className
      )}
    >
      {children}
    </div>
  );
};
