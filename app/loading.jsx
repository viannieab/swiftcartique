import React from "react";

export default function Loading() {
  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 z-[230] bg-white flex justify-center items-center'>
      <div className='spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}