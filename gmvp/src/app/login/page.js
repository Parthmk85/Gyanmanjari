'use client';

import Navbar from '../components/Navbar';

export default function Login() {
  return (
    <div className="min-h-screen flex bg-white font-sans text-gray-900 selection:bg-[#284390] selection:text-white">
      {/* Navbar is optional on a split screen login, but included if part of global nav needs */}
      <div className="absolute top-0 w-full z-50">
           <Navbar />
      </div>

      {/* LEFT SIDE: Brand & Visuals */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#284390] via-[#1e3a8a] to-[#0f172a] relative overflow-hidden items-center justify-center p-12">
           
           {/* Abstract Background Patterns */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10">
               <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white/30 animate-pulse"></div>
               <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full border border-white/20"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
           </div>

           {/* Brand Content */}
           <div className="relative z-10 text-center text-white max-w-lg">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl mb-8 border border-white/20 shadow-2xl">
                    <i className="fas fa-graduation-cap text-5xl text-white"></i>
                </div>
                <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                    Gyanmanjari <br/> <span className="text-[#dea002]">Vidyapith</span>
                </h1>
                <p className="text-lg text-blue-100/80 font-medium leading-relaxed">
                    "Empowering the next generation of leaders with world-class education and values."
                </p>
                
                {/* Stats / Trust Markers */}
                <div className="mt-12 flex justify-center gap-8 border-t border-white/10 pt-8">
                    <div>
                        <p className="text-2xl font-bold text-white">5000+</p>
                        <p className="text-xs text-blue-200 uppercase tracking-wider">Students</p>
                    </div>
                    <div className="w-px bg-white/20 h-10 my-auto"></div>
                    <div>
                        <p className="text-2xl font-bold text-white">100%</p>
                        <p className="text-xs text-blue-200 uppercase tracking-wider">Success Rate</p>
                    </div>
                </div>
           </div>
      </div>

      {/* RIGHT SIDE: Login Form (Reference Style) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white relative">
           
           <div className="w-full max-w-md">
               <div className="text-center lg:text-left mb-10">
                   <h2 className="text-3xl font-extrabold text-[#284390] mb-2">Welcome back</h2>
                   <p className="text-gray-500 text-sm">Sign in to access your student dashboard</p>
               </div>

               <form className="flex flex-col gap-5">
                   
                   {/* Student ID Input */}
                   <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">
                           Student ID <span className="text-red-500">*</span>
                       </label>
                       <input 
                         type="text" 
                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#284390] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-sm"
                         placeholder="Enter your Student ID"
                       />
                       <p className="text-xs text-gray-400 mt-1.5">Enter your student ID without spaces</p>
                   </div>

                   {/* Password Input */}
                   <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">
                           Password <span className="text-red-500">*</span>
                       </label>
                       <div className="relative">
                           <input 
                             type="password" 
                             className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#284390] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-sm"
                             placeholder="Enter your password"
                           />
                           <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                               <i className="fas fa-eye"></i>
                           </button>
                       </div>
                   </div>

                   {/* Captcha Section */}
                   <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">
                           Captcha Code <span className="text-red-500">*</span>
                       </label>
                       <div className="flex gap-4">
                            <div className="h-11 w-36 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center select-none relative overflow-hidden">
                                <span className="font-mono text-xl font-bold text-gray-600 tracking-widest" style={{ transform: 'rotate(-5deg)' }}>5 9 3 2</span>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                            </div>
                            <input 
                                type="text" 
                                placeholder="Enter code"
                                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#284390] outline-none text-sm font-medium"
                            />
                       </div>
                       <button type="button" className="text-xs text-[#284390] font-bold mt-2 flex items-center gap-1 hover:underline">
                           <i className="fas fa-sync-alt"></i> Refresh
                       </button>
                   </div>

                   {/* Sign In Button */}
                   <button className="w-full bg-[#284390] hover:bg-[#1a2c63] text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-2">
                       <i className="fas fa-sign-in-alt"></i> Sign In
                   </button>

                   {/* Secure Badge */}
                   <div className="flex items-center justify-center gap-1.5 text-xs text-green-600 font-bold py-1">
                       <i className="fas fa-lock"></i> Secured with SSL encryption
                   </div>

                   {/* Divider */}
                   <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">OR</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                   </div>

                   {/* Admin Link */}
                   <div className="text-center">
                       <p className="text-xs text-gray-500 mb-3">Are you an Admin, Principal, or Counsellor?</p>
                       <button className="bg-[#1e293b] hover:bg-black text-white text-sm font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 mx-auto">
                            <i className="fas fa-user-shield"></i> Admin Login Portal
                       </button>
                   </div>

                   {/* Back to Home */}
                   <a href="/" className="text-xs text-gray-500 font-medium text-center hover:text-[#284390] mt-4 flex items-center justify-center gap-1">
                       <i className="fas fa-arrow-left"></i> Back to Home
                   </a>
               </form>
           </div>
      </div>
    </div>
  );
}
