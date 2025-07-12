import React from 'react';
import Image from "next/image";
import Container from "@/components/layout/Container";
const NavBar = () => {
    return (

        <nav className="sticky top-0 border-b z-50 bg-gray-700">
            <Container>
                <div className="flex justify-between items-center gap-8">
                    <div className={"flex items-center gap-1 cursor-pointer"}>
                        <Image
                            src="/microleague-sports-logo.svg"
                            alt="Microleague Sport Logo"
                            width={400}
                            height={300}
                        ></Image>
                    </div>
                    <div className="flex gap-5 sm:gap-8 items-center text-white">
                        <div>About Us</div>
                        <div>Coming Soon</div>
                        <div>Contact Us</div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;