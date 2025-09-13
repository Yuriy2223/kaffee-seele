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
        "w-full mx-auto max-w-[375px] px-4 border border-red-500",
        "md:max-w-[768px] md:px-6",
        "lg:max-w-[1024px] lg:px-6",
        "xl:max-w-[1280px] xl:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};
