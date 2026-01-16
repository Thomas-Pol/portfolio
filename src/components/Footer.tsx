import React from "react";

export function Footer() {
    return (
        <footer id="contact" className="w-full min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#0369a1] text-white py-20 relative overflow-hidden">
            {/* achtergrond animatie */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-32 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-32 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* hoofd container contact */}
                <div className="text-center mb-20">
                    <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                        Laten we
                        <br />
                        <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">samenwerken</span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Heeft u een project in gedachten? Ik hoor het graag.
Laten we bespreken hoe we uw ideeën tot leven kunnen brengen met geavanceerde technologie en creatieve oplossingen.
                    </p>
                </div>

                {/* contact kaarten */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <a href="mailto:thepollies.thomas@gmail.com" className="group backdrop-blur-sm bg-blue-500/20 p-8 rounded-2xl border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Email</h3>
                        <p className="text-blue-200 text-lg">thepollies.thomas@gmail.com</p>
                        <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/thomas-pol-1b4748350/" className="group backdrop-blur-sm bg-blue-500/20 p-8 rounded-2xl border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">LinkedIn</h3>
                        <p className="text-blue-200 text-lg">Connect met mij</p>
                        <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                    </a>
                    
                    <a href="https://github.com/Thomas-Pol" className="group backdrop-blur-sm bg-blue-500/20 p-8 rounded-2xl border border-blue-400/30 hover:bg-blue-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">GitHub</h3>
                        <p className="text-blue-200 text-lg">Bekijk mijn code</p>
                        <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                    </a>
                </div>

                {/* footer */}
                <div className="border-t border-blue-400/30 pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-blue-200 mb-6 md:mb-0 text-lg">
                            © 2025 Portfolio van Thomas Pol. Web Developer.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


