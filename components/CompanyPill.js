
"use client"

import Image from "next/image";

export default function CompanyPill() {
    return (
        <div>
            <Image src="/company.svg" height={0} width={0} alt="company" sizes="100vh" className="rcg_company"/>
        </div>
    );
}