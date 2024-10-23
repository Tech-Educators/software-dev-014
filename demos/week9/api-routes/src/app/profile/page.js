"use client";
import { Popover } from "radix-iu";
import { fetchData } from "@/utils/fetchData";
export default function ProfilePage() {
  const data = fetchData();
  //server action
  return (
    <>
      <h1>Profile Page</h1>
      {data.map()}
    </>
  );
}
