import type { NextPage } from "next";
import Link from 'next/link';
import {Button} from 'antd';

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>This page has global layout</div>
      <Link href={'/no-layout'}><Button type={"primary"}>page without global layout</Button></Link>
    </div>
  );
};

export default IndexPage;
