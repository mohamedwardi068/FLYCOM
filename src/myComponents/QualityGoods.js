import React from 'react';
import { Truck, Award, RotateCcw } from 'lucide-react';

const QualityGoods = () => {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 md:mb-6 text-gray-800 tracking-wide leading-tight">
                        We Provide High<br className="sm:hidden" /> Quality Goods
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed px-2">
                        A client that's unhappy for a reason is a problem,<br className="hidden xs:block" /> a client that's unhappy though he or she can't
                    </p>
                </div>

                {/* Features Grid - Horizontal scroll on mobile */}
                <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 space-x-4 sm:space-x-6 md:space-x-0 scrollbar-hide">
                    {/* Fast Delivery */}
                    <div className="min-w-[85vw] xs:min-w-[300px] sm:min-w-[320px] md:min-w-0 text-center p-6 sm:p-8 group hover:bg-gray-50 rounded-xl transition-all duration-300 flex-shrink-0 border border-gray-100 md:border-transparent hover:border-gray-200">
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                <Truck size={28} className="sm:w-8 sm:h-8 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-3 sm:mb-4 tracking-wide">
                            Fast Delivery
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-xs mx-auto">
                            Chances are there wasn't<br className="block sm:hidden" /> collaboration and<br className="hidden sm:block md:hidden" /> checkpoints, there<br className="block sm:hidden" /> wasn't a process.
                        </p>
                    </div>

                    {/* Best Quality */}
                    <div className="min-w-[85vw] xs:min-w-[300px] sm:min-w-[320px] md:min-w-0 text-center p-6 sm:p-8 group hover:bg-gray-50 rounded-xl transition-all duration-300 flex-shrink-0 border border-gray-100 md:border-transparent hover:border-gray-200">
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                <Award size={28} className="sm:w-8 sm:h-8 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-3 sm:mb-4 tracking-wide">
                            Best Quality
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-xs mx-auto">
                            It's content strategy gone<br className="block sm:hidden" /> awry right from the start.<br className="block sm:hidden" /> Forswearing the use of<br className="block sm:hidden" /> Lorem Ipsum.
                        </p>
                    </div>

                    {/* Free Return */}
                    <div className="min-w-[85vw] xs:min-w-[300px] sm:min-w-[320px] md:min-w-0 text-center p-6 sm:p-8 group hover:bg-gray-50 rounded-xl transition-all duration-300 flex-shrink-0 border border-gray-100 md:border-transparent hover:border-gray-200">
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                <RotateCcw size={28} className="sm:w-8 sm:h-8 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-3 sm:mb-4 tracking-wide">
                            Free Return
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-xs mx-auto">
                            True enough, but that's not<br className="block sm:hidden" /> all that it takes to get<br className="block sm:hidden" /> things back on track out<br className="block sm:hidden" /> there for a text.
                        </p>
                    </div>
                </div>
            </div>

            {/* Custom scrollbar hiding utility - add to your CSS */}
            <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default QualityGoods;