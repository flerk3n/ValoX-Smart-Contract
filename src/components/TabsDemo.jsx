import React from 'react';
import { Tabs } from "./ui/tabs";
import dulexe from '../assets/Dulexe.png'
import exclusive from '../assets/Exclusive.png'
import premium from '../assets/Premium.png'

export function TabsDemo() {
  const tabs = [
    {
      title: "Dulex",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-valograde">
          <p className='font-valo'>Dulex Tab</p>
          <DummyContentOne />
        </div>
      ),
    },
    {
      title: "Exclusive",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-valograde">
          <p className='font-valo'>Exclusive tab</p>
          <DummyContentTwo />
        </div>
      ),
    },
    {
      title: "Premium",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-valograde">
          <p className='font-valo'>Premium tab</p>
          <DummyContentThree />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[22rem] md:h-[48rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 bottom-40">
      <Tabs tabs={tabs} />
    </div>
  );
}


const DummyContentOne = () => {
  return (
    <img
      src={dulexe}
      alt="dulexe"
      width="1000"
      height="1000"
      className="object-cover object-left-top left-auto right-auto top-24 h-[60%] md:h-[80%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContentTwo = () => {
  return (
    <img
      src={exclusive}
      alt="exclusive"
      width="1000"
      height="1000"
      className="object-cover object-left-top left-auto right-auto top-24 h-[60%] md:h-[80%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContentThree = () => {
  return (
    <img
      src={premium}
      alt="premium"
      width="1000"
      height="1000"
      className="object-cover object-left-top left-auto right-auto top-24 h-[60%] md:h-[80%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};