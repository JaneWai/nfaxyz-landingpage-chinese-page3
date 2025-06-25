import React from 'react'
import { Download, ChevronDown } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-orange-500">NFA</div>
        </div>
        
        <div className="flex items-center space-x-2 bg-yellow-600 bg-opacity-20 border border-yellow-600 rounded-full px-4 py-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-sm font-medium">自豪地构建在 BNB 链上</span>
        </div>

        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            <Download size={16} />
            <span>白皮书</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
            <Download size={16} />
            <span>演示文稿</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 text-orange-500 text-sm mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>不仅仅是代币，更是一个角色</span>
            </div>
            
            <h1 className="text-6xl font-bold leading-tight mb-6">
              <span className="text-orange-500">不是</span><br />
              <span className="text-white">F*CKING</span><br />
              <span className="text-orange-500">胡闹</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-8">
              新代币标准 - BEP007
            </p>
          </div>
        </div>

        {/* Center Character */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-64 h-64 bg-black rounded-full flex items-center justify-center relative">
                {/* Character eyes */}
                <div className="flex space-x-8">
                  <div className="w-6 h-12 bg-cyan-400 rounded-full"></div>
                  <div className="w-6 h-12 bg-cyan-400 rounded-full"></div>
                </div>
                
                {/* Character outline/glow */}
                <div className="absolute inset-0 rounded-full border-2 border-gray-600 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-md">
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-2 text-gray-300 text-sm mb-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <span>代币标准，不仅仅是代币炒作 - 全栈构建</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Large background text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="text-[12rem] font-bold text-gray-800 opacity-10 whitespace-nowrap transform translate-y-1/2">
            ON MEME COIN DEGEN
          </div>
        </div>

        {/* Join Waitlist Button */}
        <div className="flex justify-center pb-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-colors shadow-lg">
            加入等待名单
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-6">
          <div className="flex flex-col items-center text-gray-400 text-sm">
            <ChevronDown size={20} className="animate-bounce" />
            <span>滚动查看更多</span>
            <ChevronDown size={20} className="animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
