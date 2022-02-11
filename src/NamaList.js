import React from "react";
import Winners from "./Winners";
import "./namelist.css";
import NameList from "./TitleComent";

function NamaList() {
  return (
    <div className="nlist">
      <h2>Scholarship Winners
        for Jan 10<sup>th</sup> Batch</h2>
      <NameList
        title=""
        text="
        Congratulation
        for being one of the 51 students who are awarded the free scholarship to join the Jan 10 th, 2022 batch.
        "
      />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
      <Winners Name="Abel Wube" Adress="Ethiopia" />
    </div>
  );
}

export default NamaList;
