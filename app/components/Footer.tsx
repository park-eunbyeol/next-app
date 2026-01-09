import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:items-center md:justify-between">
                <div className="flex justify-center space-x-6 md:order-2">
                    {["홈", "게시글", "회사소개", "개인정보처리방침"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-gray-400 hover:text-gray-500 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base text-gray-400">
                        &copy; {currentYear} 데모 뉴스레터. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
