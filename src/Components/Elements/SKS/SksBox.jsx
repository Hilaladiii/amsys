const SksBox = ({title, content}) => {
  return (
    <div class="flex flex-col justify-center items-center bg-transparent rounded-lg shadow-lg px-3 py-5 w-[120px] text-black md:text-white lg:text-white border border-white animate-fade-down">
        <h2 class="text-[13px]">{title}</h2>
        <p class="text-2xl font-semibold">{content}</p>
    </div>
  )
}

export default SksBox
