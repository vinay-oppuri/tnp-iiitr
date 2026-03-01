import React from "react";
import ReusableBlock2 from "./ReusableBlock2";
import { WhyUs } from "../data/Home";

export default function WhyRecruitUs() {
    return (
        <div className="flex flex-col mb-[10vh]">
            {WhyUs.map((reason: any, id: number) => (
                <ReusableBlock2
                    key={id}
                    heading={reason.heading}
                    content={reason.content}
                />
            ))}
        </div>
    );
}
