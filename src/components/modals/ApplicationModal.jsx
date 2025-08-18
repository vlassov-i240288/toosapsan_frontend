import {
    HiOutlineLocationMarker,
    HiOutlineSwitchHorizontal,
    HiOutlineCube,
    HiOutlineScale,
    HiOutlineUser,
    HiPhone
} from "react-icons/hi";

function AplicationModal({ children, onClose }) {
    return (
        <div className="">
            <form action="" className='border border-amber-400 p-5 rounded'>
                
                <div className='flex flex-col gap-2 relative'>
                    <p className='text-white text-2xl font-bold'>Данные о грузе :</p>
                    <button 
                    onClick={onClose} 
                    className="absolute right-0 text-white"
                >
                    ✖
                </button>
                {children}
                    <div className='flex flex-col gap-2'>

                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px] '>
                                <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className='bg-amber-50 p-3 ps-10 w-full rounded text-gray-800' type="text" placeholder='Откуда' />
                        </div>


                        <div className='flex w-10 h-10 cursor-pointer items-center self-center'>
                            <HiOutlineSwitchHorizontal size={25} color="oklch(76.9% 0.188 70.08)" />
                        </div>

                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px]'>
                                <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className='bg-amber-50 p-3 ps-10 w-full rounded text-gray-800' type="text" placeholder='Куда' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px]'>
                                <HiOutlineCube size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>

                            <input className='bg-amber-50 p-3 ps-10 w-full rounded text-gray-800' type="number" placeholder='Объём' />
                        </div>
                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px]'>
                                <HiOutlineScale size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className='bg-amber-50 p-3 ps-10 w-full rounded text-gray-800' type="number" placeholder='Вес' />
                        </div>
                    </div>
                    <p className='text-white text-2xl font-bold'>Контактные данные :</p>
                    <div className='flex flex-col gap-2'>

                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px]'>
                                <HiOutlineUser size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className='bg-white p-3 ps-10 w-full rounded text-gray-800' type="text" placeholder='Имя' />
                        </div>

                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px]'>
                                <HiPhone size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className='bg-white p-3 ps-10 w-full rounded text-gray-800' type="text" placeholder='Номер телефона' />
                        </div>
                    </div>

                    <button className="bg-amber-400 rounded p-3 cursor-pointer hover:bg-amber-500 transition-colors duration-300 text-gray-800">
                        Расчитать стоимость
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AplicationModal