import { useRouter } from "next/router";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";
import { OwnProp } from "./posts.interface";

export default function PostsList({
  title,
  content,
  createdAt,
  onClick,
  category,
  image,
}: OwnProp): JSX.Element {
  const { query } = useRouter();

  return (
    <div
      className="flex w-full items-start pt-3   rounded  justify-between   "
      onClick={onClick}
    >
      <div className="flex flex-col items-start !justify-between h-full w-full ">
        <h2 className=" m-0  leading-8	whitespace-normal pb-2 w-full  font-bold">
          {title}
        </h2>

        <p
          className="  font-normal text-base	text-justify m-0 font-serif text-slate-600 flex !justify-between "
          color="desColor"
        >
          {content && content.length > 215
            ? `${content.substring(0, 215)} ...`
            : content}
        </p>

        <div className="py-6">
          <ThemedText className=" bg-slate-100  rounded-full font-sans  py-1 text-sm px-2">
            {category?.name}
          </ThemedText>
        </div>
      </div>

      <div className="ml-16 bg-cover">
        {image == null ? (
          <img
            src="/noimage.jpeg"
            width={200}
            height={150}
            alt={title}
            className="rounded-md shadow-xl bg-cover"
          />
        ) : (
          <img
            src={image}
            alt={title}
            width={160}
            height={160}
            className="rounded-md shadow-xl bg-cover"
          />
        )}
      </div>

      {/* <hr className=" h-1 text-slate-400" /> */}
    </div>
  );
}
