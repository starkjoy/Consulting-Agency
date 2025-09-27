
"use client"

import Image from "next/image";

export default function ContactOption({ contacticon=null, contactfield }) {
    return (
        <div>
            <div className="contact1">
                <Image src={contacticon} height={0} width={0} alt="company" sizes="100vw" className="contact-icon"/>
                <p className="contact-text">{contactfield}</p>
            </div>
        </div>
    );
}