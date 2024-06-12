import 'lazysizes';

const Header = (props) => {

    const { topBanner, title } = props;

    return (

        <div className="relative overflow-hidden">
            <div className="relative w-full lg:h-96 overflow-hidden">
                <div className="w-full h-full">
                    <img src={topBanner} alt="" className="w-full object-cover lazyload" />
                </div>
                <div className="absolute inset-0 bg-black opacity-65"></div>
            </div>
            <div className='mx-auto absolute lg:bottom-5 -bottom-4 left-0 w-full text-white p-8'>
                <div className="lg:w-10/12 container border-t border-slate-100 mx-auto flex flex-col justify-between space-x-10 md:flex-row lg:items-center">
                    <h1 className=' lg:pt-5 pt-2 text-xl md:text-5xl lg:text-4xl font-bold mb-4 md:mb-0 md:mr-8'>
                        {title}
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default Header;