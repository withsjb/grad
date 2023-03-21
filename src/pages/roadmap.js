import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Styles from "../styles/Roadmap.module.css";
import Roadmapdetail from "../component/Roaddetail/Roaddetail";
import Roaddetaila from "../component/Roaddetail/Roaddetaila";
import Roaddetailb from "../component/Roaddetail/Roaddetailb";
import Roaddetailc from "../component/Roaddetail/Roaddetailc";
import Roaddetaild from "../component/Roaddetail/Roaddetaild";

export default function Roadmap() {
  const [visiblea, setVisiblea] = useState(false);
  const [visibleb, setVisibleb] = useState(false);
  const [visiblec, setVisiblec] = useState(false);
  const [visibled, setVisibled] = useState(false);
  const [visiblee, setVisiblee] = useState(false);

  return (
    <div className={Styles.body}>
      <Navbar />
      <div className={Styles.road}>
        <div
          className={Styles.roada}
          onClick={() => {
            setVisiblea(!visiblea);
            setVisibleb(false);
            setVisiblec(false);
            setVisibled(false);
            setVisiblee(false);
          }}
        >
          stage 1<br /> 소개{" "}
        </div>
        <div
          className={Styles.roadb}
          onClick={() => {
            setVisiblea(false);
            setVisibleb(!visibleb);
            setVisiblec(false);
            setVisibled(false);
            setVisiblee(false);
          }}
        >
          stage 2<br /> 리눅스 구조{" "}
        </div>

        <div
          className={Styles.roadc}
          onClick={() => {
            setVisiblea(false);
            setVisibleb(false);
            setVisiblec(!visiblec);
            setVisibled(false);
            setVisiblee(false);
          }}
        >
          stage 3<br />
          설치가이드 페이지{" "}
        </div>

        <div
          className={Styles.roadd}
          onClick={() => {
            setVisiblea(false);
            setVisibleb(false);
            setVisiblec(false);
            setVisibled(!visibled);
            setVisiblee(false);
          }}
        >
          stage 4<br />
          vi 편집기 사용법{" "}
        </div>
        <div
          className={Styles.roade}
          onClick={() => {
            setVisiblea(false);
            setVisibleb(false);
            setVisiblec(false);
            setVisibled(false);
            setVisiblee(!visiblee);
          }}
        >
          stage 5<br />쉘 스크립트 기초 명령어 정리{" "}
        </div>
        <div className={Styles.roadtriangle}></div>
      </div>

      {visiblea && <Roadmapdetail />}
      {visibleb && <Roaddetaila />}
      {visiblec && <Roaddetailb />}
      {visibled && <Roaddetailc />}
      {visiblee && <Roaddetaild />}
    </div>
  );
}
