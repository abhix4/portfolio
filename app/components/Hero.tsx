export default function Hero(){
    return (
        <div className="flex justify-center h-[320px] font-Poppins sm:w-full sm:justify-start sm:h-[250px] sm:mt-[20px]">
           <div className="flex flex-col items-center justify-center gap-8 text-white max-w-[1000px] sm:max-w-full sm:items-start sm:gap-2">
           <h1 className="text-[36px] font sm:text-[24px]">Abhishek Singh</h1>
            <div className="text-center text-[22px] max-w-[900px] leading-2 sm:text-[15px] sm:text-start sm:w-[96%] ">
            A 21-year-old Programmer/Developer  from India, crafting immersive web experiences. Currently building <span className="font-medium"><a href="https://github.com/Abhiifour/panchayat">Panchayat</a></span>,
             a chat app that's all about connection. Passionate about clean code, sleek design, 
             and contributing to <span className="font-medium">open-source</span> projects.<br></br>
              Let's create something extraordinary.
            </div>
           </div>
        </div>
    )
}