function WhatsappBtn() {
  return (
    <a href="https://wa.me/77006111135" target="_blank">
      <div className=" fixed bottom-[110px] right-[33px] w-13.75 h-13.75 rounded-full bg-[#25D366] z-10 flex items-center justify-center">
        <img src="/wp.svg" alt="wp" width={38} />
        <div className="absolute inset-[-20px] border border-[#25D366] rounded-full wAnim"></div>
        <div className="absolute inset-[-20px] border border-[#25D366] rounded-full wAnim delay-500"></div>
        <div className="absolute inset-[-20px] border border-[#25D366] rounded-full wAnim delay-1000"></div>
      </div>
    </a>
  );
}

export default WhatsappBtn;
