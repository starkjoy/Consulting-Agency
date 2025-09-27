
"use client"

import Image from "next/image";

export function DivideProcess() {
    return (
        <div>
            <div className="process-track">
                <div className="vertical-track"></div>
            </div>
        </div>
    );
}

export function ProcessStage({ plink=null, ptitle, pdescribed}) {
    return (
        <div>
            <div className="step1">
                <Image src={plink} className="step-icon" sizes="100vw" height={0} width={0} alt="vector-icons"/>
                <p className="step-title">{ptitle}</p>
                <p className="step-description">{pdescribed}</p>
            </div>
        </div>
    );
}