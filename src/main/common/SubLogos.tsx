interface SubLogosProps {
    tituloLogo: string;
    ColorFondo: string;
}
export const SubLogos = ({tituloLogo , ColorFondo}: SubLogosProps) => {
    return (
        <div className="">
            <h1 className="text-3xl md:text-2xl  leading-[0.85] tracking-tighter select-none inline-flex gap-x-3 items-center font-bold ">
                ARX STAR <span className={`text-white px-2 py-1 rounded-lg  font-black text-lg`} style={{backgroundColor: ColorFondo}}>{tituloLogo}</span>
            </h1>
            
        </div>
    )


}