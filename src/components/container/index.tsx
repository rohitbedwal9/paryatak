import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export const Container = ({ children, ...props }: Props) => {
  return <div {...props} className="min-h-screen w-full flex flex-col">{children}</div>;
};
