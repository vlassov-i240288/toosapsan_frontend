import MainForm from "../../mainForm/MainForm";

export default function ApplicationForm({ messageApi, onSuccess }) {
    return (
        <section className="p-5 bg-[#4c4c4c] w-screen md:w-screen">
            <div className="relative right-1 top-[-35px] md:top-[-55px] lg:top-[-68px] xl:top-[-64px]">
                <h2 className="text-[#242424] text-[40px] md:text-[80px] lg:text-[120px] xl:text-[160px] font-black uppercase">
                    Форма заявки:
                </h2>
            </div>
            <MainForm messageApi={messageApi} onSuccess={onSuccess} />
        </section>
    )
}