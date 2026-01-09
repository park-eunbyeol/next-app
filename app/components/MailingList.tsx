"use client";

import { useState } from "react";

export default function MailingList() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`구독해 주셔서 감사합니다: ${email}`);
        setEmail("");
    };

    return (
        <section className="my-16 p-8 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-2xl relative overflow-hidden group">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/10 rounded-full blur-3xl group-hover:bg-black/20 transition-all duration-500"></div>

            <div className="relative z-10 max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                    메일링 리스트 구독하기
                </h2>
                <p className="text-indigo-100 mb-8 text-lg font-medium">
                    최신 소식과 독점 혜택을 가장 먼저 받아보세요. 스팸은 절대 보내지 않습니다.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일 주소를 입력하세요"
                        required
                        className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md transition-all text-lg"
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 rounded-2xl bg-white text-indigo-600 font-bold text-lg hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        구독하기
                    </button>
                </form>

                <p className="mt-4 text-white/60 text-sm">
                    언제든지 구독을 해지할 수 있습니다.
                </p>
            </div>
        </section>
    );
}
