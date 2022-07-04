import React, {FC, PropsWithChildren} from 'react';

const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return <>
    <h1>Layout Title</h1>
    <div className={"border"}>
      {children}
    </div>
  </>;
};

export default MainLayout;
