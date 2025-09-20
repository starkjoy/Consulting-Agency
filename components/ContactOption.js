
"use client"

import Image from "next/image";

export default function ContactOption() {
    return (
        <div>
            <div className="contact1">
                <Image src="/contact_icon.svg" height={0} width={0} alt="company" sizes="100vw" className="contact-icon"/>
                <p className="contact-text">Contact</p>
            </div>
        </div>
    );
}